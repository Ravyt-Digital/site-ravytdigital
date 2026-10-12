import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
test('the annual plan remains BRL 597 in every language and country, even with obsolete currency cookies',async()=>{
 for(const lang of ['pt','en','fr','es'])for(const country of ['BR','US','FR']){
  const path=lang==='pt'?'/':'/'+lang;
  const request=new Request('https://ravytdigital.com'+path,{headers:{cookie:`ravyt_language=${lang}; ravyt_currency=USD`,'cf-ipcountry':country}});
  const response=await worker.fetch(request,env,ctx);assert.equal(response.status,200);
  const html=await response.text();assert.ok(html.includes('data-pricing-currency="BRL"'));
  assert.match(html,/R\$[^<]*597,00/);assert.match(html,/R\$[^<]*49,75/);
  assert.doesNotMatch(html.replace(/<script\b[\s\S]*?<\/script>/g,''),/\[\[(?:annual|monthly)\]\]/);
  assert.doesNotMatch(html,/Ongoing SEO improvements|Melhorias contínuas de SEO|Améliorations continues du SEO|Mejoras continuas de SEO/);
  assert.ok(html.includes('wa.me/5588996956479'));
 }
});
test('price and remote contracting pages have distinct topics and canonical URLs',async()=>{
 for(const prefix of ['','/en','/fr','/es']){const titles=[];
  for(const path of ['/sites','/criacao-de-sites-online','/quanto-custa-criar-um-site']){
   const response=await worker.fetch(new Request('https://ravytdigital.com'+prefix+path),env,ctx);assert.equal(response.status,200);
   const html=await response.text();titles.push(html.match(/<title>(.*?)<\/title>/s)[1]);
   assert.ok(html.includes(`href="https://ravytdigital.com${prefix}${path}"`));
   assert.ok(html.includes('data-pricing-currency="BRL"'));assert.ok(html.includes('One Page'));
  }assert.equal(new Set(titles).size,3);
 }
});
