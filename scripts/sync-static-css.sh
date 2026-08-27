#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
mkdir -p "${project_root}/public/styles"
cp "${project_root}/app/globals.css" "${project_root}/public/styles/site.css"
