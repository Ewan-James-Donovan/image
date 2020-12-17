import CanvasObject from "../canvas-objects/CanvasObject";
import Attribute from "./Attribute";
import Tag from "./Tag";

export default class SVGBuilder {
    static buildFromRegistry(registry : Array<CanvasObject>) : string {
        let html : string = "<svg>";
        registry.forEach((canvasObject : CanvasObject) => {
            canvasObject.prepareForBuild();
            let canvasObjectString : string = "";
            canvasObject.getTags().forEach((tag : Tag) => {
                canvasObjectString += `<${tag.getTagName()}`;
                tag.getAttributes().forEach((attribute : Attribute) => {
                    canvasObjectString += ` ${attribute.getKey()}="${attribute.getValue()}"`;
                })
                canvasObjectString += `></${tag.getTagName()}>`;
            })
            html += canvasObjectString;
        });
        return html + "</svg>";
    }
}