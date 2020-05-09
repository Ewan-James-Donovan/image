export default class Registry {

    constructor() {
        this.canvasObjects = [];
    }

    addCanvasObject(canvasObject) {
        this.canvasObjects.push(canvasObject);
    }

    getCanvasObjects() {
        return this.canvasObjects;
    }

    clear() {
        this.canvasObjects = [];
    }

}