import SVGBuilder from "../virtual-dom/SVGBuilder.js";

export default class Renderer {

    constructor(canvasParentCSSId, width, height, backgroundColor, registry) {
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
    }

    render() {
        const boundingClientRect = this.parentElement
            .getBoundingClientRect();
        this.canvasWidthPx = boundingClientRect.width;
        this.canvasHeightPx = boundingClientRect.height;
        // Clears automatically due to assignment.
        this.parentElement.innerHTML = SVGBuilder.build(this.registry);
    }

    clear() {
        this.parentElement.innerHTML = "";
    }

}