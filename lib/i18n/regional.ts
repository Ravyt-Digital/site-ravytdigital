export const EUROPE = new Set('AL AD AT BY BE BA BG HR CY CZ DK EE FI FR DE GR HU IS IE IT XK LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SE CH TR UA GB VA'.split(' '));
export function currencyForCountry(country: string) { return country.toUpperCase() === 'BR' ? 'BRL' : EUROPE.has(country.toUpperCase()) ? 'EUR' : 'USD'; }
// The same country decision used for pricing limits Pix to Brazil in every language.
export function regionalPaymentText(text: string, currency: string) {
 return currency === 'BRL' ? text : text.replace(/\bPix\s*,\s*/gi, '').replace(/\bPix\s+(?:ou|or|o)\s+/gi, '');
}
export function languageForRequest(path: string, cookie: string, accept: string, country: string) {
 const direct = path.match(/^\/(en|fr|es)(?:\/|$)/)?.[1]; if(direct) return direct;
 const manual = cookie.match(/(?:^|;\s*)ravyt_language=(pt|en|fr|es)(?:;|$)/)?.[1]; if(manual) return manual;
 const choices = accept.split(',').map((part,index)=>({lang:part.trim().split(';')[0].split('-')[0].toLowerCase(),q:Number(part.match(/;\s*q=([\d.]+)/)?.[1] ?? 1),index})).filter(x=>['pt','en','fr','es'].includes(x.lang)&&x.q>0&&x.q<=1).sort((a,b)=>b.q-a.q||a.index-b.index);
 return choices[0]?.lang ?? (!country||country==='BR'||country==='PT'?'pt':['FR','BE','MC'].includes(country)?'fr':['ES','MX','AR','CL','CO','PE','UY','EC','BO','PY','VE','CR','PA','GT','HN','SV','NI','DO','CU'].includes(country)?'es':'en');
}
export type Rates = {date:string; rates:{BRL:number;EUR:number;USD:number}};
export function parseRates(xml:string):Rates {
 const date=xml.match(/time=['"](\d{4}-\d{2}-\d{2})['"]/)?.[1];
 const rate=(c:string)=>Number(xml.match(new RegExp(`currency=['"]${c}['"]\\s+rate=['"]([\\d.]+)['"]`))?.[1]);
 const brl=rate('BRL'),usd=rate('USD');
 if(!date||!Number.isFinite(brl)||!Number.isFinite(usd)||brl<0.1||brl>100||usd<0.1||usd>10||date>new Date().toISOString().slice(0,10))throw new Error('Invalid ECB rates');
 return {date,rates:{BRL:1,EUR:1/brl,USD:usd/brl}};
}
// Last verified ECB publication, used only when the feed and persistent cache are unavailable.
export const baselineRates:Rates={date:'2026-10-02',rates:{BRL:1,EUR:1/5.8610,USD:1.1225/5.8610}};
export function convertPrice(text:string,currency:string,rates:Rates,lang:string) {
 if(currency==='BRL')return text;
 const value=597;
 const formatted=new Intl.NumberFormat(({pt:'pt-BR',en:'en-US',fr:'fr-FR',es:'es-ES'} as Record<string,string>)[lang]??'en-US',{style:'currency',currency,minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
 return text.replace(/R\$\s*597(?:[,.]00)?/g,formatted);
}
