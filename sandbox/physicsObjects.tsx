export default class PhysicsObject {
  name: 	string;
  mass: 	number;
  x: 		number;
  y: 		number;
  vx: 		number;
  vy: 		number;
  ax: 		number = 0;
  ay: 		number = 0;

  constructor(name: string, mass: number, x: number, y: number, vx = 0, vy = 0) {
    this.name = name;
    this.mass = mass;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  static createObject(
      ctx: CanvasRenderingContext2D,
      name = 'body',
      mass = 1,
      xPos = ctx.canvas.width/2,
      yPos = ctx.canvas.width/2,
  ): PhysicsObject {
      const x = xPos;
      const y = yPos;

      const obj = new PhysicsObject(name, mass, x, y, 0, 0);

      ctx.beginPath();
      ctx.arc(obj.x, obj.y, mass, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

    return obj;
  }
}
