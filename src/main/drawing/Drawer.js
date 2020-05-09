import Rectangle from "../canvas-objects/simple-canvas-objects/Rectangle.js";
import Circle from "../canvas-objects/simple-canvas-objects/Circle.js";

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

}