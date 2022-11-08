import Node from "./shape/Node";
import Rectangle from "./shape/Rectangle";

class canvasV {
    constructor(config) {
        if (config.ele === undefined) {
            throw new Error("Not found container of canvas element");
        }
        // canvas的容器
        this.container = config.ele;
        this.canvas = document.createElement('canvas');
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.childs = [];
        this.init();
    }

    init() {
        this.container.appendChild(this.canvas);
        this.painter = this.canvas.getContext('2d')
    }

    // 添加图形时就画出来
    addShape(...shapes) {
        for (const shape of shapes) {
            shape.paint();
        }
    }

}
window.canvasV = canvasV