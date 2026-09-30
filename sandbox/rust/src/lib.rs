use wasm_bindgen::prelude::*;

// ─── Body ───────────────────────────────────────────────────────────────────

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub struct Body {
    pub x: f64,
    pub y: f64,
    pub vx: f64,
    pub vy: f64,
    pub mass: f64,
}

#[wasm_bindgen]
impl Body {
    #[wasm_bindgen(constructor)]
    pub fn new(x: f64, y: f64, vx: f64, vy: f64, mass: f64) -> Self {
        Self { x, y, vx, vy, mass }
    }
}

// ─── Physics Engine ─────────────────────────────────────────────────────────

#[wasm_bindgen]
pub struct PhysicsEngine {
    bodies: Vec<Body>,
    g: f64,
    time_step: f64,
}

#[wasm_bindgen]
impl PhysicsEngine {
    #[wasm_bindgen(constructor)]
    pub fn new(g: f64, time_step: f64) -> Self {
        Self {
            bodies: Vec::new(),
            g,
            time_step,
        }
    }

    pub fn add_body(&mut self, body: Body) {
        self.bodies.push(body);
    }

    pub fn body_count(&self) -> usize {
        self.bodies.len()
    }

    /// Get a copy of a body at the given index.
    pub fn get_body(&self, index: usize) -> Option<Body> {
        self.bodies.get(index).copied()
    }

    /// Advance the simulation by one time step.
    /// Returns a Vec<Body> snapshot after the step.
    pub fn step(&mut self) -> Vec<Body> {
        // TODO: implement Keplerian orbit physics here
        // For now, just return current state
        self.bodies.clone()
    }

    /// Advance multiple steps at once (for performance).
    pub fn step_n(&mut self, n: usize) -> Vec<Body> {
        for _ in 0..n {
            // TODO: physics
        }
        self.bodies.clone()
    }

    pub fn set_time_step(&mut self, dt: f64) {
        self.time_step = dt;
    }

    pub fn get_time_step(&self) -> f64 {
        self.time_step
    }
}

// ─── Utility ────────────────────────────────────────────────────────────────

#[wasm_bindgen]
pub fn init_panic_hook() {
    console_error_panic_hook::set_once();
}
