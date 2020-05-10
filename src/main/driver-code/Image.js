import Registry from "../registry/Registry.js";
import Renderer from "../dom/Renderer.js";
import Drawer from "../drawing/Drawer.js";
import ErrorHandler from "../error-handling/ErrorHandler.js";

export default class Image {

    createCanvas(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor) {
        ErrorHandler.checkType("createCanvas() -> canvasParentCSSId", canvasParentCSSId, "string");
        ErrorHandler.checkType("canvasWidth", canvasWidth, "string");
        ErrorHandler.checkType("canvasHeight", canvasHeight, "string");
        ErrorHandler.checkType("canvasBackgroundColor", canvasBackgroundColor, "string");
        // ErrorHandler.checkCSSUnit()
        this.registry = new Registry();
        this.renderer = new Renderer(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor, this.registry);
        this.drawer = new Drawer(this.registry);
        this.draw = this.drawer;
    }

    frame(func) {
        this.registry.clear();
        this.drawer.callFunction(func);
        this.renderer.render();
    }

}

// image.createCanvas("id", "100px", "100px")
//     .draw(() => {
//         rectangle()
//             .position(10,10)
//             .width(80)
//             .height(80)
//     });