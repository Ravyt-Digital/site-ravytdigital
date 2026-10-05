import {currencyForCountry} from '../lib/i18n/regional';
export async function exchangeResponse(country:string){return Response.json({amount:597,period:'year',currency:currencyForCountry(country),pricing:'fixed-regional'},{headers:{'Cache-Control':'private, no-store','Vary':'CF-IPCountry'}});}
