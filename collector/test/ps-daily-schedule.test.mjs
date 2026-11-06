import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdtemp,rm} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import vm from 'node:vm';
import {DailyRefresh} from '../src/daily-refresh.mjs';
import {BackgroundRefresh} from '../src/background-refresh.mjs';
const source=await readFile(new URL('../src/server.mjs',import.meta.url),'utf8');
const start=source.indexOf('async function queueRankingRefresh(');
const code=source.slice(start,source.indexOf('for (const [key, collector, method, get]',start));
test('PS港服和日服每日4点各执行一次，失败、强制请求及重启均不在当天重试',async()=>{
 const dir=await mkdtemp(path.join(os.tmpdir(),'ps-daily-'));
 try{
  let now=Date.parse('2026-11-06T03:00:00+08:00');const schedules=new Map();
  for(const key of ['ps5','ps5-jp']){const schedule=new DailyRefresh(path.join(dir,key+'.json'),()=>now);await schedule.init();schedules.set(key,schedule)}
  const backgroundRefresh=new BackgroundRefresh({now:()=>now});const calls=[];
  const collector={refresh:async()=>{calls.push(now);throw Error('HTTP 403')}};
  const queue=vm.runInNewContext(code+'\nqueueRankingRefresh',{dailySchedules:schedules,backgroundRefresh,console});
  for(const key of schedules.keys())assert.equal(await queue(key,collector,'refresh',{force:true,scheduled:true}),false);
  assert.equal(backgroundRefresh.records.size,0);
  now=Date.parse('2026-11-06T04:00:00+08:00');
  for(const key of schedules.keys())assert.equal(await queue(key,collector,'refresh',{force:true,scheduled:true}),true);
  await Promise.all(backgroundRefresh.tasks.values());assert.equal(calls.length,2);
  const original=JSON.stringify([...backgroundRefresh.records]);
  now=Date.parse('2026-11-06T12:00:00+08:00');
  for(const [key,schedule] of schedules){await schedule.init();assert.equal(await queue(key,collector,'refresh',{force:true,scheduled:true}),false)}
  assert.equal(calls.length,2);assert.equal(JSON.stringify([...backgroundRefresh.records]),original);
  now=Date.parse('2026-11-07T04:00:00+08:00');
  for(const key of schedules.keys())assert.equal(await queue(key,collector,'refresh',{force:true,scheduled:true}),true);
  await Promise.all(backgroundRefresh.tasks.values());assert.equal(calls.length,4);
 }finally{await rm(dir,{recursive:true,force:true})}
});
test('其他平台仍每小时执行，不受PS每日计划影响',async()=>{
 let now=0,calls=0;const backgroundRefresh=new BackgroundRefresh({now:()=>now});
 const queue=vm.runInNewContext(code+'\nqueueRankingRefresh',{dailySchedules:new Map(),backgroundRefresh});
 const collector={refresh:async()=>{calls++}};
 for(const key of ['steam','steam-global','nintendo']){assert.equal(await queue(key,collector,'refresh',{force:true,scheduled:true}),true);await Promise.all(backgroundRefresh.tasks.values())}
 now+=3600000;
 for(const key of ['steam','steam-global','nintendo']){assert.equal(await queue(key,collector,'refresh',{force:true,scheduled:true}),true);await Promise.all(backgroundRefresh.tasks.values())}
 assert.equal(calls,6);
});

test('PS档案补全在每日采集之外不请求官方，采集期间才允许查询',async()=>{
 const archive=await readFile(new URL('../src/archive-metadata.mjs',import.meta.url),'utf8');
 const body=archive.slice(archive.indexOf('export function startArchiveMetadata')).replace('export function','function');
 const retries=new Map(),calls=[];let tick,allowed=false;
 const history={db:{prepare:sql=>sql.startsWith('SELECT')?{get:key=>retries.has(key)?{value:retries.get(key)}:null}:{run:(key,value)=>retries.set(key,value)}},restoreSharedMetadata(){},restoreCatalogMetadata(){},missingMetadata:()=>['ps5_hk','ps5_jp','steam'].map((platform,i)=>({platform,id:String(i+1)}))};
 const start=vm.runInNewContext(body+'\nstartArchiveMetadata',{Date,storeFetch(){},fetchArchiveMetadata:async platform=>{calls.push(platform);return null},setTimeout:fn=>{tick=fn;return {unref(){}}},setInterval:()=>({unref(){}}),clearTimeout(){},clearInterval(){}});
 const stop=start(history,{}, {allowLookup:platform=>!platform.startsWith('ps5')||allowed});
 await tick();assert.deepEqual(calls,['steam']);
 allowed=true;await tick();assert.deepEqual(calls,['steam','ps5_hk','ps5_jp']);stop();
});
