#!/usr/bin/env bash
set -euo pipefail
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ "${SITES_ENV_READY:-}" != "1" ]]; then exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"; fi
worker="${SITES_PROJECT_ROOT}/dist/server/index.js"
hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"
[[ -f "${worker}" && -f "${hosting}" ]] || { echo "Missing production artifact." >&2; exit 66; }
cmp -s "${SITES_PROJECT_ROOT}/app/globals.css" "${SITES_PROJECT_ROOT}/public/styles/site.css" || { echo "CSS fallback is out of sync." >&2; exit 66; }
for required in app/loading.tsx app/not-found.tsx app/politica-de-cookies/page.tsx app/politica-de-privacidade/page.tsx app/termos-de-uso/page.tsx public/favicon.png public/brand/ravyt-social-card.jpg; do
  [[ -f "${SITES_PROJECT_ROOT}/${required}" ]] || { echo "Missing: ${required}" >&2; exit 66; }
done
[[ -f "${SITES_PROJECT_ROOT}/public/llms.txt" ]] || { echo "Missing public/llms.txt" >&2; exit 66; }
[[ -f "${SITES_PROJECT_ROOT}/dist/client/llms.txt" ]] || { echo "llms.txt was not included in the production build." >&2; exit 66; }
for token in "# Ravyt Digital" "Social Media para Psicólogos Parentais" "Ytala Cabral" "Nanda Perim" "PSIMAMA" "https://ravytdigital.com/social-media-para-psicologos-parentais"; do
  grep -q -F "${token}" "${SITES_PROJECT_ROOT}/dist/client/llms.txt" || { echo "llms.txt is missing: ${token}" >&2; exit 66; }
done
if rg -n -i "Márcio|Marcio|landing page|copywriting|produtores digitais" "${SITES_PROJECT_ROOT}/app" "${SITES_PROJECT_ROOT}/components" "${SITES_PROJECT_ROOT}/lib"; then
  echo "Old positioning remains in published source." >&2; exit 66
fi
node --input-type=module - "${worker}" "${hosting}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
const [workerPath, hostingPath] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));
const worker = await import(pathToFileURL(workerPath).href + `?v=${Date.now()}`);
if (!worker.default || typeof worker.default.fetch !== "function") throw new Error("Worker fetch export missing");
const env={ASSETS:{fetch:async()=>new Response("Not found",{status:404})}};
const ctx={waitUntil(){},passThroughOnException(){}};
const request=(path)=>worker.default.fetch(new Request(`https://ravytdigital.com${path}`,{headers:{accept:"text/html"}}),env,ctx);
for (const path of ["/","/social-media-para-psicologos-parentais","/autores/ytala-cabral","/contato","/blog","/blog/conteudo-para-psicologos-parentais","/politica-de-privacidade","/politica-de-cookies","/termos-de-uso"]) {
  const response=await request(path); const html=await response.text();
  if(response.status!==200) throw new Error(`${path} returned ${response.status}`);
  for(const token of ["<title>",'name="description"','property="og:image"']) if(!html.includes(token)) throw new Error(`${path} missing ${token}`);
  if((html.match(/<h1[ >]/g)??[]).length!==1) throw new Error(`${path} must have one H1`);
}
const home=await (await request("/")).text();
for(const token of ["Social Media para Psicólogos Parentais","Ytala Cabral","Nanda Perim","PSIMAMA","todo o Brasil"]) if(!home.includes(token)) throw new Error(`Homepage missing ${token}`);
for(const removed of ["/landing-pages-para-psicologia-parental","/copywriting-para-psicologia-parental","/autores/marcio-cabral"]) {
  if((await request(removed)).status!==404) throw new Error(`${removed} must return 404`);
}
const sitemap=await (await request("/sitemap.xml")).text();
if(!sitemap.includes("/social-media-para-psicologos-parentais")||!sitemap.includes("/blog")||/landing-pages|copywriting|marcio/.test(sitemap)) throw new Error("Sitemap is inconsistent with the current positioning");
NODE
echo "Validated Ravyt Digital specialist site."
