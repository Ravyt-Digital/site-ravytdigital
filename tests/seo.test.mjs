import test from 'node:test';import assert from 'node:assert/strict';import {existsSync} from 'node:fs';import worker from '../dist/server/index.js';
const ctx={waitUntil(){},passThroughOnException(){}},env={ASSETS:{fetch:async()=>new Response('',{status:404})}};
const origin='https://ravytdigital.com';const request=(path,options)=>worker.fetch(new Request(origin+path,options),env,ctx);
const verticals=['/sites-para-escritorios-de-arquitetura','/sites-para-empresas-de-engenharia'];
const articleRoutes=['/quanto-custa-criar-um-site','/site-institucional-paginas-essenciais','/blog/instagram-nao-substitui-site-proprio','/blog/site-bonito-nao-basta','/blog/site-ou-aplicativo','/blog/dominio-e-hospedagem','/blog/como-escolher-tecnologia-site-ou-app','/blog/como-montar-portfolio-de-arquitetura-e-engenharia'];
const serviceRoutes=['/site-profissional','/aplicativos',...verticals];
const routes=['/','/blog','/indique',...serviceRoutes,...articleRoutes];
const rendered=new Map();const html=async path=>{if(!rendered.has(path))rendered.set(path,await(await request(path)).text());return rendered.get(path)};
const visible=h=>h.replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<style\b[\s\S]*?<\/style>/g,'');
test('every indexable page has unique server-rendered metadata and a self canonical',async()=>{
 const titles=new Set(),descriptions=new Set();for(const path of routes){const r=await request(path);assert.equal(r.status,200,path);const h=await html(path);const title=h.match(/<title>(.*?)<\/title>/s)?.[1],description=h.match(/<meta name="description" content="([^"]+)"/)?.[1];assert.ok(title);assert.ok(description);titles.add(title);descriptions.add(description);assert.equal((visible(h).match(/<h1(?:\s|>)/g)||[]).length,1,path);assert.ok(h.includes('lang="pt-BR"'));assert.ok(h.includes('rel="canonical" href="'+origin+path+'"'));assert.ok(h.includes('property="og:url" content="'+origin+path+'"'));assert.ok(h.includes('name="twitter:title" content="'+title+'"'));assert.doesNotMatch(h,/<meta[^>]+content="noindex/);}
 assert.equal(titles.size,routes.length);assert.equal(descriptions.size,routes.length);
});
test('sitemap, robots, structured data and meaningful legacy redirects agree with current routes',async()=>{
 const sitemap=await(await request('/sitemap.xml')).text(),robots=await(await request('/robots.txt')).text();assert.equal((sitemap.match(/<loc>/g)||[]).length,routes.length);for(const p of routes)assert.ok(sitemap.includes('<loc>'+origin+p+'</loc>'));assert.match(robots,/Disallow: \/api\//);assert.match(robots,/Allow: \//);assert.match(robots,/Sitemap: https:\/\/ravytdigital.com\/sitemap.xml/);
 for(const p of routes){const h=await html(p);const data=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));const nodes=data.flatMap(d=>d['@graph']||[d]);assert.ok(nodes.some(n=>n['@type']==='Organization'));assert.ok(nodes.some(n=>n['@type']==='WebSite'));assert.ok(!nodes.some(n=>n['@type']==='LocalBusiness'||n.aggregateRating));assert.ok(!nodes.some(n=>n.offers||n.price));if(p==='/'){assert.equal(nodes.filter(n=>n['@type']==='Service').length,2);}else if(serviceRoutes.includes(p)){const service=nodes.find(n=>n['@type']==='Service');assert.equal(service.url,origin+p);}else if(articleRoutes.includes(p)){assert.ok(nodes.some(n=>n['@type']==='Article'));const b=nodes.find(n=>n['@type']==='BreadcrumbList');assert.equal(b.itemListElement[1].item,origin+'/blog');assert.equal(b.itemListElement.at(-1).item,origin+p);}else if(p==='/blog'){assert.ok(nodes.some(n=>n['@type']==='CollectionPage'));}}

 for(const [oldPath,target] of [
  ['/sites','/site-profissional'],
  ['/blog/criacao-de-site-profissional-para-empresas','/quanto-custa-criar-um-site'],
  ['/blog/site-institucional-paginas-essenciais','/site-institucional-paginas-essenciais'],
  ['/en/blog','/blog'],
  ['/orcamento','/proposta'],
  ['/planos','/proposta'],
  ['/fr'+verticals[0],verticals[0]],
  ['/en'+verticals[1],verticals[1]],
 ]) {
  const legacy=await request(oldPath+'?utm_source=old');assert.equal(legacy.status,301);
  assert.equal(legacy.headers.get('location'),origin+target+'?utm_source=old');
 }
 const trailing=await request(routes[2]+'/');assert.equal(trailing.status,308);
 assert.equal(trailing.headers.get('location'),origin+routes[2]);
 assert.equal((await request('/proposta?projeto=aplicativo')).headers.get('x-robots-tag'),'noindex, follow');
 for(const path of ['/google-meu-negocio','/minha-empresa-nao-aparece-no-google','/como-colocar-empresa-no-google-maps','/quanto-custa-google-meu-negocio']){
  const retired=await request(path);assert.equal(retired.status,410);assert.equal(retired.headers.get('x-robots-tag'),'noindex');
 }

});
test('all rendered internal links, fragment targets and images resolve; guides are linked from home',async()=>{
 const home=visible(await html('/'));for(const p of routes.slice(1,4))assert.ok(home.includes('href="'+p+'"'),p);
 for(const path of routes){const h=visible(await html(path));for(const [,href]of h.matchAll(/<a\b[^>]*href="([^"]+)"/g)){if(!href.startsWith('/')&&!href.startsWith('#'))continue;const u=new URL(href,origin+path);const target=visible(await html(u.pathname));assert.equal((await request(u.pathname)).status,200,path+' -> '+href);if(u.hash)assert.ok(target.includes('id="'+u.hash.slice(1)+'"'),path+' -> '+href);}
 for(const [tag,src]of [...h.matchAll(/(<img\b[^>]*src="([^"]+)"[^>]*>)/g)].map(m=>[m[1],m[2]])){assert.ok(existsSync('public'+src),src);assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);}}
});
test('analytics accepts only documented events and never stores injected fields or contact URLs',async()=>{
 for(const event of ['primary_cta_click','whatsapp_click','diagnostic_open','diagnostic_start','plan_click','quote_click','form_submit']){const r=await request('/api/analytics',{method:'POST',headers:{'content-type':'application/json',origin},body:JSON.stringify({event,path:'/diagnostico'})});assert.equal(r.status,204,event);}
 for(const body of [{event:'purchase',path:'/'},{event:'whatsapp_click',path:'/?phone=123'},{event:'page_view',path:'https://wa.me/123'}])assert.equal((await request('/api/analytics',{method:'POST',body:JSON.stringify(body)})).status,400);
 assert.equal((await request('/api/analytics',{method:'POST',headers:{origin:'https://foreign.example'},body:'{}'})).status,403);
});

test('vertical pages link to the estimator and a shared portfolio guide',async()=>{
 const guide=routes.at(-1);
 for(const [index,id] of ['arquitetura','engenharia'].entries()){
  const path=verticals[index], proposal='/proposta?projeto=site&segmento='+id;
  const landing=visible(await html(path));
  assert.ok(landing.includes('href="/#simular-site" data-quote-cta'));
  assert.ok(landing.includes('href="'+guide+'"'));
  assert.match(landing,/Projeto conceitual/);
  assert.ok((await html(guide)).includes('href="'+path+'"'));
  assert.ok(!(await html('/')).includes('href="'+path+'"'));
  assert.ok((await html('/site-profissional')).includes('href="'+path+'"'));
  assert.match(visible(await html(proposal)),index===0?/tipos de projeto o escritório oferece/:/serviços técnicos sua empresa oferece/);
 }
});
