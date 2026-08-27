#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"
fi

command -v timeout >/dev/null || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

echo "Validating UTF-8 source files..."
while IFS= read -r -d '' source_file; do
  if ! iconv -f UTF-8 -t UTF-8 "${source_file}" >/dev/null; then
    echo "Invalid UTF-8 source file: ${source_file#${SITES_PROJECT_ROOT}/}" >&2
    exit 65
  fi
done < <(
  find "${SITES_PROJECT_ROOT}/app" "${SITES_PROJECT_ROOT}/components" "${SITES_PROJECT_ROOT}/lib" \
    -type f \( -name '*.css' -o -name '*.ts' -o -name '*.tsx' \) -print0
)

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Running bounded vinext build..."
bash "${script_dir}/sync-static-css.sh"
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

bash "${script_dir}/validate-artifact.sh"
