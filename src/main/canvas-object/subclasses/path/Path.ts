import Tag from "../../../dom/Tag";
import Attribute from "../../../dom/Attribute";
import CanvasObject from "../../CanvasObject";
import Stroke from "../../interfaces/Stroke";
import Fill from "../../interfaces/Fill";

export default class Path<SubType> extends CanvasObject implements Stroke<any>, Fill<any> {

    private pathString: string;
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

    public points(nestedPointArray: Array<Array<number>>): SubType {
        this.pathString = "M ";
        let firstElement: boolean = true;
        for (const pointArray of nestedPointArray) {
            if (firstElement) {
                this.pathString += + pointArray[0].toString() + " " + pointArray[1].toString();
                firstElement = false;
            }
            this.pathString += " L " + pointArray[0].toString() + " " + pointArray[1].toString();
        }
        return <SubType> <unknown> this;
    }

    // @Override
    public fill(fillValue: string): SubType {
        this.fillValue = fillValue;
        return <SubType> <unknown> this;
    }

    // @Override
    public fillOpacity(fillOpacityValue: string): SubType {
        this.fillOpacityValue = fillOpacityValue;
        return <SubType> <unknown> this;
    };

    // @Override
    public stroke(strokeColor: string): SubType {
        this.strokeColor = strokeColor;
        return <SubType> <unknown> this;
    }

    // @Override
    public strokeWidth(strokeWidthValue: string): SubType {
        this.strokeWidthValue = strokeWidthValue;
        return <SubType> <unknown> this;
    };

    // @Override
    public lineCap(lineCapType: string): SubType {
        this.lineCapType = lineCapType;
        return <SubType> <unknown> this;
    };

    // @Override
    public dash(dashArray: string): SubType {
        this.dashArray = dashArray;
        return <SubType> <unknown> this;
    };

    // @Override
    public strokeOpacity(strokeOpacityValue: string): SubType {
        this.strokeOpacityValue = strokeOpacityValue;
        return <SubType> <unknown> this;
    };

}
