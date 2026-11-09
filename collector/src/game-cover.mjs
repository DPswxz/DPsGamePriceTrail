import { createHash } from 'node:crypto';
import sharp from 'sharp';
import {mkdir,readFile,writeFile,rename} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import { isNintendoPlaceholder, nintendoCovers, nintendoImageUrl } from './nintendo-cover.mjs';

const hosts = new Set(['image.api.playstation.com', 'shared.fastly.steamstatic.com','shared.st.dl.eccdnx.com',
  'cdn.akamai.steamstatic.com', 'cdn.cloudflare.steamstatic.com', 'store-jp.nintendo.com',
  'img-eshop.cdn.nintendo.net', 'upload.wikimedia.org', 'store.nintendo.com.hk']);
export function gameCoverUrl(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || !hosts.has(url.hostname) || url.port || url.username || url.password)
    throw new Error('Invalid cover URL');
  return url.hostname === 'store.nintendo.com.hk' ? nintendoImageUrl(url.href) : url.href;
}

export class GameCoverProxy {
  constructor({fetchImpl=fetch,cacheDir=null}={}) { this.fetch=fetchImpl;this.cacheDir=cacheDir;this.cache=new Map();this.pending=new Map();this.checking=new Set();this.active=0;this.waiting=[]; }
  diskPath(url){return path.join(this.cacheDir,createHash('sha256').update(url).digest('hex'));}
  async readDisk(url){
    if(!this.cacheDir)return null;
    try{const file=this.diskPath(url),[body,metadata]=await Promise.all([readFile(file+'.jpg'),readFile(file+'.json','utf8')]);
      const result={...JSON.parse(metadata),body};
      if (isNintendoPlaceholder(result.etag)) return null;
      if(result.etag!==`"${createHash('sha256').update(body).digest('hex')}"`)return null;
      return result;
    }catch{return null;}
  }
  async saveDisk(url,result){
    if(!this.cacheDir)return;
    await mkdir(this.cacheDir,{recursive:true});const file=this.diskPath(url),{body,...metadata}=result;
    await writeFile(file+'.jpg.tmp',body);await rename(file+'.jpg.tmp',file+'.jpg');
    await writeFile(file+'.json.tmp',JSON.stringify(metadata));await rename(file+'.json.tmp',file+'.json');
  }
  async get(value) {
    const url=gameCoverUrl(value),cached=this.cache.get(url);
    if(cached?.expires>Date.now()) return cached;
    if(this.pending.has(url)) return this.pending.get(url);
    if(this.pending.size>=64) throw new Error('Cover service busy');
    const task=(async()=>{
      const previous=cached||await this.readDisk(url);
      if(previous?.expires>Date.now()){this.cache.set(url,previous);while(this.cache.size>256)this.cache.delete(this.cache.keys().next().value);return previous;}
      if(previous){
        // 已有封面立即返回；只留一个后台校验，避免占满首次下载的位置。
        const fallback={...previous,expires:Date.now()+60000};this.cache.set(url,fallback);
        while(this.cache.size>256)this.cache.delete(this.cache.keys().next().value);
        if(!this.checking.has(url)&&this.checking.size<1&&this.active<2&&!this.waiting.length){
          this.checking.add(url);
          this.load(url,previous).catch(()=>{}).finally(()=>this.checking.delete(url));
        }
        return fallback;
      }
      try{return await this.load(url,previous);}
      catch(error){
        // 上游暂时不可用时仍展示已保存的真实封面，稍后再校验更新。
        if(!previous)throw error;
        const fallback={...previous,expires:Date.now()+60000};this.cache.set(url,fallback);return fallback;
      }
    })().finally(()=>this.pending.delete(url));
    this.pending.set(url,task);return task;
  }
  async load(url,cached) {
    if(this.active>=4) await new Promise(resolve=>this.waiting.push(resolve)); else this.active++;
    try {
      let body,originEtag,originModified;
      if(new URL(url).hostname==='store.nintendo.com.hk') body=await nintendoCovers.get(url);
      else {
        const headers={};
        if(cached?.originEtag) headers['If-None-Match']=cached.originEtag;
        if(cached?.originModified) headers['If-Modified-Since']=cached.originModified;
        let response;
        for(let redirects=0,target=url;redirects<=2;redirects++) {
          response=await this.fetch(target,{headers,redirect:'manual',signal:AbortSignal.timeout(15000)});
          if(![301,302,303,307,308].includes(response.status)) break;
          const next=gameCoverUrl(new URL(response.headers.get('location'),target).href);
          await response.body?.cancel();target=next;
        }
        if(response.status===304&&cached) {cached.expires=Date.now()+3600000;this.cache.set(url,cached);await this.saveDisk(url,cached).catch(()=>{});return cached;}
        if(!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
          await response.body?.cancel();throw new Error('Cover unavailable');
        }
        // 限制原图体积；客户端只需要列表和弹窗尺寸的封面。
        const chunks=[];let bytes=0;
        for await(const chunk of response.body) {
          bytes+=chunk.length;if(bytes>12*1024*1024) throw new Error('Cover too large');chunks.push(chunk);
        }
        body=await sharp(Buffer.concat(chunks),{limitInputPixels:25000000})
          .resize(320,320,{fit:'inside',withoutEnlargement:true}).jpeg({quality:76}).toBuffer();
        originEtag=response.headers.get('etag');originModified=response.headers.get('last-modified');
      }
      const result={body,etag:`"${createHash('sha256').update(body).digest('hex')}"`,originEtag,originModified,expires:Date.now()+3600000};
      this.cache.delete(url);this.cache.set(url,result);
      while(this.cache.size>256)this.cache.delete(this.cache.keys().next().value);
      await this.saveDisk(url,result).catch(()=>{});
      return result;
    } finally {const next=this.waiting.shift();if(next)next();else this.active--;}
  }
}
export const gameCovers=new GameCoverProxy({cacheDir:fileURLToPath(new URL('../data/covers/',import.meta.url))});
