# Build the Rust → WASM physics engine.
# Requires: cargo, wasm-pack (https://rustwasm.github.io/wasm-pack/installer/)

$ErrorActionPreference = "Stop"

Set-Location (Join-Path $PSScriptRoot "rust")

Write-Host "Building WASM physics engine..."
wasm-pack build --target web --out-dir ../wasm --release

Write-Host "Done. WASM output in ./wasm/"
