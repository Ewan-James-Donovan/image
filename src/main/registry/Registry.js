export default class Registry {

    constructor() {
        this.canvasObjects = [];
    }

    addObject(canvasObject) {
        this.canvasObjects.push(canvasObject);
    }

    getCanvasObjects() {
        return this.canvasObjects;
    }

}