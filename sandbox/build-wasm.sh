#!/usr/bin/env bash
# Build the Rust → WASM physics engine.
# Requires: cargo, wasm-pack (https://rustwasm.github.io/wasm-pack/installer/)

set -euo pipefail

cd "$(dirname "$0")/rust"

echo "Building WASM physics engine..."
wasm-pack build --target web --out-dir ../wasm --release

echo "Done. WASM output in ./wasm/"
