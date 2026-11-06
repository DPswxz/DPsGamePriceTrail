import { load } from 'cheerio';
import { storeFetch } from './polite-fetch.mjs';
import { nintendoCovers } from './nintendo-cover.mjs';

export async function fetchArchiveMetadata(platform,id,fetcher=storeFetch){
  if(!/^\d+$/.test(id))return null;
  const steam=platform.startsWith('steam'),ps=platform.startsWith('ps5'),hk=platform.startsWith('switch')&&platform.endsWith('_hk');
  const url=steam?`https://store.steampowered.com/app/${id}/`:
    ps?`https://store.playstation.com/${platform.endsWith('_hk')?'zh-hans-hk':'ja-jp'}/concept/${id}`:
    hk?`https://store.nintendo.com.hk/${id}`:`https://store-jp.nintendo.com/item/software/D${id}`;
  const endpoint=steam?`https://store.steampowered.com/api/appdetails?appids=${id}&l=schinese&cc=cn`:url;
  let response;
  if(hk&&fetcher===storeFetch){
    const context=await nintendoCovers.context(),result=await context.get(endpoint,{timeout:15000,maxRedirects:0});
    try{response=new Response(await result.body(),{status:result.status()});}finally{await result.dispose();}
  }else response=await fetcher(endpoint,{signal:AbortSignal.timeout(15000)});
  if(!response.ok)return null;
  if(steam){
    const item=(await response.json())[id];if(!item?.success||!item.data?.name)return null;
    return {id,name:item.data.name,image:item.data.header_image||'',url,platform:'PC'};
  }
  const $=load(await response.text());
  for(const node of $('script[type="application/ld+json"]').toArray()){
    try{const parsed=JSON.parse($(node).text());
      const items=Array.isArray(parsed)?parsed:[parsed,...(parsed['@graph']||[])];
      const item=items.find(value=>value['@type']==='Product'&&value.name);
      if(item)return {id,name:item.name,image:Array.isArray(item.image)?item.image[0]:typeof item.image==='string'?item.image:'',url,platform:ps?'PlayStation':'Switch'};
    }catch{}
  }
  if(ps)return null; // A generic store/error page title is not a game name.
  const name=$('meta[property="og:title"]').attr('content'),image=$('meta[property="og:image"]').attr('content');
  if(!name||!image||(!hk&&!/D\d+/.test(image)))return null;
  return {id,name:name.replace(/\s*[|｜].*$/,''),image,url,platform:'Switch'};
}

export function startArchiveMetadata(history,translator,{fetcher=storeFetch,allowLookup=()=>true}={}){
  let running=false,stopped=false;
  const getRetry=history.db.prepare('SELECT value FROM metadata WHERE key=?');
  const saveRetry=history.db.prepare('INSERT OR REPLACE INTO metadata VALUES(?,?)');
  async function run(){
    if(running||stopped)return;running=true;
    try{
      history.restoreSharedMetadata();
      const groups=new Map();
      for(const row of history.missingMetadata().sort((a,b)=>Number(b.platform.endsWith('_hk'))-Number(a.platform.endsWith('_hk')))){
        if(!allowLookup(row.platform))continue;
        const family=row.platform.startsWith('steam')?'steam':row.platform.startsWith('ps5')?row.platform:'switch';
        const key=`archive-lookup:${family}:${row.id}`;
        if(Number(getRetry.get(key)?.value||0)>Date.now())continue;
        if(!groups.has(key))groups.set(key,[]);groups.get(key).push(row);
      }
      for(const [key,rows] of groups){
        if(stopped)break;
        if(!allowLookup(rows[0].platform))continue;
        saveRetry.run(key,String(Date.now()+86400000));
        const game=await fetchArchiveMetadata(rows[0].platform,rows[0].id,fetcher).catch(()=>null);
        if(stopped)break;
        if(game){const decorated=translator.decorate(game),snapshots={};
          for(const row of rows)(snapshots[row.platform]||=[]).push(decorated);
          history.restoreCatalogMetadata(snapshots);
        }
      }
    }finally{running=false;}
  }
  const first=setTimeout(run,5000),timer=setInterval(run,3600000);first.unref();timer.unref();
  return ()=>{stopped=true;clearTimeout(first);clearInterval(timer);};
}
