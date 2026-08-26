#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"
fi

worker="${SITES_PROJECT_ROOT}/dist/server/index.js"
hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"

[[ -f "${worker}" ]] || {
  echo "Missing Sites Worker entry: dist/server/index.js" >&2
  exit 66
}
[[ -f "${hosting}" ]] || {
  echo "Missing packaged Sites manifest: dist/.openai/hosting.json" >&2
  exit 66
}

for required in \
  "${SITES_PROJECT_ROOT}/app/loading.tsx" \
  "${SITES_PROJECT_ROOT}/app/not-found.tsx" \
  "${SITES_PROJECT_ROOT}/app/politica-de-cookies/page.tsx" \
  "${SITES_PROJECT_ROOT}/app/politica-de-privacidade/page.tsx" \
  "${SITES_PROJECT_ROOT}/app/termos-de-uso/page.tsx" \
  "${SITES_PROJECT_ROOT}/public/favicon.png" \
  "${SITES_PROJECT_ROOT}/public/brand/ravyt-social-card.jpg"; do
  [[ -f "${required}" ]] || { echo "Missing compliance artifact: ${required}" >&2; exit 66; }
done

if grep -R -n -E "ravyt-(logo|symbol)-2026\\.png" "${SITES_PROJECT_ROOT}/app" "${SITES_PROJECT_ROOT}/components"; then
  echo "Page content still references unconverted brand PNG assets." >&2
  exit 66
fi

if find "${SITES_PROJECT_ROOT}/app" "${SITES_PROJECT_ROOT}/components" -type f \
  \( -name '*.tsx' -o -name '*.jsx' \) -print0 \
  | xargs -0 perl -0ne 'if (/<Image(?:(?!alt=)[\\s\\S])*?\/>/) { print "$ARGV\n"; $found = 1 } END { exit($found ? 0 : 1) }'; then
  echo "A Next Image component is missing an alt attribute." >&2
  exit 66
fi

grep -q -F '@media (max-width:' "${SITES_PROJECT_ROOT}/app/globals.css" || { echo "Missing responsive breakpoints." >&2; exit 66; }
grep -q -F 'position: fixed' "${SITES_PROJECT_ROOT}/app/globals.css" || { echo "Missing fixed mobile CTA." >&2; exit 66; }
if grep -R -n -E 'Typeform|Jotform|<form|<input|<textarea|/obrigado' "${SITES_PROJECT_ROOT}/app" "${SITES_PROJECT_ROOT}/components"; then
  echo "A removed form, capture field, embed, or thank-you route is still referenced." >&2
  exit 66
fi

node --input-type=module - "${worker}" "${hosting}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const [workerPath, hostingPath] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("sites-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/server/index.js must have an ESM default export with fetch(request, env, ctx)");
}

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const ctx = { waitUntil() {}, passThroughOnException() {} };
const request = async (path, init = {}) => {
  const response = await worker.default.fetch(
    new Request(`https://ravytdigital.com${path}`, { headers: { accept: "text/html" }, ...init }),
    env,
    ctx,
  );
  return response;
};
const render = async (path) => {
  const response = await request(path);
  if (response.status !== 200) throw new Error(`${path} returned HTTP ${response.status}`);
  return response.text();
};

const pagePaths = [
  "/",
  "/servicos",
  "/servicos/criacao-de-sites",
  "/servicos/gestao-de-redes-sociais",
  "/servicos/criacao-de-sites-no-ceara",
  "/servicos/criacao-de-sites-para-clinicas",
  "/contato",
  "/blog",
  "/autores/marcio-cabral",
  "/autores/ytala-cabral",
  "/politica-editorial",
  "/politica-de-privacidade",
  "/politica-de-cookies",
  "/termos-de-uso",
];

for (const path of pagePaths) {
  const page = await render(path);
  for (const metadataToken of ["<title>", 'name="description"', 'property="og:image"']) {
    if (!page.includes(metadataToken)) throw new Error(`${path} is missing metadata: ${metadataToken}`);
  }
  if ((page.match(/<h1[ >]/g) ?? []).length !== 1) throw new Error(`${path} must render one primary H1`);
}

const missing = await request("/esta-pagina-nao-existe");
if (missing.status !== 404 || !(await missing.text()).includes("Esta página não foi encontrada")) {
  throw new Error("Custom 404 page is missing or does not return HTTP 404");
}

const robots = await render("/robots.txt");
for (const token of ["User-Agent: *", "Allow: /", "https://ravytdigital.com/sitemap.xml"]) {
  if (!robots.includes(token)) throw new Error(`robots.txt is missing: ${token}`);
}

const analytics = await request("/api/analytics", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ path: "/auditoria", occurredAt: new Date().toISOString() }),
});
if (analytics.status !== 204) throw new Error(`Analytics endpoint returned HTTP ${analytics.status}`);

const article = await render("/blog/mercado-sites-seo-local-ceara");
for (const expected of [
  "Mercado de Sites e SEO Local no Ceará: análise 2026",
  "https://ravytdigital.com/blog/mercado-sites-seo-local-ceara",
  "BreadcrumbList",
  "3.875.188",
  "Como este conteúdo foi produzido",
]) {
  if (!article.includes(expected)) throw new Error(`Regional SEO article is missing: ${expected}`);
}

const home = await render("/");
for (const expected of [
  "<title>Criação de Sites e Gestão de Redes Sociais no Ceará</title>",
  "Criação de sites e gestão de redes sociais",
  "Tianguá, Ceará",
  "Dois serviços principais",
  "Rua Mocinha Batista, S/N, Centro, Tianguá - CE",
  "26.114.696/0001-70",
  "/servicos/criacao-de-sites",
  "/servicos/gestao-de-redes-sociais",
  "Conversar pelo WhatsApp com a Ravyt Digital",
  "DA Dental Clinic",
  "https://clinic-reveal-web.lovable.app/",
  "/projects/da-dental-clinic.webp",
]) {
  if (!home.includes(expected)) throw new Error(`Homepage is missing: ${expected}`);
}

const services = await render("/servicos");
if (!services.includes("Presença digital local não se constrói")) {
  throw new Error("Services page is missing the regional SEO section");
}

for (const [path, expected] of [
  ["/servicos/criacao-de-sites", "Criação de sites profissionais"],
  ["/servicos/gestao-de-redes-sociais", "Gestão de redes sociais para empresas"],
  ["/servicos/criacao-de-sites-no-ceara", "Criação de sites no Ceará"],
  ["/servicos/criacao-de-sites-para-clinicas", "Criação de sites para clínicas e consultórios"],
]) {
  const page = await render(path);
  for (const token of [expected, `https://ravytdigital.com${path}`, "BreadcrumbList", "FAQPage"]) {
    if (!page.includes(token)) throw new Error(`${path} is missing: ${token}`);
  }
}

const sitemap = await render("/sitemap.xml");
if (!sitemap.includes("/blog/mercado-sites-seo-local-ceara")) {
  throw new Error("Sitemap is missing the regional SEO article");
}
for (const path of [
  "/servicos/criacao-de-sites",
  "/servicos/gestao-de-redes-sociais",
  "/servicos/criacao-de-sites-no-ceara",
  "/servicos/criacao-de-sites-para-clinicas",
]) {
  if (!sitemap.includes(path)) throw new Error(`Sitemap is missing ${path}`);
}

const contact = await render("/contato");
for (const token of [
  "Conversar pelo WhatsApp",
  "ola@ravytdigital.com",
  "Tianguá, Ceará",
  "Atendimento a produtores digitais em todo o Brasil",
]) {
  if (!contact.includes(token)) throw new Error(`Contact page is missing: ${token}`);
}
for (const forbidden of ["<form", "Typeform", "Jotform", "/obrigado"]) {
  if (contact.includes(forbidden)) throw new Error(`Contact page still contains forbidden form content: ${forbidden}`);
}
NODE

echo "Validated Sites artifact: ESM Worker default.fetch and hosting manifest are present."
