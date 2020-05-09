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
        this.parentElement.onresize = function () {
            const boundingClientRect = document
                .getElementById(this.canvasParentCSSId)
                .getBoundingClientRect();
            this.canvasWidthPx = boundingClientRect.width;
            this.canvasHeightPx = boundingClientRect.height;
        };
        this.svgBuildler = new SVGBuilder();
        this.registry = registry;

        this.firstDraw = true;
    }

    draw(canvas) {
        // Clears automatically due to assignment.
        this.parentElement.innerHTML = this.svgBuildler.build(registry);

        if (this.firstDraw) {
            const boundingClientRect = document
                .getElementById(this.canvasParentCSSId)
                .getBoundingClientRect();
            this.canvasWidthPx = boundingClientRect.width;
            this.canvasHeightPx = boundingClientRect.height;
            this.firstDraw = false;
        }

    }

    clear() {
        this.parentElement.innerHTML = "";
    }

}