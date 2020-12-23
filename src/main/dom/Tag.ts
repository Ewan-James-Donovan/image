import Attribute from "./Attribute";

export default class Tag {

    private tagName: string;
    private attributes: Array<Attribute> = new Array<Attribute>();
    private content: string;

    constructor(tagName: string) {
        this.tagName = tagName;
    }

    public setContent(content: string): Tag {
        this.content = content;
        return this;
    }

    public getContent(): string {
        return `${this.content ? this.content : ""}`;
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