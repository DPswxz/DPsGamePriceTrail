import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {DailyRefresh,nextHongKongRefresh} from '../src/daily-refresh.mjs';

test('港服刷新固定在北京时间凌晨4点，不受机器时区影响',()=>{
 for(const [now,next] of [
  ['2026-10-22T03:59:59+08:00','2026-10-22T04:00:00+08:00'],
  ['2026-10-22T04:00:00+08:00','2026-10-23T04:00:00+08:00'],
  ['2026-10-22T15:00:00+08:00','2026-10-23T04:00:00+08:00']
 ])assert.equal(nextHongKongRefresh(Date.parse(now)),Date.parse(next));
});
test('到点执行一次，失败后及重启后不再按小时执行，错过开机时间只补一次',async()=>{
 const dir=await mkdtemp(path.join(os.tmpdir(),'hk-daily-'));
 try{
  let now=Date.parse('2026-10-22T03:00:00+08:00');const file=path.join(dir,'schedule.json');
  let schedule=new DailyRefresh(file,()=>now);await schedule.init();
  assert.equal(await schedule.claim(),false);
  now=Date.parse('2026-10-22T04:00:00+08:00');assert.equal(await schedule.claim(),true);
  now=Date.parse('2026-10-22T05:00:00+08:00');assert.equal(await schedule.claim(),false);
  schedule=new DailyRefresh(file,()=>now);await schedule.init();assert.equal(await schedule.claim(),false);
  now=Date.parse('2026-10-24T06:00:00+08:00');assert.equal(await schedule.claim(),true);assert.equal(await schedule.claim(),false);
  assert.equal(schedule.nextAt,Date.parse('2026-10-25T04:00:00+08:00'));
 }finally{await rm(dir,{recursive:true,force:true})}
});
