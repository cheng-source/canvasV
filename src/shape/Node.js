export default class Node {
    constructor(canvas, style = {}) {
        this.canvas = canvas;
        this.position = style.position;
        this.width = style.width;
        this.height = style.height;
    }

    draw() {};

    paint() {
        const { painter } = this.canvas;
        painter.save();
        this.draw(painter);
        painter.restore();
    }
}