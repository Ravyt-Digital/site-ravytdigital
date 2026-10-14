#!/usr/bin/env bash
set -euo pipefail
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ "${SITES_ENV_READY:-}" != "1" ]]; then exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"; fi
[[ -f "${SITES_PROJECT_ROOT}/dist/server/index.js" && -f "${SITES_PROJECT_ROOT}/dist/.openai/hosting.json" ]] || { echo "Missing production artifact." >&2; exit 66; }
cmp -s "${SITES_PROJECT_ROOT}/app/globals.css" "${SITES_PROJECT_ROOT}/public/styles/site.css" || { echo "CSS fallback is out of sync." >&2; exit 66; }
node --test "${SITES_PROJECT_ROOT}/tests/onepage.test.mjs" "${SITES_PROJECT_ROOT}/tests/diagnostic.test.mjs"
echo "Validated Ravyt Digital diagnostic."
