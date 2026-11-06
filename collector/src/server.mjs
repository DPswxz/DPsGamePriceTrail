import cors from 'cors';
import { PriceHistory } from './price-history.mjs';
import { startArchiveMetadata } from './archive-metadata.mjs';
import { TitleTranslator } from './title-translator.mjs';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { NintendoCollector, PLATFORM_CONFIG } from './nintendo.mjs';
import { nintendoCovers, nintendoImageUrl } from './nintendo-cover.mjs';
import { gameCovers, gameCoverUrl } from './game-cover.mjs';
import { PlayStationCollector } from './ps5.mjs';
import { PlayStationJpCollector } from './ps5-jp.mjs';
import { SteamCollector } from './steam.mjs';
import { SteamGlobalCollector } from './steam-global.mjs';
import { BackgroundRefresh } from './background-refresh.mjs';
import { nextHourlyRefresh } from './hourly-schedule.mjs';
import { DailyRefresh, SixHourlyRefresh } from './daily-refresh.mjs';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const collectorRoot = path.resolve(currentDir, '..');
const priceHistory = new PriceHistory(process.env.PRICE_HISTORY_FILE || path.join(collectorRoot, 'data', 'price-history.sqlite'));
await priceHistory.init();
const titleTranslator = new TitleTranslator(path.join(collectorRoot, 'data', 'title-translations.sqlite'), { apiKey: process.env.GOOGLE_TRANSLATE_API_KEY });
await titleTranslator.init();
const app = express();
const port = Number(process.env.PORT || 8787);
const host = process.env.HOST || '0.0.0.0';
const refreshMinutes = 60;
let refreshTimer;
let nextRefreshAt = null;
const backgroundRefresh = new BackgroundRefresh({ stateFile: path.join(collectorRoot, 'data', 'refresh-status.json') });
await backgroundRefresh.init();
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '*').split(',').map((item) => item.trim());

const nintendoCollector = new NintendoCollector({
  cacheFile: process.env.CACHE_FILE || path.join(collectorRoot, 'data', 'nintendo-cache.json'),
  refreshMinutes
});

const ps5Collector = new PlayStationCollector({
  cacheFile: process.env.PS5_CACHE_FILE || path.join(collectorRoot, 'data', 'ps5-cache.json'),
  refreshMinutes
});

const ps5JpCollector = new PlayStationJpCollector({
  cacheFile: process.env.PS5_JP_CACHE_FILE || path.join(collectorRoot, 'data', 'ps5-jp-cache.json'),
  langCacheFile: process.env.PS5_JP_LANG_CACHE_FILE || path.join(collectorRoot, 'data', 'ps5-jp-lang-cache.json'),
  refreshMinutes
});

const steamCollector = new SteamCollector({
  cacheFile: process.env.STEAM_CACHE_FILE || path.join(collectorRoot, 'data', 'steam-cache.json'),
  refreshMinutes
});
const steamGlobalCollector = new SteamGlobalCollector({
  cacheFile: process.env.STEAM_GLOBAL_CACHE_FILE || path.join(collectorRoot, 'data', 'steam-global-cache.json'),
  refreshMinutes
});

app.disable('x-powered-by');
app.use(cors({
  origin: allowedOrigins.includes('*') ? true : allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'], exposedHeaders: ['ETag']
}));
app.use(express.json({ limit: '32kb' }));
app.use((_request, response, next) => {
  const sendJson = response.json.bind(response);
  response.json = payload => sendJson(titleTranslator.decorate(payload));
  next();
});

app.post('/api/settings', (request, response) => {
  return response.status(403).json({ ok: false, error: '刷新周期固定为60分钟' });
});

app.get('/health', (_request, response) => {
  const platforms = Object.fromEntries(Object.keys(PLATFORM_CONFIG).map((platform) => {
    const data = nintendoCollector.get(platform);
    return [platform, nintendoCollector.status(platform)];
  }));
  const ps5Data = ps5Collector.get();
  platforms.ps5 = backgroundRefresh.status('ps5', ps5Data);
  if (platforms.ps5.refreshState === 'refreshing') platforms.ps5.progress = ps5Collector.progress;
  const ps5JpData = ps5JpCollector.get();
  platforms.ps5_jp = backgroundRefresh.status('ps5-jp', ps5JpData);
  if (platforms.ps5_jp.refreshState === 'refreshing') platforms.ps5_jp.progress = ps5JpCollector.progress;
  const steamData = steamCollector.get();
  platforms.steam = backgroundRefresh.status('steam', steamData);
  const steamGlobalData = steamGlobalCollector.get();
  platforms.steam_global = backgroundRefresh.status('steam-global', steamGlobalData);

  response.set('Cache-Control', 'no-store');
  response.json({ ok: true, service: 'game-pulse-nintendo-collector', refreshMinutes,
    serverTime: new Date().toISOString(), nextRefreshAt,
    refreshInProgress: backgroundRefresh.tasks.size > 0, platforms });
});

// Nintendo API
app.get('/api/covers/image', async (request,response) => {
  let url;
  try { url=gameCoverUrl(request.query.url); }
  catch { return response.status(400).json({ok:false,error:'无效的封面地址'}); }
  try {
    const cover=await gameCovers.get(url);
    response.set({'ETag':cover.etag,'Cache-Control':'private, max-age=86400'});
    if(request.headers['if-none-match']===cover.etag) return response.status(304).end();
    return response.type('jpeg').send(cover.body);
  } catch { return response.status(502).json({ok:false,error:'封面暂时不可用'}); }
});
app.get('/api/nintendo/image', async (request, response) => {
  let url;
  try { url = nintendoImageUrl(request.query.url); }
  catch { return response.status(400).json({ ok: false, error: '无效的任天堂封面地址' }); }
  try {
    const body = await nintendoCovers.get(url);
    response.set('Cache-Control', 'public, max-age=86400');
    return response.type('jpeg').send(body);
  } catch {
    return response.status(502).json({ ok: false, error: '官方封面暂时不可用' });
  }
});
// 浏览器仅读取已发布缓存；请求更新也在后台进行，并限制为每小时一次。
const rankingSources = [
  ['nintendo', nintendoCollector, 'refreshAll', request => nintendoCollector.get(request.query.platform || 'switch1')],
  ['ps5', ps5Collector, 'refresh', () => ps5Collector.get()],
  ['ps5-jp', ps5JpCollector, 'refresh', () => ps5JpCollector.get()],
  ['steam', steamCollector, 'refresh', () => steamCollector.get()],
  ['steam-global', steamGlobalCollector, 'refresh', () => steamGlobalCollector.get()]
];
const dailySchedules = new Map([
  ['ps5', new DailyRefresh(`${ps5Collector.cacheFile}.daily-schedule.json`)],
  ['ps5-jp', new DailyRefresh(`${ps5JpCollector.cacheFile}.daily-schedule.json`)],
  ['steam', new SixHourlyRefresh(`${steamCollector.cacheFile}.six-hour-schedule.json`)],
  ['steam-global', new SixHourlyRefresh(`${steamGlobalCollector.cacheFile}.six-hour-schedule.json`)]
]);
async function queueRankingRefresh(key, collector, method, { force = false, scheduled = false } = {}) {
  if (backgroundRefresh.tasks.has(key)) return false;
  // 先检查各平台的执行计划，跳过时不改变上次真实采集状态。
  const daily = dailySchedules.get(key);
  if (daily && !await daily.claim()) return false;
  return backgroundRefresh.start(key, () => collector[method]({ force }), { scheduled });
}
for (const [key, collector, method, get] of rankingSources) {
  app.get('/api/' + key + '/rankings', async (request, response) => {
    if (key === 'nintendo' && !PLATFORM_CONFIG[request.query.platform || 'switch1']) {
      return response.status(400).json({ ok: false, error: '无效的任天堂平台' });
    }
    const data = get(request);
    if (!data) await queueRankingRefresh(key, collector, method);
    if (!data) return response.status(503).json({ ok: false, pending: true, error: '后台正在准备数据' });
    response.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=900');
    const status = key === 'nintendo' ? nintendoCollector.status(request.query.platform || 'switch1') : backgroundRefresh.status(key, data);
    return response.json({ ok: true, ...data, ...status });
  });
  app.post('/api/' + key + '/refresh', async (_request, response) => {
    const force = _request.body?.force === true;
    const local = ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(_request.socket.remoteAddress)
      && !_request.headers.origin && !_request.headers['x-forwarded-for'];
    if (force && !local) return response.status(403).json({ ok: false, error: '立即刷新仅限服务器本机操作' });
    const queued = (force || !get(_request)) && await queueRankingRefresh(
      key, collector, method, { force, scheduled: force });
    response.status(202).json({ ok: true, queued: Boolean(queued), cached: true, nextRefreshAt });
  });
}

app.get('/api/games/archive', (request,response)=>{
  const {platform='',q='',status='',page='1'}=request.query;
  const platforms=['switch1','switch2','switch1_hk','switch2_hk','ps5_hk','ps5_jp','steam','steam_global'];
  if(typeof platform!=='string'||platform&&!platforms.includes(platform)||typeof q!=='string'||q.length>200||
    !['','current','exited'].includes(status)||!/^\d{1,7}$/.test(String(page))||Number(page)<1)
    return response.status(400).json({ok:false,error:'游戏档案查询参数无效'});
  response.set('Cache-Control','no-store');
  response.json({ok:true,...priceHistory.catalog({platform,query:q,status,page:Number(page)})});
});
app.get('/api/prices/history', async (request, response) => {
  const keys=Array.isArray(request.query.key)?request.query.key:request.query.key?[request.query.key]:[];
  const since=request.query.since?Date.parse(request.query.since):null;
  const after=request.query.after?Date.parse(request.query.after):null;
  if(keys.length>100||keys.some(key=>typeof key!=='string'||key.length>500)||(since!==null&&!Number.isFinite(since))||(after!==null&&(!Number.isFinite(after)||keys.length!==1)))
    return response.status(400).json({ok:false,error:'历史查询参数无效'});
  response.set('Cache-Control', 'no-store');
  const histories=priceHistory.query({keys,since,after,limit:keys.length?1000:4000});
  response.json({ok:true,histories,rankingGaps:priceHistory.rankingGaps(Object.keys(histories)),continuations:keys.length?priceHistory.continuations(histories):{}});
});
app.get('/api/translations', (_request, response) => {
  const titles = {};
  titleTranslator.visit(translationPayload(), game => {
    const cn = titleTranslator.decorate({ ...game, price: 0 }).cn;
    if (cn && cn !== game.name) titles[game.name] = cn;
  });
  response.set('Cache-Control', 'no-store');
  response.json({ ok: true, titles, pending: Boolean(titleTranslator.running) });
});
app.use('/api', (_request, response) => response.status(404).json({ ok: false, error: '接口不存在' }));

if (process.env.SERVE_FRONTEND !== '0') {
  const frontend = path.resolve(collectorRoot, '..', 'dist');
  app.use(express.static(frontend));
  app.get('*path', (_request, response) => response.sendFile(path.join(frontend, 'index.html')));
}

await Promise.all([nintendoCollector.init(), ps5Collector.init(), ps5JpCollector.init(), steamCollector.init(), steamGlobalCollector.init()]);
await Promise.all([...dailySchedules.values()].map(schedule => schedule.init()));
// 用已有静态快照补齐旧档案名称；只补资料，不改历史价格、时间或在榜状态。
for(const [file,platform] of [['nintendo-data.js',null],['ps5-data.js','ps5_hk'],['ps5-jp-data.js','ps5_jp'],['steam-data.js','steam'],['steam-global-data.js','steam_global']]){
  try{
    const source=await readFile(path.resolve(collectorRoot,'..','dist',file),'utf8');
    const data=JSON.parse(source.replace(/^window\.[A-Z0-9_]+\s*=\s*/,'').replace(/;\s*$/,''));
    const snapshots=platform?{[platform]:data}:Object.fromEntries(Object.entries(data).map(([key,value])=>[key,value.games||[]]));
    priceHistory.restoreCatalogMetadata(titleTranslator.decorate(snapshots));
  }catch{}
}
function capturePriceHistory() {
  return priceHistory.capture(titleTranslator.decorate({
    ...Object.fromEntries(Object.keys(PLATFORM_CONFIG).map(key => [key, nintendoCollector.get(key)])),
    ps5_hk: ps5Collector.get(), ps5_jp: ps5JpCollector.get(),
    steam: steamCollector.get(), steam_global: steamGlobalCollector.get()
  }));
}
await capturePriceHistory();
priceHistory.refreshCatalogTitles(game=>titleTranslator.decorate({...game,price:0}).cn);
const stopArchiveMetadata=startArchiveMetadata(priceHistory,titleTranslator,{
  // 档案资料补全也只在对应榜单实际采集期间访问官方。
  allowLookup: platform => platform.startsWith('ps5')
    ? backgroundRefresh.tasks.has(platform === 'ps5_hk' ? 'ps5' : 'ps5-jp')
    : platform.startsWith('steam')
      ? backgroundRefresh.tasks.has(platform === 'steam_global' ? 'steam-global' : 'steam')
      : platform.startsWith('switch') && !platform.endsWith('_hk')
        ? nintendoCollector.platformRefresh.tasks.has(platform) : true
});
function translationPayload() {
  return [Object.keys(PLATFORM_CONFIG).map(key => nintendoCollector.get(key)), ps5Collector.get(), ps5JpCollector.get(), steamCollector.get(), steamGlobalCollector.get()];
}
titleTranslator.refresh(translationPayload);
for (const [collector, method] of [[nintendoCollector, 'refreshAll'], [ps5Collector, 'refresh'], [ps5JpCollector, 'refresh'], [steamCollector, 'refresh'], [steamGlobalCollector, 'refresh']]) {
  const refresh = collector[method].bind(collector);
  collector[method] = async (...args) => {
    const result = await refresh(...args);
    await capturePriceHistory();
    titleTranslator.refresh(translationPayload);
    return result;
  };
}
setInterval(capturePriceHistory, 60_000).unref();

const server = app.listen(port, host, () => console.log(`Game Pulse collector listening on http://${host}:${server.address().port}`));

// 已有缓存直接展示并等待整点；只有首次没有数据时立即在后台准备。
if (process.env.COLLECT_ON_START !== '0') {
  for (const [key, collector, method, get] of rankingSources) {
    const hasCache = key === 'nintendo'
      ? Object.keys(PLATFORM_CONFIG).every(platform => collector.get(platform))
      : get({ query: {} });
    if (!hasCache) await queueRankingRefresh(key, collector, method);
  }
}

for (const signal of ['SIGTERM', 'SIGINT']) {
  process.on(signal, () => {
    stopArchiveMetadata();
    clearTimeout(refreshTimer);
    server.close(() => priceHistory.pending.finally(()=>{priceHistory.close();process.exit(0);}));
    setTimeout(() => process.exit(0), 10_000).unref();
  });
}

process.stdout?.on('error', () => {});
process.stderr?.on('error', () => {});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

// 按时钟整点启动，不随启动时间、缓存时间或采集耗时漂移。
function scheduleRefresh() {
  clearTimeout(refreshTimer);
  const now = Date.now();
  const deadline = nextHourlyRefresh(now);
  nextRefreshAt = new Date(deadline).toISOString();
  refreshTimer = setTimeout(() => {
    scheduleRefresh();
    console.log(`[${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}] 整点后台采集...`);
    for (const [key, collector, method] of rankingSources) {
      queueRankingRefresh(key, collector, method, { force: true, scheduled: true })
        .catch(error => console.error(`${key} 刷新计划读取失败：${error.message}`));
    }
  }, deadline - now);
}
scheduleRefresh();
