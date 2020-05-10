import Rectangle from "../canvas-objects/simple-canvas-objects/Rectangle.js";
import Circle from "../canvas-objects/simple-canvas-objects/Circle.js";
import Line from "../canvas-objects/simple-canvas-objects/Line.js";
import Path from "../canvas-objects/simple-canvas-objects/Path.js";
import Arc from "../canvas-objects/abstract-canvas-objects/Arc.js";

export default class Draw {

    constructor(registry) {
        this.registry = registry;
    }

    callFunction(func) {
        func();
    }

    rectangle() {
        return new Rectangle(this.registry);
    }

    circle() {
        return new Circle(this.registry);
    }

    line() {
        return new Line(this.registry);
    }

    path() {
        return new Path(this.registry);
    }

    arc() {
        return new Arc(this.registry);
    }

}