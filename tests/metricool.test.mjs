import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source=ts.transpileModule(readFileSync(new URL('../lib/metricool.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
function tracker(){const scripts=[],visits=[];const context={exports:{},Promise,Error,window:{},document:{createElement:()=>({remove(){}}),head:{appendChild:script=>scripts.push(script)}}};vm.runInNewContext(source,context);return {context,scripts,visits,record:context.exports.recordMetricoolVisit,load:()=>{context.window.beTracker={t:data=>visits.push(data.hash)};scripts[0].onload();}};}
test('no request before consent; one asynchronous load shared across route transitions',async()=>{const t=tracker();await t.record(()=>false);assert.equal(t.scripts.length,0);let oldActive=true;const old=t.record(()=>oldActive);assert.equal(t.scripts.length,1);assert.equal(t.scripts[0].src,'https://tracker.metricool.com/resources/be.js');oldActive=false;const current=t.record(()=>true);assert.equal(t.scripts.length,1);t.load();await Promise.all([old,current]);assert.deepEqual(t.visits,['29a15d18b61f71e682b80421adbaf485']);await t.record(()=>true);assert.equal(t.scripts.length,1);assert.equal(t.visits.length,2);});
test('revoking consent while the script loads prevents recording',async()=>{const t=tracker();let consent=true;const pending=t.record(()=>consent);consent=false;t.load();await pending;assert.equal(t.visits.length,0);});
test('load failures do not break the site and later visits can retry',async()=>{const t=tracker();const pending=t.record(()=>true);t.scripts[0].onerror();await pending;const retry=t.record(()=>true);assert.equal(t.scripts.length,2);t.context.window.beTracker={t:data=>t.visits.push(data.hash)};t.scripts[1].onload();await retry;assert.equal(t.visits.length,1);});
