import Attribute from "./Attribute.js";

export default class Tag {

    constructor() {
        this.attributes = [];
        this.children = [];
    }

    setTagName(tagName) {
        this.tagName = tagName;
    }

    addAttribute(name, value) {
        this.attributes.push(new Attribute(name, value));
    }

    addChild(childString) {
        this.children.push(childString);
    }

    toHTML() {
        let attributeString = "";
        for (const attribute of this.attributes) {
            attributeString += ` ${attribute.name}="${attribute.value}"`;
        }
        let childrenString = "";
        for (const child of this.children) {
            childrenString += child;
        }
        return `<${this.tagName}${attributeString}>${childrenString}</${this.tagName}>`;
    }

}