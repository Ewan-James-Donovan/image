import Builder from "../virtual-dom/Builder.js";

export default class Renderer {

    constructor(canvasParentCSSId) {
        this.parentElement = document.getElementById(canvasParentCSSId);
        this.buildler = new Builder();
    }

    draw(canvas) {
        this.parentElement.innerHTML = this.builder.build(canvas);
    }

    clear() {
        this.parentElement.innerHTML = "";
    }

}