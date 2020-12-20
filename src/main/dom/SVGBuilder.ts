import CanvasObject from "../canvas-object/CanvasObject";
import Attribute from "./Attribute";
import Tag from "./Tag";

export default class SVGBuilder {
    static buildFromRegistry(registry: Array<CanvasObject>, backgroundColor: string): string {
        let html: string = "<svg style=\"width: 100%; height: 100%; background-color: " + backgroundColor + ";\">";
        registry.forEach((canvasObject: CanvasObject) => {
            canvasObject.prepareForBuild();
            let canvasObjectString: string = "";
            canvasObject.getTags().forEach((tag: Tag) => {
                if (tag.isVisible()) {
                    canvasObjectString += `<${tag.getTagName()}`;
                    tag.getAttributes().forEach((attribute: Attribute) => {
                        canvasObjectString += ` ${attribute.getKey()}="${attribute.getValue()}"`;
                    })
                    canvasObjectString += `></${tag.getTagName()}>`;
                }
            })
            html += canvasObjectString;
        });
        return html + "</svg>";
    }
}