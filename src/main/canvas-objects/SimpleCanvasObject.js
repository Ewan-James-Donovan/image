import Tag from "../virtual-dom/Tag.js";

export default class SimpleCanvasObject {

    constructor(registry) {
        this.tag = new Tag();
        this.tags = [this.tag];
        registry.addCanvasObject(this);
    }

    setTagName(tagName) {
        this.tag.setTagName(tagName);
    }

}