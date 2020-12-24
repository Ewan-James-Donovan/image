import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import Position from "../common-interfaces/Position";
import Fill from "../common-interfaces/Fill";
import Stroke from "../common-interfaces/Stroke";

export default class Text extends CanvasObject implements Position<Text>, Fill<Text>, Stroke<Text> {

    private xValue: string;
    private yValue: string;
    private fillValue: string;
    private fillOpacityValue: string;
    private strokeColor: string;
    private strokeWidthValue: string;
    private lineCapType: string;
    private dashArray: string;
    private strokeOpacityValue: string;
    private textValue: string;
    private fontFamily: string;
    private sizeValue: string;

    public string(textValue: string): Text {
        this.textValue = textValue;
        return this;
    }

    public font(fontFamily: string): Text {
        this.fontFamily = fontFamily;
        return this;
    }

    public size(sizeValue: string): Text {
        this.sizeValue = sizeValue;
        return this;
    }

    // @Override
    public prepareForBuild(): void {
        this.addTag(
            new Tag("text")
                .addAttribute(new Attribute("x", this.xValue))
                .addAttribute(new Attribute("y", this.yValue))
                .addAttribute(new Attribute("fill", this.fillValue))
                .addAttribute(new Attribute("fill-opacity", this.fillOpacityValue))
                .addAttribute(new Attribute("stroke", this.strokeColor))
                .addAttribute(new Attribute("stroke-width", this.strokeWidthValue))
                .addAttribute(new Attribute("stroke-linecap", this.lineCapType))
                .addAttribute(new Attribute("stroke-dasharray", this.dashArray))
                .addAttribute(new Attribute("stroke-opacity", this.strokeOpacityValue))
                .addAttribute(new Attribute("font-family", this.fontFamily))
                .addAttribute(new Attribute("font-size", this.sizeValue))
                .setContent(this.textValue)
        );
    }

    // @Override
    public x(x: number): Text {
        this.xValue = `${x}`;
        return this;
    }

    // @Override
    public y(y: number): Text {
        this.yValue = `${y}`;
        return this;
    }

    // @Override
    public position(x: number, y: number): Text {
        this.x(x);
        this.y(y);
        return this;
    }

    // @Override
    public fill(fillValue: string): Text {
        this.fillValue = fillValue;
        return this;
    }

    // @Override
    public fillOpacity(fillOpacityValue: string): Text {
        this.fillOpacityValue = fillOpacityValue;
        return this;
    };

    // @Override
    public stroke(strokeColor: string): Text {
        this.strokeColor = strokeColor;
        return this;
    }

    // @Override
    public strokeWidth(strokeWidthValue: number): Text {
        this.strokeWidthValue = `${strokeWidthValue}`;
        return this;
    };

    // @Override
    public lineCap(lineCapType: string): Text {
        this.lineCapType = lineCapType;
        return this;
    };

    // @Override
    public dash(dashArray: string): Text {
        this.dashArray = dashArray;
        return this;
    };

    // @Override
    public strokeOpacity(strokeOpacityValue: string): Text {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };

}
