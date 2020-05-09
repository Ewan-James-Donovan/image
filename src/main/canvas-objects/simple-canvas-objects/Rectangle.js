import SimpleCanvasObject from "../SimpleCanvasObject.js";

export default class Rectangle extends SimpleCanvasObject {

    constructor(registry) {
        super(registry);
        this.setTagName("rect");
    }

    position(x,y) {
        this.tag.addAttribute("x", x);
        this.tag.addAttribute("y", y);
        return this;
    }

    width(width) {
        this.tag.addAttribute("width", width);
        return this;
    }

    height(height) {
        this.tag.addAttribute("height", height);
        return this;
    }

}