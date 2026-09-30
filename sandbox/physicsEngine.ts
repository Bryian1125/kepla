/**
 * PhysicsEngine — TypeScript wrapper around the Rust/WASM physics module.
 *
 * Rust owns the simulation state and computes physics.
 * TypeScript owns rendering and user input.
 */

import init, { PhysicsEngine, Body } from "./wasm/kepla_physics.js";

let engine: PhysicsEngine | null = null;

export async function initPhysicsEngine(g: number, timeStep: number): Promise<void> {
    await init();
    engine = new PhysicsEngine(g, timeStep);
}

export function addBody(x: number, y: number, vx: number, vy: number, mass: number): void {
    if (!engine) throw new Error("Physics engine not initialized");
    engine.addBody(new Body(x, y, vx, vy, mass));
}

export function stepSimulation(): Body[] {
    if (!engine) throw new Error("Physics engine not initialized");
    return engine.step();
}

export function stepSimulationN(n: number): Body[] {
    if (!engine) throw new Error("Physics engine not initialized");
    return engine.step_n(n);
}

export function getBodyCount(): number {
    if (!engine) throw new Error("Physics engine not initialized");
    return engine.body_count();
}

export function getBody(index: number): Body {
    if (!engine) throw new Error("Physics engine not initialized");
    const body = engine.get_body(index);
    if (!body) throw new Error(`No body at index ${index}`);
    return body;
}

export function setTimeStep(dt: number): void {
    if (!engine) throw new Error("Physics engine not initialized");
    engine.set_time_step(dt);
}

export function getTimeStep(): number {
    if (!engine) throw new Error("Physics engine not initialized");
    return engine.get_time_step();
}

export { Body };
