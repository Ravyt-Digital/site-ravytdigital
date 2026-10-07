import { exchangeResponse } from "./exchange";
import { currencyForRequest, languageForRequest } from "../lib/i18n/regional";
/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === "www.ravytdigital.com") { url.hostname="ravytdigital.com"; url.protocol="https:"; return Response.redirect(url.href,308); }

    // Endereços antigos ainda encontrados pelo Google apontam para a página equivalente atual.
    const legacyRedirects: Record<string, string> = {
      "/privacidade": "/politica-de-privacidade",
      "/termos": "/termos-de-uso",
      "/servicos/criacao-de-sites": "/sites",
      "/blog/instagram-nao-substitui-site-proprio": "/sites",
    };
    const destination = legacyRedirects[url.pathname.replace(/\/$/, "")];
    if (destination) return Response.redirect(new URL(destination, "https://ravytdigital.com").href, 301);

    if (url.pathname === "/hero-video-20260927") {
      const assetUrl = new URL("/hero/ravyt-background-20260927.mp4", request.url);
      const response = await env.ASSETS.fetch(new Request(assetUrl, request));
      if (!response.ok) return response;
      const headers = new Headers(response.headers);
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const country = String((request as Request & {cf?: {country?:string}}).cf?.country ?? request.headers.get("cf-ipcountry") ?? "");
    if(url.pathname === "/api/exchange-rates") return exchangeResponse(country,request.headers.get("cookie")??"");
    const lang = languageForRequest(url.pathname, request.headers.get("cookie")??"", request.headers.get("accept-language")??"", country);
    const isPage=request.method==="GET"&&!url.pathname.startsWith("/api/")&&!url.pathname.startsWith("/_")&&!/\.[a-z0-9]+$/i.test(url.pathname);
    const isBot=/bot|crawler|spider|slurp/i.test(request.headers.get("user-agent")??"");
    if(isPage&&!isBot&&!/^\/(en|fr|es)(?:\/|$)/.test(url.pathname)&&lang!=="pt"){
      url.pathname="/"+lang+(url.pathname==="/"?"":url.pathname);
      return new Response(null,{status:307,headers:{Location:url.href,"Cache-Control":"private, no-store",Vary:"Accept-Language, Cookie, CF-IPCountry"}});
    }
    const requestHeaders=new Headers(request.headers);
    requestHeaders.set("x-ravyt-currency",currencyForRequest(country,request.headers.get("cookie")??""));
    requestHeaders.set("x-ravyt-country",country);
    requestHeaders.set("x-ravyt-language", /^\/(en|fr|es)(?:\/|$)/.test(url.pathname)?lang:"pt");
    const response = await handler.fetch(new Request(request,{headers:requestHeaders}), env, ctx);
    if(response.status===404){const headers=new Headers(response.headers);headers.set("X-Robots-Tag","noindex");return new Response(response.body,{status:404,headers});}
    if(isPage){const headers=new Headers(response.headers);headers.set('Cache-Control','private, no-store');headers.append('Vary','CF-IPCountry, Accept-Language, Cookie');return new Response(response.body,{status:response.status,statusText:response.statusText,headers});}
    return response;
  },
};

export default worker;
