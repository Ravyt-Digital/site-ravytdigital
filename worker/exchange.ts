import {currencyForRequest,PRICING} from '../lib/i18n/regional';
export async function exchangeResponse(country:string,cookie=""){return Response.json({amount:PRICING.annual,period:'year',currency:currencyForRequest(country,cookie),pricing:'fixed-regional'},{headers:{'Cache-Control':'private, no-store','Vary':'CF-IPCountry'}});}
