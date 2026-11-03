import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,readFile,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import {NintendoCollector,PLATFORM_CONFIG} from '../src/nintendo.mjs';
import {describeNintendoRanking} from '../src/nintendo-ranking-source.mjs';
const source=await readFile(new URL('../src/nintendo.mjs',import.meta.url),'utf8');
const body=source.slice(source.indexOf('  async #collectBoth()'),source.indexOf('  async #collectPlatform('))
 .replace('async #collectBoth()', 'async function collectBoth()').replaceAll('this.#collectPlatform','this.collectPlatform').replaceAll('this.#save','this.save');
const collect=vm.runInNewContext(body+'\ncollectBoth',{PLATFORM_CONFIG,describeNintendoRanking,launchBrowser:async()=>({close:async()=>{}}),delay:async()=>{}});
async function fixture(t){
 const dir=await mkdtemp(path.join(os.tmpdir(),'nintendo-status-'));t.after(()=>rm(dir,{recursive:true,force:true}));
 const file=path.join(dir,'cache.json'),old='2026-11-03T04:00:00+08:00';
 const cache=Object.fromEntries(Object.keys(PLATFORM_CONFIG).map(platform=>[platform,{platform,updatedAt:old,stale:false,games:[{id:'fixture',price:100}]}]));
 await writeFile(file,JSON.stringify(cache));const collector=new NintendoCollector({cacheFile:file});await collector.init();
 collector.save=()=>writeFile(file,JSON.stringify(collector.cache));
 return {collector,file,old};
}
test('日服每小时采集及失败都不能改变按计划跳过的港服状态',async t=>{
 const {collector,old}=await fixture(t);collector.hkSchedule.claim=async()=>false;
 collector.collectPlatform=async(_browser,platform)=>{assert.ok(!platform.endsWith('_hk'));throw Error('Japan unavailable')};
 const original=collector.status('switch2_hk');await collect.call(collector);
 assert.deepEqual(collector.status('switch2_hk'),original);
 assert.equal(collector.status('switch2_hk').refreshState,'success');
 assert.equal(collector.status('switch2_hk').updatedAt,old);
 assert.equal(collector.status('switch1').refreshState,'failed');
});
test('港服真实失败会保留，另一个港服成功不受影响，重启后也保持各自结果',async t=>{
 const {collector,file}=await fixture(t);collector.hkSchedule.claim=async()=>true;
 collector.collectPlatform=async(_browser,platform)=>{if(platform==='switch1_hk')throw Error('Official challenge');return {...collector.cache[platform],updatedAt:new Date(Date.now()+1000).toISOString(),stale:false,lastError:null}};
 await collect.call(collector);
 assert.equal(collector.status('switch1_hk').refreshState,'failed');
 assert.match(collector.status('switch1_hk').lastError,/Official challenge/);
 assert.equal(collector.status('switch2_hk').refreshState,'success');
 const hk=collector.status('switch2_hk');collector.hkSchedule.claim=async()=>false;
 await collect.call(collector);assert.deepEqual(collector.status('switch2_hk'),hk);
 const restarted=new NintendoCollector({cacheFile:file});await restarted.init();
 assert.equal(restarted.status('switch1_hk').refreshState,'failed');
 assert.equal(restarted.status('switch2_hk').refreshState,'success');
 assert.equal(restarted.status('switch2_hk').lastAttemptAt,hk.lastAttemptAt);
});
test('日服采集进行中时不把港服显示为正在刷新',async t=>{
 const {collector}=await fixture(t);let release;collector.hkSchedule.claim=async()=>false;
 collector.collectPlatform=async(_browser,platform)=>{if(platform==='switch1')await new Promise(resolve=>{release=resolve});return {...collector.cache[platform],updatedAt:new Date(Date.now()+1000).toISOString()}};
 const task=collect.call(collector);for(let i=0;i<10&&!release;i++)await Promise.resolve();
 assert.equal(collector.status('switch1').refreshState,'refreshing');
 assert.equal(collector.status('switch2_hk').refreshState,'success');release();await task;
});
