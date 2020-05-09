import ErrorHandler from "../error-handling/ErrorHandler.js";
import Attribute from "./Attribute.js";

export default class Tag {

    constructor(tagName) {
        ErrorHandler.checkType(tagName, "string");
        this.tagName = tagName;
        this.attributes = [];
        this.children = [];
    }

    addAttribute(name, value) {
        ErrorHandler.checkType(name, "string");
        ErrorHandler.checkType(value, "string");
        this.attributes.push(new Attribute(name, value));
    }

    addChild(childString) {
        ErrorHandler.checkType(childString, "string");
        this.children.push(childString);
    }

    toHTML() {
        let attributeString = "";
        for (const attribute of attributes) {
            attributeString += ` ${attribute.name}="${attribute.value}"`;
        }
        let childrenString = "";
        for (const child of children) {
            childrenString += child;
        }
        return `<${this.tagName}${attributeString}>${childrenString}</${this.tagName}>`;
    }

}