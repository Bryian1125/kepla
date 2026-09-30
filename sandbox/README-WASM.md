# Kepla Physics — Rust/WASM Architecture

## Architecture

```
┌─────────────────────────────────────────────────────┐
│  TypeScript (Rendering + Input)                     │
│  ┌─────────────┐  ┌──────────────┐                  │
│  │ simulation  │  │ physicsEngine│ ← JS wrapper    │
│  │   .tsx      │  │    .ts       │                  │
│  └──────┬──────┘  └──────┬───────┘                  │
│         │                │                          │
│         │    WASM boundary                          │
│         │                │                          │
│  ┌──────▼────────────────▼───────┐                  │
│  │  Rust (Physics Engine)        │                  │
│  │  ┌─────────────────────────┐  │                  │
│  │  │ PhysicsEngine           │  │                  │
│  │  │  - bodies: Vec<Body>    │  │                  │
│  │  │  - step()               │  │                  │
│  │  │  - step_n()             │  │                  │
│  │  └─────────────────────────┘  │                  │
│  └───────────────────────────────┘                  │
└─────────────────────────────────────────────────────┘
```

## Prerequisites

1. **Rust** — https://rustup.rs/
2. **wasm-pack** — https://rustwasm.github.io/wasm-pack/installer/

## Build

```bash
# From the sandbox directory:
.\build-wasm.ps1        # Windows
# or
./build-wasm.sh         # macOS/Linux
```

This produces:
- `wasm/kepla_physics_bg.wasm` — the compiled physics engine
- `wasm/kepla_physics.js` — JS glue code
- `wasm/kepla_physics.d.ts` — TypeScript types

## Usage in TypeScript

```typescript
import { initPhysicsEngine, addBody, stepSimulation } from "./physicsEngine";

// Initialize
await initPhysicsEngine(9.81, 0.01);

// Add bodies
addBody(0, 0, 0, 0, 1000);      // Central mass
addBody(100, 0, 0, 5, 1);       // Orbiting body

// Step and render
function animate() {
    const bodies = stepSimulation();
    // ... render bodies on canvas
    requestAnimationFrame(animate);
}
animate();
```

## File Layout

```
sandbox/
├── rust/
│   ├── Cargo.toml
│   └── src/
│       └── lib.rs          ← Physics engine (Rust)
├── wasm/                    ← Build output (generated)
│   ├── kepla_physics.js
│   ├── kepla_physics.d.ts
│   └── kepla_physics_bg.wasm
├── physicsEngine.ts         ← TS wrapper around WASM
├── simulation.tsx           ← Your existing rendering
├── physicsObjects.tsx       ← Your existing objects
└── ghostObject.tsx          ← Your existing objects
```

## Where to Add Physics Logic

Edit `rust/src/lib.rs` — specifically the `step()` and `step_n()` methods.
That's where the Keplerian orbit math goes.
