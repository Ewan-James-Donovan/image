import Renderer from "./dom/Renderer.js";
import Registry from "./registry/Registry.js";
import ConstructionRegistry from "./registry/ConstructionRegistry.js";
import Drawer from "../drawing/Drawer.js";

export default class Frame {

    constructor(canvas) {
        this.canvas = canvas;
        this.registry = new Registry();
        this.constructionRegistry = new ConstructionRegistry();
        this.drawer = new Drawer(this.registry, this.constructionRegistry);
        this.renderer = new Renderer(
            this.canvas.canvasParentCSSId,
            this.canvas.canvasWidth, 
            this.canvas.canvasHeight,
            this.canvas.canvasBackgroundColor,
            this.registry,
            this.constructionRegistry
        );
    }

    render(func, state) {
        this.registry.clear();
        this.constructionRegistry.clear();
        this.canvas.canvasWidth = this.renderer.canvasWidthPx;
        this.canvas.canvasHeight = this.renderer.canvasHeightPx;
        this.drawer.callFunction(func, state);
        this.renderer.render();
    }

}