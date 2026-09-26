import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('Not found',{status:404})}};
const ctx={waitUntil(){},passThroughOnException(){}};
const request=path=>worker.fetch(new Request('https://ravytdigital.com'+path),env,ctx);
const routes=['/','/seo','/google-meu-negocio','/sites','/diagnostico','/cases','/sobre'];
test('commercial routes render unique metadata, canonical URLs, one heading and valid schema',async()=>{
 const titles=new Set(),descriptions=new Set();
 for(const path of routes){
  const response=await request(path);assert.equal(response.status,200,path);
  const html=await response.text();
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  const description=html.match(/name="description"[^>]*content="([^"]+)"/)?.[1];
  assert.ok(title&&description,path);assert.ok(!titles.has(title),path);assert.ok(!descriptions.has(description),path);
  titles.add(title);descriptions.add(description);
  assert.match(html,new RegExp('rel="canonical"[^>]*href="https://ravytdigital.com'+path+'"'));
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,path);
  for(const m of html.matchAll(/type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
  assert.match(html,/href="\/diagnostico"/);
 }
 const sitemap=await (await request('/sitemap.xml')).text();
 for(const path of routes.slice(1))assert.ok(sitemap.includes('https://ravytdigital.com'+path+'</loc>'),path);
});
test('new service destinations are accepted without retaining contact details',async()=>{
 for(const destination of routes.slice(1,4)){
  const response=await worker.fetch(new Request('https://ravytdigital.com/api/analytics',{method:'POST',headers:{origin:'https://ravytdigital.com','content-type':'application/json'},body:JSON.stringify({event:'service_page_click',path:'/',destination})}),env,ctx);
  assert.equal(response.status,204,destination);
 }
});

