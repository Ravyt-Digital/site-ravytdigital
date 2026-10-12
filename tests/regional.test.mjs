import test from 'node:test';import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';import ts from 'typescript';import vm from 'node:vm';
const compile=file=>ts.transpileModule(readFileSync(new URL(file,import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const countries={exports:{},Intl};vm.runInNewContext(compile('../lib/i18n/countries.ts'),countries);
const regional={exports:{},Intl,require:()=>countries.exports};vm.runInNewContext(compile('../lib/i18n/regional.ts'),regional);
const {languageForRequest}=regional.exports;
test('direct URLs and remembered language override first-visit geographic selection',()=>{
 assert.equal(languageForRequest('/fr/blog','ravyt_language=es','en-US','BR'),'fr');
 assert.equal(languageForRequest('/','ravyt_language=pt','fr','FR'),'pt');
 assert.equal(languageForRequest('/','','de;q=1,es;q=.8,en;q=.7',''),'es');
 assert.equal(languageForRequest('/','','','MX'),'es');
});
