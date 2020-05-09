import Rectangle from "../canvas-objects/simple-canvas-objects/Rectangle.js";

export default class Drawer {

    constructor(registry) {
        this.registry = registry;
    }

    callFunction(func) {
        func();
    }

    rectangle() {
        return new Rectangle(this.registry);
    }    

}