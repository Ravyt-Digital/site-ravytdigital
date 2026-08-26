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
  "${SITES_PROJECT_ROOT}/app/obrigado/page.tsx" \
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
grep -q -F 'Não foi possível carregar o formulário' "${SITES_PROJECT_ROOT}/components/TypeformEmbed.tsx" || { echo "Missing form error state." >&2; exit 66; }


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
