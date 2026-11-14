import {handleImageOptimization,DEFAULT_DEVICE_SIZES,DEFAULT_IMAGE_SIZES} from 'vinext/server/image-optimization';
import handler from 'vinext/server/app-router-entry';
import {articlePaths, blogPath} from '@/lib/site-articles';
import {appPath, quotePath, websitePath} from '@/lib/services';
import {siteSegmentPaths} from '@/lib/site-segments';
import {submitProposal, type ProposalDatabase} from './proposals';
interface Env{DB?:ProposalDatabase;ASSETS:Fetcher;IMAGES:{input(stream:ReadableStream):{transform(options:Record<string,unknown>):{output(options:{format:string;quality:number}):Promise<{response():Response}>}}};}
interface ExecutionContext{waitUntil(promise:Promise<unknown>):void;passThroughOnException():void;}
const sectionRedirects:Record<string,string>={'/politica-de-privacidade':'privacidade','/privacidade':'privacidade','/politica-de-cookies':'cookies','/termos-de-uso':'termos','/termos':'termos'};
const retired=['/seo','/google-meu-negocio','/quanto-custa-google-meu-negocio','/minha-empresa-nao-aparece-no-google','/como-colocar-empresa-no-google-maps','/sites-para-moveis-planejados','/cases','/sobre','/autores/ytala-cabral','/servicos'];
const contentRedirects: Record<string,string> = {
 '/sites':websitePath,
 '/criacao-de-aplicativos':appPath,
 '/orcamento':quotePath,
 '/planos':quotePath,
 '/criacao-de-sites-online':'/site-profissional',
 '/servicos/criacao-de-sites':'/site-profissional',
 '/blog/criacao-de-site-profissional-para-empresas':'/quanto-custa-criar-um-site',
 '/blog/site-institucional-paginas-essenciais':'/site-institucional-paginas-essenciais',
};
const translatedRoutes = new Set([websitePath, appPath, blogPath, quotePath, ...siteSegmentPaths, ...articlePaths]);
export default {async fetch(request:Request,env:Env,ctx:ExecutionContext):Promise<Response>{
 const url=new URL(request.url),path=url.pathname.replace(/\/$/,'')||'/',raw=path.replace(/^\/(en|fr|es)(?=\/|$)/,'')||'/';
 if(url.hostname==='www.ravytdigital.com'||(url.hostname==='ravytdigital.com'&&url.protocol==='http:')){url.hostname='ravytdigital.com';url.protocol='https:';return Response.redirect(url.href,308);}
 const target=(Object.hasOwn(contentRedirects,raw)?contentRedirects[raw]:undefined)??(path!==raw&&translatedRoutes.has(raw)?raw:undefined);
 if(target){url.pathname=target;url.searchParams.delete('lang');return Response.redirect(url.href,301);}
 if(path!=='/'&&url.pathname.endsWith('/')){url.pathname=path;return Response.redirect(url.href,308);}
 if(['/diagnostico','/diagnosticos','/contato'].includes(raw)){url.pathname=quotePath;url.searchParams.delete('lang');return Response.redirect(url.href,301);}
 if(path===quotePath&&url.searchParams.has('plano')){
  const plan=url.searchParams.get('plano');
  url.searchParams.delete('plano');
  if(!url.searchParams.has('projeto')&&['essencial','profissional','sob-medida'].includes(plan??''))url.searchParams.set('projeto','site');
  return Response.redirect(url.href,301);
 }
 if(raw!=='/'&&sectionRedirects[raw]){url.pathname='/';url.hash=sectionRedirects[raw];url.searchParams.delete('lang');return Response.redirect(url.href,301);}
 if(path!=='/'&&raw==='/'){url.pathname='/';url.searchParams.delete('lang');return Response.redirect(url.href,301);}
 if(retired.includes(raw)||(/^\/blog(?:\/|$)/.test(raw)&&path!==blogPath&&!articlePaths.has(path))||/^\/recursos(?:\/|$)/.test(raw)||['/gestao-de-midias-sociais','/quanto-custa-gestao-de-midias-sociais','/social-media-para-psicologos-parentais'].includes(raw))return new Response('Este conteúdo foi retirado do site. Acesse a página principal em https://ravytdigital.com.',{status:410,headers:{'Content-Type':'text/plain; charset=utf-8','X-Robots-Tag':'noindex'}});
 if(/^\/campanhas\/2026-11\/(?:criativos\.html|ravyt-59-90-(?:feed|stories)\.png)$/.test(path)){url.pathname='/site-profissional';return Response.redirect(url.href,302);}
 if(path==='/api/propostas'&&request.method==='POST')return submitProposal(request,env.DB);
 if(path==='/_vinext/image')return handleImageOptimization(request,{fetchAsset:p=>env.ASSETS.fetch(new Request(new URL(p,request.url))),transformImage:async(body,{width,format,quality})=>(await env.IMAGES.input(body).transform(width>0?{width}:{}).output({format,quality})).response()},[...DEFAULT_DEVICE_SIZES,...DEFAULT_IMAGE_SIZES]);
 const response=await handler.fetch(request,env,ctx);
 if(response.status===404){const headers=new Headers(response.headers);headers.set('X-Robots-Tag','noindex');return new Response(response.body,{status:404,headers});}
 // Revalidate successful HTML; hashed CSS/JS and images retain their cache policy.
 if(response.ok&&response.headers.get('Content-Type')?.includes('text/html')){
  const headers=new Headers(response.headers);
  headers.set('Cache-Control','no-cache, max-age=0, must-revalidate');
  if(path===quotePath)headers.set('X-Robots-Tag','noindex, follow');
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
 }
 return response;
}};
