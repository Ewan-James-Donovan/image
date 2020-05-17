import Registry from "../registry/Registry.js";
import Renderer from "../dom/Renderer.js";
import Drawer from "../drawing/Drawer.js";
import ErrorHandler from "../error-handling/ErrorHandler.js";
import Animator from "../drawing/animation/Animator.js";
import ConstructionRegistry from "../registry/ConstructionRegistry.js";
import Frame from "../drawing/Frame.js";

export default class Image {

    createCanvas(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor) {
        ErrorHandler.checkType("canvasParentCSSId", canvasParentCSSId, "string");
        ErrorHandler.checkType("canvasWidth", canvasWidth, "string");
        ErrorHandler.checkType("canvasHeight", canvasHeight, "string");
        ErrorHandler.checkType("canvasBackgroundColor", canvasBackgroundColor, "string");
        // ErrorHandler.checkCSSUnit()
        this.registry = new Registry();
        this.constructionRegistry = new ConstructionRegistry();
        this.renderer = new Renderer(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor, this.registry, this.constructionRegistry);
        this.draw = new Drawer(this.registry, this.constructionRegistry);
        this.canvasId = this.renderer.canvasParentCSSId;
    }

    frame(func, state) {
        Frame.render(func, state, this.registry, this.constructionRegistry, this.draw, this.renderer, this);
    }

    animate(state, func) {
        Animator.animate(state, func, this);
    }

    scene() {

    }

}