import PhysicsObject from "./physicsObjects.tsx"

const canvas = document.getElementById("simCanvas")
const ctx = canvas.getContext('2d')!;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

var mousePos = {
  x: null,
  y: null
}

document.addEventListener("click", function(e) {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;

  const newBody = PhysicsObject.createObject(ctx, 'physicsObject', 1, mousePos.x, mousePos.y);
});

