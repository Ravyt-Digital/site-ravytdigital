import {baselineRates,currencyForCountry,type Rates,parseRates} from '../lib/i18n/regional';
interface Database {prepare(sql:string):{first<T>():Promise<T|null>;bind(...args:unknown[]):{run():Promise<unknown>}};exec(sql:string):Promise<unknown>}
let memory:{rates:Rates;checked:number}|undefined;
let pending:Promise<{rates:Rates;checked:number}>|undefined;
async function refresh(db?:Database){
 let saved=memory;
 if(!saved&&db)try{await db.exec('CREATE TABLE IF NOT EXISTS ravyt_exchange_rates (id INTEGER PRIMARY KEY, payload TEXT NOT NULL, checked INTEGER NOT NULL)');const row=await db.prepare('SELECT payload, checked FROM ravyt_exchange_rates WHERE id=1').first<{payload:string;checked:number}>();if(row)saved={rates:JSON.parse(row.payload),checked:row.checked};}catch{/* Durable cache may be unavailable in development. */}
 if(saved&&Date.now()-saved.checked<3600000)return memory=saved;
 try{
 const response=await fetch('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml',{signal:AbortSignal.timeout(7000),headers:{Accept:'application/xml'}});
 if(!response.ok)throw new Error('ECB unavailable');const rates=parseRates(await response.text());const result={rates,checked:Date.now()};memory=result;
 if(db)try{await db.prepare('INSERT INTO ravyt_exchange_rates (id,payload,checked) VALUES (1,?,?) ON CONFLICT(id) DO UPDATE SET payload=excluded.payload, checked=excluded.checked').bind(JSON.stringify(rates),result.checked).run();}catch{/* Keep the validated in-memory quotation. */}return result;
 }catch{return memory={rates:saved?.rates??baselineRates,checked:Date.now()-3540000};}
}
export async function exchangeResponse(country:string,db?:Database){if(!pending)pending=refresh(db).finally(()=>{pending=undefined;});const data=await pending;return Response.json({base:'BRL',amount:597,period:'year',currency:currencyForCountry(country),rates:data.rates,stale:data.rates.date!==new Date().toISOString().slice(0,10),source:'ECB'},{headers:{'Cache-Control':'private, no-store','Vary':'CF-IPCountry'}});}
