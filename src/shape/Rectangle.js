export default class Rectangle extends Node {
    constructor(canvas, style) {
        super(canvas, style);
        this.x = style.x;
        this.y = style.y;
        this.width = style.width;
        this.height = style.height;
        this.color = style.color;
    }
    draw(painter) {
        painter.fillStyle(this.color)
        painter.fillRect(this.x, this.y, this.width, this.height);
    }
}