import SVGBuilder from "../virtual-dom/SVGBuilder.js";

export default class Renderer {

    constructor(canvasParentCSSId, width, height, backgroundColor, registry, constructionRegistry) {
        this.canvasParentCSSId = canvasParentCSSId;
        this.parentElement = document.getElementById(canvasParentCSSId);
        if (backgroundColor) {
            this.parentElement
                .setAttribute("style", `width: ${width}; height: ${height}; background-color: ${backgroundColor};`);
        } else {
            this.parentElement
                .setAttribute("style", `width: ${width}; height: ${height};`);
        }
        const boundingClientRect = this.parentElement
            .getBoundingClientRect();
        this.canvasWidthPx = boundingClientRect.width;
        this.canvasHeightPx = boundingClientRect.height;
        this.registry = registry;
        this.constructionRegistry = constructionRegistry;
    }

    render() {
        const boundingClientRect = this.parentElement
            .getBoundingClientRect();
        this.canvasWidthPx = boundingClientRect.width;
        this.canvasHeightPx = boundingClientRect.height;
        this.parentElement.innerHTML = SVGBuilder.build(this.registry, this.constructionRegistry);
    }

    clear() {
        this.parentElement.innerHTML = "";
    }

}