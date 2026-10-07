import test from 'node:test';
import assert from 'node:assert/strict';
import {languageForRequest} from '../lib/i18n/regional.ts';
test('explicit URL and remembered language precede weighted browser language and geography',()=>{assert.equal(languageForRequest('/fr/blog','ravyt_language=es','en-US','BR'),'fr');assert.equal(languageForRequest('/','ravyt_language=pt','fr','FR'),'pt');assert.equal(languageForRequest('/','','de;q=1,es;q=.8,en;q=.7','US'),'es');assert.equal(languageForRequest('/','','','MX'),'es');});
