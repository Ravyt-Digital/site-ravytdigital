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

cmp -s "${SITES_PROJECT_ROOT}/app/globals.css" "${SITES_PROJECT_ROOT}/public/styles/site.css" || {
  echo "Stable CSS fallback is missing or out of sync." >&2
  exit 66
}
[[ -f "${SITES_PROJECT_ROOT}/dist/client/styles/site.css" ]] || {
  echo "Stable CSS fallback was not packaged in dist/client." >&2
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
if grep -R -n -E 'Typeform|Jotform' "${SITES_PROJECT_ROOT}/app" "${SITES_PROJECT_ROOT}/components"; then
  echo "An unapproved external form embed is still referenced." >&2
  exit 66
fi

grep -q -F 'export const MARCIO_WHATSAPP_NUMBER = "5588996777332"' "${SITES_PROJECT_ROOT}/lib/contact.ts" || {
  echo "Márcio Cabral WhatsApp number is missing." >&2
  exit 66
}
grep -q -F 'export const YTALA_WHATSAPP_NUMBER = "5588996956479"' "${SITES_PROJECT_ROOT}/lib/contact.ts" || {
  echo "Ytala Cabral WhatsApp number is missing." >&2
  exit 66
}
grep -q -F 'https://wa.me/${destinationNumber}?text=' "${SITES_PROJECT_ROOT}/components/LeadQualificationForm.tsx" || {
  echo "Contact form destination routing is missing." >&2
  exit 66
}
grep -q -F 'window.location.assign("/obrigado")' "${SITES_PROJECT_ROOT}/components/LeadQualificationForm.tsx" || {
  echo "Contact form confirmation destination is missing." >&2
  exit 66
}

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
  "/landing-pages-para-psicologia-parental",
  "/copywriting-para-psicologia-parental",
  "/contato",
  "/obrigado",
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

const removedRegionalArticle = await request("/blog/mercado-sites-seo-local-ceara");
if (removedRegionalArticle.status !== 404) {
  throw new Error("Removed Ceará article must return HTTP 404");
}

const home = await render("/");
if (!home.includes('/styles/site.css?v=20260827d')) {
  throw new Error("Homepage is missing the stable CSS fallback link");
}
for (const expected of [
  "Landing Pages para Psicologia Parental",
  "Landing pages e copywriting",
  "Atendimento a produtores digitais em todo o Brasil",
  "Somente dois serviços",
  "/landing-pages-para-psicologia-parental",
  "/copywriting-para-psicologia-parental",
  "Quero conversar sobre meu projeto pelo WhatsApp",
]) {
  if (!home.includes(expected)) throw new Error(`Homepage is missing: ${expected}`);
}

for (const [path, expected] of [
  ["/landing-pages-para-psicologia-parental", "Criação de landing pages para produtores digitais de Psicologia Parental"],
  ["/copywriting-para-psicologia-parental", "Copywriting para produtos digitais de Psicologia Parental"],
]) {
  const page = await render(path);
  for (const token of [expected, `https://ravytdigital.com${path}`, "BreadcrumbList", "FAQPage"]) {
    if (!page.includes(token)) throw new Error(`${path} is missing: ${token}`);
  }
}

const sitemap = await render("/sitemap.xml");
if (sitemap.includes("/blog/mercado-sites-seo-local-ceara")) {
  throw new Error("Sitemap still includes the removed Ceará article");
}
for (const path of [
  "/landing-pages-para-psicologia-parental",
  "/copywriting-para-psicologia-parental",
]) {
  if (!sitemap.includes(path)) throw new Error(`Sitemap is missing ${path}`);
}

const contact = await render("/contato");
for (const token of [
  "Vamos estruturar sua landing page",
  "ola@ravytdigital.com",
  "Landing pages e copywriting para produtores digitais de Psicologia Parental",
]) {
  if (!contact.includes(token)) throw new Error(`Contact page is missing: ${token}`);
}
for (const [path, page] of [["/", home], ["/contato", contact]]) {
  if (/Tianguá|Tiangua/.test(page)) throw new Error(`${path} still exposes the removed location`);
}
for (const required of ["<form", "Serviço desejado", "Explique brevemente o projeto"]) {
  if (!contact.includes(required)) throw new Error(`Contact page is missing qualified-form content: ${required}`);
}
NODE

echo "Validated Sites artifact: ESM Worker default.fetch and hosting manifest are present."
