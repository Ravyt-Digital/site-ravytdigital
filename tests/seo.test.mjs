import test from 'node:test';import assert from 'node:assert/strict';import {existsSync} from 'node:fs';import worker from '../dist/server/index.js';
const ctx={waitUntil(){},passThroughOnException(){}},env={ASSETS:{fetch:async()=>new Response('',{status:404})}};
const origin='https://ravytdigital.com';const request=(path,options)=>worker.fetch(new Request(origin+path,options),env,ctx);
const routes=['/','/diagnostico','/minha-empresa-nao-aparece-no-google','/como-colocar-empresa-no-google-maps','/quanto-custa-google-meu-negocio'];
const rendered=new Map();const html=async path=>{if(!rendered.has(path))rendered.set(path,await(await request(path)).text());return rendered.get(path)};
const visible=h=>h.replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<style\b[\s\S]*?<\/style>/g,'');
test('every indexable page has unique server-rendered metadata and a self canonical',async()=>{
 const titles=new Set(),descriptions=new Set();for(const path of routes){const r=await request(path);assert.equal(r.status,200,path);const h=await html(path);const title=h.match(/<title>(.*?)<\/title>/s)?.[1],description=h.match(/<meta name="description" content="([^"]+)"/)?.[1];assert.ok(title);assert.ok(description);titles.add(title);descriptions.add(description);assert.equal((visible(h).match(/<h1(?:\s|>)/g)||[]).length,1,path);assert.ok(h.includes('lang="pt-BR"'));assert.ok(h.includes('rel="canonical" href="'+origin+path+'"'));assert.ok(h.includes('property="og:url" content="'+origin+path+'"'));assert.ok(h.includes('name="twitter:title" content="'+title+'"'));assert.doesNotMatch(h,/<meta[^>]+content="noindex/);}
 assert.equal(titles.size,routes.length);assert.equal(descriptions.size,routes.length);
});
test('sitemap, robots, structured data and meaningful legacy redirects agree with current routes',async()=>{
 const sitemap=await(await request('/sitemap.xml')).text(),robots=await(await request('/robots.txt')).text();assert.equal((sitemap.match(/<loc>/g)||[]).length,routes.length);for(const p of routes)assert.ok(sitemap.includes('<loc>'+origin+p+'</loc>'));assert.match(robots,/Allow: \//);assert.match(robots,/Sitemap: https:\/\/ravytdigital.com\/sitemap.xml/);
 for(const p of routes){const h=await html(p);const data=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));const nodes=data.flatMap(d=>d['@graph']||[d]);assert.ok(nodes.some(n=>n['@type']==='Organization'));assert.ok(nodes.some(n=>n['@type']==='WebSite'));assert.ok(!nodes.some(n=>n['@type']==='LocalBusiness'||n.aggregateRating));if(p==='/'){const service=nodes.find(n=>n['@type']==='Service');assert.equal(service.offers.price,'597.00');assert.equal(service.offers.priceCurrency,'BRL');}else if(p!=='/diagnostico'){assert.ok(nodes.some(n=>n['@type']==='Article'));const b=nodes.find(n=>n['@type']==='BreadcrumbList');assert.equal(b.itemListElement.at(-1).item,origin+p);}}
 const legacy=await request('/google-meu-negocio?utm_source=old');assert.equal(legacy.status,301);assert.equal(legacy.headers.get('location'),origin+'/?utm_source=old');const trailing=await request(routes[2]+'/');assert.equal(trailing.status,308);assert.equal(trailing.headers.get('location'),origin+routes[2]);
});
test('all rendered internal links, fragment targets and images resolve; guides are linked from home',async()=>{
 const home=visible(await html('/'));for(const p of routes.slice(2))assert.ok(home.includes('href="'+p+'"'),p);
 for(const path of routes){const h=visible(await html(path));for(const [,href]of h.matchAll(/<a\b[^>]*href="([^"]+)"/g)){if(!href.startsWith('/')&&!href.startsWith('#'))continue;const u=new URL(href,origin+path);const target=visible(await html(u.pathname));assert.equal((await request(u.pathname)).status,200,path+' -> '+href);if(u.hash)assert.ok(target.includes('id="'+u.hash.slice(1)+'"'),path+' -> '+href);}
 for(const [tag,src]of [...h.matchAll(/(<img\b[^>]*src="([^"]+)"[^>]*>)/g)].map(m=>[m[1],m[2]])){assert.ok(existsSync('public'+src),src);assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);}}
});
test('analytics accepts only documented events and never stores injected fields or contact URLs',async()=>{
 for(const event of ['primary_cta_click','whatsapp_click','diagnostic_open','diagnostic_start','plan_click','form_submit']){const r=await request('/api/analytics',{method:'POST',headers:{'content-type':'application/json',origin},body:JSON.stringify({event,path:'/diagnostico'})});assert.equal(r.status,204,event);}
 for(const body of [{event:'purchase',path:'/'},{event:'whatsapp_click',path:'/?phone=123'},{event:'page_view',path:'https://wa.me/123'}])assert.equal((await request('/api/analytics',{method:'POST',body:JSON.stringify(body)})).status,400);
 assert.equal((await request('/api/analytics',{method:'POST',headers:{origin:'https://foreign.example'},body:'{}'})).status,403);
});
