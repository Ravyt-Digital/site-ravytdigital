export const PRICING = {annual:597, months:12, days:365, currencies:['BRL','USD','EUR']} as const;
export type Currency = typeof PRICING.currencies[number];
export const EUROZONE = new Set('AT BE BG HR CY EE FI FR DE GR IE IT LV LT LU MT NL PT SK SI ES'.split(' '));
export function currencyForCountry(country:string):Currency {return country.toUpperCase()==='BR'?'BRL':EUROZONE.has(country.toUpperCase())?'EUR':'USD';}
export function currencyForRequest(country:string,cookie:string):Currency {return (cookie.match(/(?:^|;\s*)ravyt_currency=(BRL|USD|EUR)(?:;|$)/)?.[1] as Currency) ?? currencyForCountry(country);}
export function money(amount:number,currency:string,lang:string){return new Intl.NumberFormat(({pt:'pt-BR',en:'en-US',fr:'fr-FR',es:'es-ES'} as Record<string,string>)[lang]??'en-US',{style:'currency',currency,minimumFractionDigits:2,maximumFractionDigits:2}).format(amount);}
export function formatPrices(text:string,currency:string,lang:string){return text.replace(/\[\[(annual|monthly)\]\]/g,(_,key)=>money(key==='annual'?PRICING.annual:PRICING.annual/PRICING.months,currency,lang)).replace(/R\$\s*(597(?:[,.]00)?|49[,.]75|1[,.]64)/g,(_,value)=>money(Number(value.replace(',','.')),currency,lang));}
export function regionalPaymentText(text:string,country:string){return country==='BR'?text:text.replace(/\bPix\s*,\s*/gi,'').replace(/\bPix\s+(?:ou|or|o)\s+/gi,'').replace(/\s+(?:ou|or|o)\s+boleto/gi,'');}
export function languageForRequest(path: string, cookie: string, accept: string, country: string) {
 const direct = path.match(/^\/(en|fr|es)(?:\/|$)/)?.[1]; if(direct) return direct;
 const manual = cookie.match(/(?:^|;\s*)ravyt_language=(pt|en|fr|es)(?:;|$)/)?.[1]; if(manual) return manual;
 const choices = accept.split(',').map((part,index)=>({lang:part.trim().split(';')[0].split('-')[0].toLowerCase(),q:Number(part.match(/;\s*q=([\d.]+)/)?.[1] ?? 1),index})).filter(x=>['pt','en','fr','es'].includes(x.lang)&&x.q>0&&x.q<=1).sort((a,b)=>b.q-a.q||a.index-b.index);
 return choices[0]?.lang ?? (!country||country==='BR'||country==='PT'?'pt':['FR','BE','MC'].includes(country)?'fr':['ES','MX','AR','CL','CO','PE','UY','EC','BO','PY','VE','CR','PA','GT','HN','SV','NI','DO','CU'].includes(country)?'es':'en');
}
