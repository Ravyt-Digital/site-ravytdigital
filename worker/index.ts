import {handleImageOptimization,DEFAULT_DEVICE_SIZES,DEFAULT_IMAGE_SIZES} from 'vinext/server/image-optimization';
import handler from 'vinext/server/app-router-entry';
interface Env{ASSETS:Fetcher;IMAGES:{input(stream:ReadableStream):{transform(options:Record<string,unknown>):{output(options:{format:string;quality:number}):Promise<{response():Response}>}}};}
interface ExecutionContext{waitUntil(promise:Promise<unknown>):void;passThroughOnException():void;}
const sectionRedirects:Record<string,string>={'/contato':'diagnostico','/diagnostico':'diagnostico','/politica-de-privacidade':'privacidade','/privacidade':'privacidade','/politica-de-cookies':'cookies','/termos-de-uso':'termos','/termos':'termos'};
const retired=['/sites','/seo','/google-meu-negocio','/criacao-de-sites-online','/quanto-custa-criar-um-site','/sites-para-empresas-de-engenharia','/sites-para-escritorios-de-arquitetura','/sites-para-moveis-planejados','/cases','/sobre','/autores/ytala-cabral','/servicos','/servicos/criacao-de-sites'];
export default {async fetch(request:Request,env:Env,ctx:ExecutionContext):Promise<Response>{
 const url=new URL(request.url),path=url.pathname.replace(/\/$/,'')||'/',raw=path.replace(/^\/(en|fr|es)(?=\/|$)/,'')||'/';
 if(url.hostname==='www.ravytdigital.com'||(url.hostname==='ravytdigital.com'&&url.protocol==='http:')){url.hostname='ravytdigital.com';url.protocol='https:';return Response.redirect(url.href,308);}
 if(raw!=='/'&&sectionRedirects[raw]){url.pathname='/';url.hash=sectionRedirects[raw];url.searchParams.delete('lang');return Response.redirect(url.href,301);}
 if(path!=='/'&&raw==='/'){url.pathname='/';url.searchParams.delete('lang');return Response.redirect(url.href,301);}
 if(retired.includes(raw)||/^\/blog(?:\/|$)/.test(raw)||/^\/recursos(?:\/|$)/.test(raw)||['/gestao-de-midias-sociais','/quanto-custa-gestao-de-midias-sociais','/social-media-para-psicologos-parentais'].includes(raw))return new Response('Este conteúdo foi retirado do site. Acesse a página principal em https://ravytdigital.com.',{status:410,headers:{'Content-Type':'text/plain; charset=utf-8','X-Robots-Tag':'noindex'}});
 if(path==='/_vinext/image')return handleImageOptimization(request,{fetchAsset:p=>env.ASSETS.fetch(new Request(new URL(p,request.url))),transformImage:async(body,{width,format,quality})=>(await env.IMAGES.input(body).transform(width>0?{width}:{}).output({format,quality})).response()},[...DEFAULT_DEVICE_SIZES,...DEFAULT_IMAGE_SIZES]);
 const response=await handler.fetch(request,env,ctx);
 if(response.status===404){const headers=new Headers(response.headers);headers.set('X-Robots-Tag','noindex');return new Response(response.body,{status:404,headers});}
 // Revalidate successful HTML; hashed CSS/JS and images retain their cache policy.
 if(response.ok&&response.headers.get('Content-Type')?.includes('text/html')){const headers=new Headers(response.headers);headers.set('Cache-Control','no-cache, max-age=0, must-revalidate');return new Response(response.body,{status:response.status,statusText:response.statusText,headers});}
 return response;
}};
