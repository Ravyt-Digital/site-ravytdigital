import assert from 'node:assert/strict';
import test from 'node:test';
const {default:worker}=await import('../dist/server/index.js');
const env={ASSETS:{fetch:async()=>new Response('Not found',{status:404})}};
const ctx={waitUntil(){},passThroughOnException(){}};
const request=(path,country,extra={})=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers:{accept:'text/html','user-agent':'Ravyt routing test','cf-ipcountry':country,'accept-language':'en-US',...extra}}),env,ctx);
test('country determines the first-visit language despite the browser language',async()=>{
 const cases={BR:'pt',PT:'pt',MZ:'pt',AO:'pt',CV:'pt',GW:'pt',ST:'pt',TL:'pt',GQ:'pt',MO:'pt',IN:'en',US:'en',CN:'en',JP:'en',FR:'fr',SN:'fr',CD:'fr',CA:'fr',BE:'fr',CH:'fr',MA:'fr',CI:'fr',MG:'fr',HT:'fr',ES:'es',MX:'es',AR:'es',CO:'es',PE:'es',PR:'es'};
 for(const [country,lang] of Object.entries(cases)){const r=await request('/sites',country);assert.equal(r.status,lang==='pt'?200:307,country);if(lang!=='pt')assert.equal(new URL(r.headers.get('location')).pathname,'/'+lang+'/sites',country);}
});
test('manual language and direct localized links remain usable',async()=>{
 assert.equal((await request('/sites','IN',{cookie:'ravyt_language=pt'})).status,200);
 const french=await request('/sites','MZ',{cookie:'ravyt_language=fr'});assert.equal(new URL(french.headers.get('location')).pathname,'/fr/sites');
 const english=await request('/en','MZ');assert.equal(english.status,200);assert.match(await english.text(),/<html[^>]*lang="en"/);
 const query=await request('/sites?lang=es','IN');assert.equal(new URL(query.headers.get('location')).pathname,'/es/sites');
});
test('country coverage is rendered without changing business facts or sharing cached pages',async()=>{
 for(const [path,country,phrase] of [['/','MZ','em todo Moçambique'],['/','PT','em todo Portugal'],['/','BR','em todo o Brasil'],['/en','IN','throughout India'],['/fr','SN','Sénégal'],['/es','MX','en todo México'],['/','IN','em toda a Índia']]){
  const r=await request(path,country,{cookie:'ravyt_language=pt'});assert.equal(r.status,200,path+country);const html=await r.text();assert.ok(html.includes(phrase),phrase);assert.equal(r.headers.get('cache-control'),'private, no-store');assert.ok(r.headers.get('vary').includes('CF-IPCountry'));assert.ok(html.includes('BRL'));assert.ok(html.includes('Avenida Paulista'));assert.ok(html.includes('597'));
 }
});
test('all translated articles retain content, real authors, sources and language alternates',async()=>{
 const slugs=['perfil-empresa-google-atendimento-online','site-recebe-visitas-mas-nao-contatos','testar-velocidade-site-celular','manutencao-de-site-o-que-inclui'];
 for(const lang of ['en','fr','es'])for(const slug of slugs){const r=await request('/'+lang+'/blog/'+slug,'IN');assert.equal(r.status,200,lang+slug);const html=await r.text();assert.match(html,new RegExp(`<html[^>]*lang="${lang}"`));assert.ok(html.includes(`href="https://ravytdigital.com/${lang}/blog/${slug}"`));for(const language of ['pt-BR','en','fr','es'])assert.ok(html.includes(`hrefLang="${language}"`)||html.includes(`hreflang="${language}"`));assert.ok(html.includes('article-checklist'));assert.ok(html.includes('<figcaption>'));assert.ok(html.includes('article-sources'));assert.ok(html.includes(slug==='perfil-empresa-google-atendimento-online'?'Ytala Cabral':({en:'Ravyt Digital team',fr:'Équipe Ravyt Digital',es:'Equipo Ravyt Digital'})[lang]));assert.ok(!html.includes('min de leitura'));}
});
test('service aliases preserve the requested locale',async()=>{
 for(const lang of ['en','fr','es']){const r=await request('/'+lang+'/servicos','BR');assert.equal(r.status,308);assert.ok(r.headers.get('location').endsWith('/'+lang+'#investimento'));}
});
