import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import Stroke from "../interfaces/Stroke";
import Fill from "../interfaces/Fill";

export default class Path extends CanvasObject implements Stroke, Fill {

    protected pathString: string;
    protected strokeColor: string;
    protected strokeWidthValue: string;
    protected lineCapType: string;
    protected dashArray: string;
    protected strokeOpacityValue: string;
    protected fillValue: string;
    protected fillOpacityValue: string;

    // @Override
    public prepareForBuild(): void {
        this.addTag(
            new Tag("path")
                .addAttribute(new Attribute("d", this.pathString))
                .addAttribute(new Attribute("stroke", this.strokeColor))
                .addAttribute(new Attribute("stroke-width", this.strokeWidthValue))
                .addAttribute(new Attribute("stroke-linecap", this.lineCapType))
                .addAttribute(new Attribute("stroke-dasharray", this.dashArray))
                .addAttribute(new Attribute("stroke-opacity", this.strokeOpacityValue))
                .addAttribute(new Attribute("fill", this.fillValue))
                .addAttribute(new Attribute("fill-opacity", this.fillOpacityValue))
        );
    }

    public points(nestedPointArray: Array<Array<number>>): Path {
        this.pathString = "M ";
        let firstElement: boolean = true;
        for (const pointArray of nestedPointArray) {
            if (firstElement) {
                this.pathString += + pointArray[0].toString() + " " + pointArray[1].toString();
                firstElement = false;
            }
            this.pathString += "L " + pointArray[0].toString() + " " + pointArray[1].toString();
        }
        return this;
    }

    // @Override
    public fill(fillValue: string): Path {
        this.fillValue = fillValue;
        return this;
    }

    // @Override
    public fillOpacity(fillOpacityValue: string): Path {
        this.fillOpacityValue = fillOpacityValue;
        return this;
    };
    
    // @Override
    public stroke(strokeColor: string): Path {
        this.strokeColor = strokeColor;
        return this;
    }

    // @Override
    public strokeWidth(strokeWidthValue: string): Path {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };

    // @Override
    public lineCap(lineCapType: string): Path {
        this.lineCapType = lineCapType;
        return this;
    };

    // @Override
    public dash(dashArray: string): Path {
        this.dashArray = dashArray;
        return this;
    };

    // @Override
    public strokeOpacity(strokeOpacityValue: string): Path {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };

}
