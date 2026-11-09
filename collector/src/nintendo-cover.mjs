import { chromium, request } from 'playwright';
import sharp from 'sharp';
import { createHash } from 'node:crypto';

const rebirthCover = '/media/catalog/product/9/9/99d3f9086b7b97984916c93456752d6981d56dcab942421cf71cd45836a62b72';
const rebirthFallback = '/assets/covers/ff7-rebirth-switch2-hk.jpg';
const placeholderEtag = '"bc2cea4ed12eb759422002e83462701fb1afd75f979e5057e485e506b89a9814"';

export function isNintendoPlaceholder(etag) {
  return etag === placeholderEtag;
}

export function nintendoImageUrl(value) {
  const url=new URL(value);
  if(url.protocol!=='https:'||url.hostname!=='store.nintendo.com.hk'||url.port||url.username||url.password||url.search||
    !/^\/media\/catalog\/product\/[a-zA-Z0-9_./-]+\.(?:png|jpe?g|webp)$/i.test(url.pathname))throw new Error('Invalid Nintendo image URL');
  url.pathname=url.pathname.replace(/\/cache\/[^/]+\//,'/');
  return url.href;
}

export function nintendoRankingCover(value) {
  if (value === rebirthFallback) return value;
  const url = nintendoImageUrl(value);
  const pathname = new URL(url).pathname;
  // 两个上游版本均曾返回 NO IMAGE，使用已核验的同商品官方封面。
  if (pathname === rebirthCover + '_1793953093.jpg' || pathname === rebirthCover + '_1786119660.jpg')
    return rebirthFallback;
  return url;
}

export class NintendoCoverProxy {
  constructor({browserType=chromium,requestFactory=request}={}){this.browserType=browserType;this.requestFactory=requestFactory;this.cache=new Map();this.pending=new Map();this.active=0;this.waiting=[];}
  prime(storageState,userAgent){this.storageState=storageState;this.userAgent=userAgent;}
  async context(){
    if(!this.contextPromise)this.contextPromise=this.prepare().catch(error=>{this.contextPromise=null;throw error;});
    return this.contextPromise;
  }
  async prepare(){
    if(!this.storageState){
      const browser=await this.browserType.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
      try{
        const page=await browser.newPage();
        await page.route('**/*',route=>['image','font','media'].includes(route.request().resourceType())?route.abort():route.continue());
        // 封面只需要公共商店会话，不依赖排行榜加载或商品是否仍在榜。
        await page.goto('https://store.nintendo.com.hk/',{waitUntil:'domcontentloaded',timeout:15000});
        await page.waitForFunction(()=>Boolean(document.querySelector('.page-wrapper'))&&document.cookie.includes('aws-waf-token'),null,{timeout:15000});
        this.prime(await page.context().storageState(),await page.evaluate(()=>navigator.userAgent));
      }finally{await browser.close();}
    }
    return this.requestFactory.newContext({storageState:this.storageState,userAgent:this.userAgent,timeout:15000});
  }
  async get(value){
    const url=nintendoImageUrl(value),cached=this.cache.get(url);
    if(cached&&cached.expires>Date.now()){this.cache.delete(url);this.cache.set(url,cached);return cached.body;}
    if(this.pending.has(url))return this.pending.get(url);
    if(this.pending.size>=64)throw new Error('Image service busy');
    const task=this.load(url).finally(()=>this.pending.delete(url));
    this.pending.set(url,task);return task;
  }
  async load(url){
    if(this.active>=4)await new Promise(resolve=>this.waiting.push(resolve));
    else this.active++;
    try{
      for(let attempt=0;attempt<2;attempt++){
        const context=await this.context();
        const response=await context.get(url,{maxRedirects:0});
        try{
          if(response.status()===200&&response.headers()['content-type']?.startsWith('image/')){
            const body=await sharp(await response.body(),{limitInputPixels:25000000})
              .resize(320,320,{fit:'inside',withoutEnlargement:true}).jpeg({quality:72}).toBuffer();
            const etag = `"${createHash('sha256').update(body).digest('hex')}"`;
            if (isNintendoPlaceholder(etag)) throw new Error('Nintendo cover is a placeholder');
            this.cache.set(url,{body,expires:Date.now()+600000});
            while(this.cache.size>64)this.cache.delete(this.cache.keys().next().value);
            return body;
          }
        }finally{await response.dispose();}
        // 官方会话失效后重新建立公共商店会话。
        this.contextPromise=null;this.storageState=null;
        await context.dispose();
      }
      throw new Error('Nintendo image unavailable');
    }finally{const next=this.waiting.shift();if(next)next();else this.active--;}
  }
}
export const nintendoCovers=new NintendoCoverProxy();
