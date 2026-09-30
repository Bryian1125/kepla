import PhysicsObject from "./physicsObjects";
import GhostObject from "./ghostObject";

const canvas = document.getElementById("simCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const mousePos: {x: number, y: number} = {
    x: 0,
    y: 0
}

let dragging = false;
let objSize = 10;
let ghost: GhostObject | null = null;
let snapshot: ImageData | null = null;

canvas.addEventListener("mousedown", function(e) {
    const rect = canvas.getBoundingClientRect();
    mousePos.x = e.clientX - rect.left;
    mousePos.y = e.clientY - rect.top;
    dragging = true;
    objSize = 10;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ghost = new GhostObject(ctx, mousePos.x, mousePos.y, objSize);
    ghost.draw();
});

document.addEventListener("mousemove", function(e) {
    if (!dragging || !ghost || !snapshot) return;

    const rect = canvas.getBoundingClientRect();
    const dx = mousePos.x - (e.clientX - rect.left);
    const dy = mousePos.y - (e.clientY - rect.top);
    objSize = 10*((Math.hypot(dx, dy)*0.05)+1);
    ctx.putImageData(snapshot, 0, 0);
    ghost.update(objSize);
});

document.addEventListener("mouseup", function(e) {
    if (!dragging) return;
    if (snapshot) ctx.putImageData(snapshot, 0, 0);
    PhysicsObject.createObject(ctx, 'physicsObject', objSize, mousePos.x, mousePos.y);

    ghost = null;
    snapshot = null;
    dragging = false;
    objSize = 10;
});
