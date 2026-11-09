import { chromium } from 'playwright';
import { access, mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { nintendoCovers, nintendoRankingCover } from './nintendo-cover.mjs';
import { describeNintendoRanking } from './nintendo-ranking-source.mjs';
import { DailyRefresh, SixHourlyRefresh } from './daily-refresh.mjs';
import { BackgroundRefresh } from './background-refresh.mjs';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const PLATFORM_CONFIG = {
  switch1: {
    label: 'Nintendo Switch',
    officialLimit: 100,
    url: 'https://store-jp.nintendo.com/software/ranking/switch/'
  },
  switch2: {
    label: 'Nintendo Switch 2',
    officialLimit: 30,
    url: 'https://store-jp.nintendo.com/software/ranking/switch2/'
  },
  switch1_hk: {
    label: 'Nintendo Switch 香港',
    officialLimit: 30,
    url: 'https://store.nintendo.com.hk/digital-games/charts?platform=switch',
    region: 'hk'
  },
  switch2_hk: {
    label: 'Nintendo Switch 2 香港',
    officialLimit: 30,
    url: 'https://store.nintendo.com.hk/digital-games/charts?platform=switch2',
    region: 'hk'
  }
};

const COLORS = ['#dc3d5a', '#278f83', '#5266a8', '#ba7b32', '#7858a6', '#3a7a55'];

function getBrowserCandidates() {
  return [
    process.env.BROWSER_EXECUTABLE_PATH,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser'
  ].filter(Boolean);
}

async function existingBrowserPath() {
  for (const candidate of getBrowserCandidates()) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Playwright 自带 Chromium 时不需要系统浏览器。
    }
  }
  return undefined;
}

function mapProduct(product, index, platform, previousRanks, languageInfo) {
  const regularPrice = Number(product.regularPrice || 0);
  const labelDiscount = Number(String(product.saleLabel || '').match(/(\d+)\s*%/)?.[1] || 0);
  const salePrice = product.isSale && product.salePrice != null
    ? Number(product.salePrice)
    : regularPrice;
  const apiDiscount = product.isSale && regularPrice > 0
    ? Math.max(0, Math.round((1 - salePrice / regularPrice) * 100))
    : 0;
  const discount = apiDiscount || labelDiscount;
  const oldPrice = discount && salePrice > 0
    ? Math.round(salePrice / (1 - discount / 100))
    : null;
  const previousRank = previousRanks.get(product.id);
  const trend = !previousRank || previousRank === index + 1
    ? 'same'
    : previousRank > index + 1 ? 'up' : 'down';
  const image = product.imageUrl?.squareHeroBanner || product.imageUrl?.heroBanner || '';
  const hasChinese = languageInfo ? Boolean(languageInfo.hasChinese) : false;

  return {
    id: product.id,
    rank: index + 1,
    name: product.name,
    cn: product.name,
    meta: '数字版',
    platform: platform.startsWith('switch2') ? 'Switch 2' : 'Switch',
    price: salePrice,
    old: oldPrice,
    discount,
    trend,
    cover: product.name?.slice(0, 2).toUpperCase() || 'NS',
    color: COLORS[index % COLORS.length],
    image,
    url: `https://store-jp.nintendo.com/item/software/D${product.id}`,
    isFree: Boolean(product.isFree),
    saleLabel: product.saleLabel || null,
    hasChinese,
    languages: languageInfo?.langs || []
  };
}

async function launchBrowser() {
  const executablePath = await existingBrowserPath();
  return chromium.launch({
    headless: process.env.HEADLESS !== 'false',
    executablePath,
    args: [
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox'
    ]
  });
}

export class NintendoCollector {
  constructor({ cacheFile, refreshMinutes = 15 } = {}) {
    this.cacheFile = cacheFile || path.resolve('data/nintendo-cache.json');
    this.refreshMinutes = Math.max(5, Number(refreshMinutes) || 15);
    this.cache = {};
    this.refreshing = null;
    this.hkSchedule = new DailyRefresh(`${this.cacheFile}.hk-schedule.json`);
    this.jpSchedule = new SixHourlyRefresh(`${this.cacheFile}.jp-schedule.json`);
    this.platformRefresh = new BackgroundRefresh({ stateFile: `${this.cacheFile}.refresh-status.json` });
  }

  async init() {
    await mkdir(path.dirname(this.cacheFile), { recursive: true });
    await this.hkSchedule.init();
    await this.jpSchedule.init();
    await this.platformRefresh.init();
    try {
      this.cache = JSON.parse(await readFile(this.cacheFile, 'utf8'));
    } catch {
      this.cache = {};
    }
    // 将旧版磁盘封面路径迁移为随前端发布的官方图片地址。
    if (Object.values(this.cache).some(data => data.games?.some(game => /^\/?assets\/nintendo-hk\//.test(game.image || '')))) {
      const source = await readFile(new URL('../../dist/nintendo-data.js', import.meta.url), 'utf8');
      const bundled = JSON.parse(source.slice(source.indexOf('=') + 1).trim().replace(/;$/, ''));
      for (const platform of ['switch1_hk', 'switch2_hk']) {
        const images = new Map((bundled[platform]?.games || []).map(game => [game.id, game.image]));
        for (const game of this.cache[platform]?.games || []) {
          if (/^\/?assets\/nintendo-hk\//.test(game.image || '')) game.image = images.get(game.id) || '';
        }
      }
      await this.#save();
    }
    for (const platform of ['switch1_hk', 'switch2_hk']) {
      for (const game of this.cache[platform]?.games || []) {
        try { if (game.image) game.image = nintendoRankingCover(game.image); }
        catch { game.image = ''; }
      }
    }
  }

  get(platform) {
    if (!PLATFORM_CONFIG[platform]) throw new Error(`不支持的平台：${platform}`);
    return describeNintendoRanking(this.cache[platform] || null, platform);
  }

  status(platform) {
    return this.platformRefresh.status(platform, this.get(platform));
  }

  async refreshAll({ force = false } = {}) {
    if (this.refreshing) return this.refreshing;
    const maxAge = this.refreshMinutes * 60 * 1000;
    const fresh = Object.keys(PLATFORM_CONFIG).every((platform) => {
      const updated = Date.parse(this.cache[platform]?.updatedAt || 0);
      return this.cache[platform]?.games?.length && Date.now() - updated < maxAge;
    });
    if (!force && fresh) return this.cache;

    this.refreshing = this.#collectBoth().finally(() => {
      this.refreshing = null;
    });
    return this.refreshing;
  }

  async #collectBoth() {
    const refreshHk = await this.hkSchedule.claim();
    const refreshJp = await this.jpSchedule.claim();
    const platforms = Object.keys(PLATFORM_CONFIG).filter(platform => PLATFORM_CONFIG[platform].region === 'hk' ? refreshHk : refreshJp);
    if (!platforms.length) return this.cache;
    // 港服到点时先采集，不等待日服的逐条语言查询。
    if (refreshHk) platforms.sort((a, b) => Number(PLATFORM_CONFIG[b].region === 'hk') - Number(PLATFORM_CONFIG[a].region === 'hk'));
    const browserPromise = launchBrowser();
    const errors = [];
    try {
      for (const platform of platforms) {
        // 只有实际进入采集的平台才记录尝试，跳过的港服不受日服状态影响。
        this.platformRefresh.start(platform, async () => {
          try {
            this.cache[platform] = describeNintendoRanking(await this.#collectPlatform(await browserPromise, platform), platform);
          } catch (error) {
            errors.push(`${platform}: ${error.message}`);
            if (this.cache[platform]) {
              this.cache[platform] = { ...this.cache[platform], stale: true, lastError: error.message };
            }
            throw error;
          } finally {
            await this.#save();
          }
        }, { scheduled: true });
        await this.platformRefresh.tasks.get(platform);
        await delay(2000);
      }
    } finally {
      const browser = await browserPromise.catch(() => null);
      await browser?.close();
    }
    if (errors.length === platforms.length && !Object.keys(this.cache).length) {
      throw new Error(`任天堂榜单采集失败：${errors.join('；')}`);
    }
    return this.cache;
  }

  async #collectPlatform(browser, platform) {
    const config = PLATFORM_CONFIG[platform];
    if (config.region === 'hk') return this.#collectHkPlatform(browser, platform, config);
    const context = await browser.newContext({
      locale: 'ja-JP',
      timezoneId: 'Asia/Tokyo',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    try {
      await page.route('**/*', async (route) => {
        const type = route.request().resourceType();
        if (['font', 'media'].includes(type)) return route.abort();
        return route.continue();
      });
      await page.goto(config.url, { waitUntil: 'domcontentloaded', timeout: 90_000 });
      await page.locator('#mobify-data').waitFor({ state: 'attached', timeout: 90_000 });
      const products = await page.locator('#mobify-data').evaluate((element) => {
        const root = JSON.parse(element.textContent || '{}');
        const queries = root?.__PRELOADED_STATE__?.__reactQuery?.queries || [];
        return queries.find((query) => query?.state?.data?.resultProducts)?.state?.data?.resultProducts || [];
      });
      if (!products.length) throw new Error('官方页面未返回榜单商品');

      let langMap = {};
      try {
        await page.waitForFunction(() => Boolean(localStorage.getItem('access_token_MNS')), { timeout: 15_000 });
        langMap = await page.evaluate(async (items) => {
          const token = localStorage.getItem('access_token_MNS');
          const out = {};
          const chunkSize = 1;
          for (let i = 0; i < items.length; i += chunkSize) {
            const chunk = items.slice(i, i + chunkSize);
            await Promise.all(chunk.map(async item => {
              const targetId = item.variationMasterId || ('D' + item.id);
              try {
                const u = 'https://store-jp.nintendo.com/mobify/proxy/api/product/shopper-products/v1/organizations/f_ecom_bfgj_prd/products/' + targetId + '?siteId=MNS';
                const r = await fetch(u, { headers: { 'authorization': 'Bearer ' + token }, signal: AbortSignal.timeout(15000) });
                if ([403, 429, 503].includes(r.status)) out.blocked = true;
                if (!r.ok) return;
                const d = await r.json();
                const langs = d.c_original_specification?.supportLanguages || [];
                const hasChinese = langs.some(l => l.includes('zh') || l.toLowerCase().includes('chinese'));
                out[item.id] = { hasChinese, langs };
              } catch {}
            }));
            if (out.blocked) { delete out.blocked; break; }
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
          return out;
        }, products.slice(0, config.officialLimit));
      } catch (err) {
        console.warn(`[${platform}] 获取语言支持规格跳过或失败：`, err.message);
      }

      const previousRanks = new Map((this.cache[platform]?.games || []).map((game) => [game.id, game.rank]));
      const games = products.slice(0, config.officialLimit).map((product, index) => (
        mapProduct(product, index, platform, previousRanks, langMap[product.id])
      ));
      if (games.length < Math.min(30, config.officialLimit)) {
        throw new Error(`官方榜单数量异常：仅 ${games.length} 条`);
      }

      return {
        platform,
        label: config.label,
        source: config.url,
        sourceType: 'Nintendo Store 日本官方榜单',
        officialLimit: config.officialLimit,
        count: games.length,
        updatedAt: new Date().toISOString(),
        stale: false,
        games
      };
    } finally {
      await context.close();
    }
  }

  async #collectHkPlatform(browser, platform, config) {
    const context = await browser.newContext({ locale: 'zh-HK', timezoneId: 'Asia/Hong_Kong' });
    const page = await context.newPage();
    try {
      await page.route('**/*', route => ['font', 'media'].includes(route.request().resourceType()) ? route.abort() : route.continue());
      await page.goto(config.url, { waitUntil: 'domcontentloaded', timeout: 90_000 });
      await page.locator('.product-item-info').first().waitFor({ state: 'attached', timeout: 90_000 });
      const products = await page.locator('.product-item-info').evaluateAll(items => items.map(item => {
        const link = item.querySelector('.product-item-link');
        const url = link?.href || '';
        const id = url.match(/\/(?:titles|bundles|aocs)\/(\d+)/)?.[1] || '';
        const priceValue = item.querySelector('[data-price-type="finalPrice"]')?.getAttribute('data-price-amount');
        const price = priceValue == null ? NaN : Number(priceValue);
        const old = Number(item.querySelector('[data-price-type="oldPrice"]')?.getAttribute('data-price-amount'));
        return {
          id, name: link?.textContent?.trim() || '', url, price,
          old: old > price ? old : null,
          image: item.querySelector('img.product-image-photo')?.getAttribute('src') || '',
          rank: Number(item.querySelector('[class^="rank"]')?.textContent?.trim()) || 0
        };
      })).then(items => items.filter(item => item.id && item.name && Number.isFinite(item.price) && item.price >= 0));
      if (products.length < 20) throw new Error(`官方港服榜单数量异常：仅 ${products.length} 条`);

      const previousGames = new Map((this.cache[platform]?.games || []).map(game => [game.id, game]));
      nintendoCovers.prime(await context.storageState(), await page.evaluate(() => navigator.userAgent));
      const rankedProducts = products.slice(0, config.officialLimit);
      await Promise.all(rankedProducts.map(async product => {
        const previousImage = previousGames.get(product.id)?.image || '';
        try {
          product.image = product.image ? nintendoRankingCover(product.image) : previousImage;
          if (previousImage && product.image !== previousImage && product.image.startsWith('https:'))
            await nintendoCovers.get(product.image);
        } catch {
          product.image = previousImage;
        }
      }));
      const games = rankedProducts.map((product, index) => {
        const rank = product.rank || index + 1;
        const previousRank = previousGames.get(product.id)?.rank;
        return {
          id: product.id,
          rank,
          name: product.name,
          cn: product.name,
          meta: '数字版',
          platform: platform.startsWith('switch2') ? 'Switch 2' : 'Switch',
          price: product.price,
          old: product.old,
          discount: product.old ? Math.round((1 - product.price / product.old) * 100) : 0,
          trend: !previousRank || previousRank === rank ? 'same' : previousRank > rank ? 'up' : 'down',
          cover: product.name.slice(0, 2),
          color: COLORS[index % COLORS.length],
          image: product.image,
          url: product.url,
          isFree: product.price === 0,
          hasChinese: false
        };
      });
      return {
        platform,
        label: config.label,
        source: config.url,
        sourceType: 'Nintendo Store 香港官方排行榜',
        officialLimit: config.officialLimit,
        count: games.length,
        updatedAt: new Date().toISOString(),
        stale: false,
        games
      };
    } finally {
      await context.close();
    }
  }

  async #save() {
    const temporary = `${this.cacheFile}.tmp`;
    await writeFile(temporary, `${JSON.stringify(this.cache, null, 2)}\n`, 'utf8');
    await rename(temporary, this.cacheFile);
  }
}

export { PLATFORM_CONFIG };
