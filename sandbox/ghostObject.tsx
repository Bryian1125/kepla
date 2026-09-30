export default class GhostObject {
    size: number;
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, size = 1) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.size = size;
    }

    update(size: number) {
        this.size = size;
        this.draw();
    }

    draw() {
        const ctx = this.ctx;
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.restore();
    }
}
