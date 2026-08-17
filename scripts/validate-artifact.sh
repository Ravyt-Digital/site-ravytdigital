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
const render = async (path) => {
  const response = await worker.default.fetch(
    new Request(`https://ravytdigital.com${path}`, { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  if (response.status !== 200) throw new Error(`${path} returned HTTP ${response.status}`);
  return response.text();
};

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

const services = await render("/servicos");
if (!services.includes("Presença digital local não se constrói")) {
  throw new Error("Services page is missing the regional SEO section");
}

const sitemap = await render("/sitemap.xml");
if (!sitemap.includes("/blog/mercado-sites-seo-local-ceara")) {
  throw new Error("Sitemap is missing the regional SEO article");
}
NODE

echo "Validated Sites artifact: ESM Worker default.fetch and hosting manifest are present."
