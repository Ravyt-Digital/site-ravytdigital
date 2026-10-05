import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const get=url=>worker.fetch(new Request(url,{headers:{'user-agent':'SEO-audit-bot'}}),env,ctx);
test('every sitemap page has a unique title, canonical, indexable HTML and reciprocal language links',async()=>{
 const xml=await (await get('https://ravytdigital.com/sitemap.xml')).text();
 const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
 const titles=new Set(),variants=new Map();
 for(const url of urls){
  const res=await get(url);assert.equal(res.status,200,url);
  const html=await res.text(),visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
  const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert.ok(title,url);assert.ok(!titles.has(title),'Duplicate title: '+title);titles.add(title);
  assert.ok(title.length<=65,url+' title '+title.length);
  assert.match(html,/<meta name="description" content="[^"]+"/);
  assert.equal((visible.match(/<h1[ >]/g)||[]).length,1,url);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html));
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];assert.equal(new URL(canonical).pathname,new URL(url).pathname);
  const links=[...html.matchAll(/<link rel="alternate" hrefLang="([^"]*)" href="([^"]*)"/gi)].map(m=>[m[1],m[2]]);
  assert.equal(links.length,5,url);assert.ok(links.some(([,href])=>new URL(href).pathname===new URL(url).pathname),url+' self reference');
  variants.set(new URL(url).pathname,links);
  for(const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))assert.doesNotThrow(()=>JSON.parse(json),url);
 }
 for(const [path,links] of variants)for(const [,href]of links){const other=variants.get(new URL(href).pathname);assert.ok(other,'Missing variant '+href);assert.deepEqual(other,links,'Non-reciprocal '+path);}
 assert.equal(urls.length,84);
});
test('translated article metadata keeps article type and declares all languages',async()=>{
 for(const lang of ['en','fr','es']){const html=await (await get(`https://ravytdigital.com/${lang}/blog/site-institucional-paginas-essenciais`)).text();assert.match(html,/<meta property="og:type" content="article"/);assert.match(html,/<link rel="alternate" hrefLang="pt-BR"/i);}
});
