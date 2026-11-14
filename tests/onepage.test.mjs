import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync,existsSync} from 'node:fs';
import worker from '../dist/server/index.js';
const env={ASSETS:{fetch:async()=>new Response('',{status:404})}},ctx={waitUntil(){},passThroughOnException(){}};
const request=(path,headers={})=>worker.fetch(new Request('https://ravytdigital.com'+path,{headers}),env,ctx);
const visible=s=>s.replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<style\b[\s\S]*?<\/style>/g,'');
let html;const home=async()=>html??=(await(await request('/')).text());
test('home presents the website plans, portfolio and consultant',async()=>{
 const h=await home(),v=visible(h);assert.equal((await request('/')).status,200);assert.equal((v.match(/<h1[ >]/g)||[]).length,1);
 for(const id of ['inicio','servicos','clientes','planos','perguntas','projetos','consultor','como-funciona','contato'])assert.ok(v.includes('id="'+id+'"'),id);
 for(const text of ['R$ 990','R$ 2.900','R$ 4.500','Perfil da Empresa','todo o Brasil','Ananda Oliveira','Capoeira Haute-Savoie','CEREST'])assert.ok(v.includes(text),text);
 assert.doesNotMatch(v,/projeto-antonia-moreira|francisca-antonia-neuro|\/projects\/antonia-moreira/);
 assert.doesNotMatch(v,/59,90|Cartão NFC|domínio grátis/);
 assert.match(h,/<title>Criação de Sites e Presença no Google \| Ravyt Digital<\/title>/);
});
test('old diagnostic and contact URLs lead to the relevant sections; retired content keeps Gone semantics',async()=>{
 for(const path of ['/contato','/diagnostico','/diagnosticos','/en/diagnostico','/fr/diagnostico']){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).pathname,'/');assert.equal(new URL(r.headers.get('location')).hash,path==='/contato'?'#contato':'#consultor');}
 for(const [path,id]of [['/politica-de-privacidade','privacidade'],['/politica-de-cookies','cookies'],['/termos','termos']]){const r=await request(path);assert.equal(r.status,301);assert.equal(new URL(r.headers.get('location')).hash,'#'+id);}
 for(const path of ['/seo','/cases','/sobre','/fr/seo','/blog','/recursos/checklist-presenca-google']){const r=await request(path);assert.equal(r.status,410,path);assert.equal(r.headers.get('x-robots-tag'),'noindex');}
 assert.equal((await request('/inexistente')).status,404);
});
test('local brand assets, legal dialogs and responsive safeguards remain available on both pages',async()=>{
 for(const path of ['/','/minha-empresa-nao-aparece-no-google']){const h=visible(await(await request(path)).text());for(const [tag]of h.matchAll(/<img\b[^>]*>/g)){assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);assert.match(tag,/alt="[^"]+"/);const src=tag.match(/src="([^"]+)"/)[1];assert.ok(existsSync('public'+src));}for(const id of ['privacidade','termos'])assert.ok(h.includes('id="'+id+'"'));}
 const css=readFileSync('app/globals.css','utf8');assert.match(css,/prefers-reduced-motion/);assert.match(css,/max-width:600px/);assert.match(css,/--paper:#050C13/);assert.match(css,/--copper:#EF5309/);const analytics=readFileSync('components/Analytics.tsx','utf8');assert.doesNotMatch(analytics,/leadFields|\.answers|\.phone|\.name|profile:/);
});
test('domain upgrades preserve campaigns and HTML remains revalidated',async()=>{
 for(const origin of ['http://ravytdigital.com','http://www.ravytdigital.com','https://www.ravytdigital.com']){const r=await worker.fetch(new Request(origin+'/?utm_source=campaign&utm_medium=cpc'),env,ctx);assert.equal(r.status,308);assert.equal(r.headers.get('location'),'https://ravytdigital.com/?utm_source=campaign&utm_medium=cpc');}
 assert.equal((await request('/')).headers.get('cache-control'),'no-cache, max-age=0, must-revalidate');
});

test('commercial calls to action use the verified number or the proposal form',async()=>{
 const h=visible(await home());
 const contacts=[...h.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/g)].map(m=>m[1]);assert.ok(contacts.length>=3);
 for(const href of contacts){const url=new URL(href.replaceAll('&amp;','&'));assert.equal(url.pathname,'/5588996777332');assert.doesNotMatch(url.searchParams.get('text'),/59,90/);}
 assert.match(h,/href="\/proposta"/);
 assert.match(h,/href="\/site-profissional"/);
 const proposal=await(await request('/proposta?plano=profissional')).text();
 assert.match(proposal,/Você selecionou o Site Profissional/);
 assert.match(proposal,/Enviar pedido de proposta/);
});
test('proposal submissions require same origin and consent, preserve attribution and tolerate retries',async()=>{
 const origin='https://ravytdigital.com',records=new Map();
 const database={prepare:()=>({bind:(...params)=>({run:async()=>{if(!records.has(params[0]))records.set(params[0],params);}})})};
 const fields={requestId:'382317da-11e4-4b00-8f91-13695b3c6c18',kind:'proposta',consent:'sim',name:'Teste',business:'Empresa teste',contact:'teste@example.com',description:'Dados fictícios para teste.',plan:'profissional',referral:'parceiro-1',campaign:{utm_source:'instagram'}};
 const send=(data,from=origin)=>worker.fetch(new Request(origin+'/api/propostas',{method:'POST',headers:{origin:from,'Content-Type':'application/json'},body:JSON.stringify(data)}),{...env,DB:database},ctx);
 assert.equal((await send(fields,'https://example.com')).status,403);
 assert.equal((await send({...fields,consent:''})).status,400);
 assert.equal((await send({...fields,contact:'incompleto'})).status,400);
 const first=await send(fields), second=await send(fields);
 assert.equal(first.status,201); assert.deepEqual(await first.json(),await second.json());
 assert.equal(records.size,1); assert.equal([...records.values()][0][8],'parceiro-1'); assert.equal([...records.values()][0][9],'instagram');
 const nicheId='382317da-11e4-4b00-8f91-13695b3c6c19';
 const niche=await send({...fields,requestId:nicheId,segment:'arquitetura'});
 assert.equal(niche.status,201);
 assert.equal(records.get(nicheId)[6],'Página de origem: Arquitetura e interiores\n\n'+fields.description);
 assert.equal([...records.values()][0][6],fields.description);

});
