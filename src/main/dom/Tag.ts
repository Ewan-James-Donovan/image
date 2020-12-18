import Attribute from "./Attribute";

export default class Tag {

    private tagName: string;
    private attributes: Array<Attribute> = new Array<Attribute>();

    constructor(tagName: string) {
        this.tagName = tagName;
    }

    public addAttribute(attribute: Attribute): Tag {
        if (attribute.getValue() != "undefined") {
            this.attributes.push(attribute);
        }
        return this;
    }

    public isVisible(): boolean {
        return this.attributes.length != 0;
    }

    public getAttributes(): Array<Attribute> {
        return [...this.attributes];
    }

    public getTagName(): string {
        return `${this.tagName}`;
    }

}