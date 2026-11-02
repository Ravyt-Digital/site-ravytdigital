import test from 'node:test';import assert from 'node:assert/strict';
import {initialState,quizReducer,questions,classify,validPhone,formatPhone,contactErrors,whatsappMessage,whatsappUrl} from '../lib/diagnostic.mjs';
const cities=['Fortaleza','São Paulo','Rio de Janeiro','Belo Horizonte','Brasília','São Luís','Xique-Xique','São João d’Aliança'];
test('five-step journey requires city, trims it and preserves all answers on back/next',()=>{
 for(const city of cities){let s=quizReducer(initialState,{type:'start'});assert.deepEqual(quizReducer(s,{type:'next'}),s);assert.deepEqual(quizReducer(s,{type:'select',value:99}),s);
 for(let i=0;i<4;i++){s=quizReducer(s,{type:'select',value:1});s=quizReducer(s,{type:'next'});}
 for(const value of [null,0,'','   ']){const t=quizReducer(s,{type:'select',value});assert.equal(quizReducer(t,{type:'next'}).stage,'questions');}
 s=quizReducer(s,{type:'select',value:'  '+city+'  '});s=quizReducer(s,{type:'next'});assert.equal(s.stage,'result');assert.equal(s.answers[4],city);s=quizReducer(s,{type:'back'});s=quizReducer(s,{type:'back'});assert.equal(s.step,3);assert.equal(s.answers[3],1);assert.equal(s.answers[4],city);s=quizReducer(s,{type:'next'});s=quizReducer(s,{type:'next'});assert.equal(s.stage,'result');}
 assert.deepEqual(initialState.answers,[null,null,null,null,null]);assert.equal(questions[4].options.length,0);
});
test('all 256 four-answer combinations retain original classification for every city',()=>{
 const categories=new Set();for(let a=0;a<4;a++)for(let b=0;b<4;b++)for(let c=0;c<4;c++)for(let d=0;d<4;d++){
 const expected=b===2?'B':a===3||d===3?'C':a===2?'D':'A';
 for(const city of cities){const result=classify([a,b,c,d,city]);assert.equal(result.category,expected);assert.deepEqual(result,classify([a,b,c,d,'Fortaleza']));assert.equal(result.goal,questions[1].options[b]);assert.equal(result.difficulty,questions[3].options[d]);assert.ok(result.googleNote);assert.equal(result.compatible,true);categories.add(result.category);}}
 assert.deepEqual([...categories].sort(),['A','B','C','D']);for(const answers of [[0,0,0,0,null],[0,0,0,0,1],[0,0,0,0,' '],[99,0,0,0,'Fortaleza'],[0,0,0,0]])assert.throws(()=>classify(answers));
});
test('contact validation preserves required name, Brazilian mobile and explicit consent',()=>{
 assert.equal(formatPhone('88996777332'),'(88) 99677-7332');assert.equal(validPhone('(88) 99677-7332'),true);
 for(const p of ['123','(00) 99677-7332','(88) 99999-9999','(88) 3361-1234'])assert.equal(validPhone(p),false,p);
 assert.deepEqual(contactErrors({name:'Teste',phone:'88996777332',consent:true}),{});assert.equal(Object.keys(contactErrors({name:' ',phone:'',consent:false})).length,3);
});
test('WhatsApp message contains actual data, all question labels, answers and calculated result',()=>{
 for(const city of cities){const a=[0,2,3,1,city],r=classify(a),contact={name:' João Açúcar 🧡 ',phone:'(88) 91234-5678',profile:' https://example.com/ação?x=1&y=2 '};const message=whatsappMessage(a,r,contact);
 for(const text of ['Nome: João Açúcar 🧡','WhatsApp: (88) 91234-5678','Site ou perfil profissional: https://example.com/ação?x=1&y=2','Cidade: '+city,r.name,r.headline,r.description])assert.ok(message.includes(text),text);
 questions.forEach((q,i)=>assert.ok(message.includes(`${i+1}. ${q.title}\n   Resposta: ${i===4?city:q.options[a[i]]}`)));
 const url=new URL(whatsappUrl(message));assert.equal(url.origin,'https://wa.me');assert.equal(url.pathname,'/5588996956479');assert.deepEqual([...url.searchParams.keys()],['text']);assert.equal(url.searchParams.get('text'),message);assert.doesNotMatch(whatsappUrl(message),/João|🧡|\n/);
 assert.ok(whatsappMessage(a,{...r,name:'FAKE'},contact).includes(r.name));assert.ok(!whatsappMessage(a,{...r,name:'FAKE'},contact).includes('FAKE'));}
 assert.match(whatsappMessage([0,0,0,0,'Fortaleza'],classify([0,0,0,0,'Fortaleza']),{name:'Teste',phone:'88912345678',profile:' '}),/Site ou perfil profissional: Não informado/);
});
