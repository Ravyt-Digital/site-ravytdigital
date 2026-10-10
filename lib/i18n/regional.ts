export const PRICING = {annual:597, months:12} as const;
export function money(amount:number){return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',minimumFractionDigits:2,maximumFractionDigits:2}).format(amount);}
export function formatPrices(text:string){return text.replace(/\[\[(annual|monthly)\]\]/g,(_,key)=>money(key==='annual'?PRICING.annual:PRICING.annual/PRICING.months)).replace(/R\$\s*(597(?:[,.]00)?|49[,.]75|1[,.]64)/g,(_,value)=>money(Number(value.replace(',','.'))));}
export function regionalPaymentText(text:string,country:string){return country==='BR'?text:text.replace(/\bPix\s*,\s*/gi,'').replace(/\bPix\s+(?:ou|or|o)\s+/gi,'').replace(/\s+(?:ou|or|o)\s+boleto/gi,'');}
export function languageForRequest(path: string, cookie: string, accept: string, country: string) {
 const direct = path.match(/^\/(en|fr|es)(?:\/|$)/)?.[1]; if(direct) return direct;
 const manual = cookie.match(/(?:^|;\s*)ravyt_language=(pt|en|fr|es)(?:;|$)/)?.[1]; if(manual) return manual;
 const choices = accept.split(',').map((part,index)=>({lang:part.trim().split(';')[0].split('-')[0].toLowerCase(),q:Number(part.match(/;\s*q=([\d.]+)/)?.[1] ?? 1),index})).filter(x=>['pt','en','fr','es'].includes(x.lang)&&x.q>0&&x.q<=1).sort((a,b)=>b.q-a.q||a.index-b.index);
 return choices[0]?.lang ?? (!country||country==='BR'||country==='PT'?'pt':['FR','BE','MC'].includes(country)?'fr':['ES','MX','AR','CL','CO','PE','UY','EC','BO','PY','VE','CR','PA','GT','HN','SV','NI','DO','CU'].includes(country)?'es':'en');
}
