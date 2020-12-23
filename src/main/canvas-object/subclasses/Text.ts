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

    public string(textValue: string) {
        this.textValue = textValue;
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
                .setContent(this.textValue)
        );
    }

    // @Override
    public x(x: string): Text {
        this.xValue = x;
        return this;
    }

    // @Override
    public y(y: string): Text {
        this.yValue = y;
        return this;
    }

    // @Override
    public position(x: string, y: string): Text {
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
    public strokeWidth(strokeWidthValue: string): Text {
        this.strokeWidthValue = strokeWidthValue;
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
