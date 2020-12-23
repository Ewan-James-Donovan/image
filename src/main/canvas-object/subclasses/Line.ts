import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import Stroke from "../common-interfaces/Stroke";

export default class Line extends CanvasObject implements Stroke<Line> {

    private x1Value: string;
    private x2Value: string;
    private y1Value: string;
    private y2Value: string;
    private strokeColor: string;
    private strokeWidthValue: string;
    private lineCapType: string;
    private dashArray: string;
    private strokeOpacityValue: string;

    // @Override
    public prepareForBuild(): void {
        this.addTag(
            new Tag("line")
                .addAttribute(new Attribute("x1", this.x1Value))
                .addAttribute(new Attribute("x2", this.x2Value))
                .addAttribute(new Attribute("y1", this.y1Value))
                .addAttribute(new Attribute("y2", this.y2Value))
                .addAttribute(new Attribute("stroke", this.strokeColor))
                .addAttribute(new Attribute("stroke-width", this.strokeWidthValue))
                .addAttribute(new Attribute("stroke-linecap", this.lineCapType))
                .addAttribute(new Attribute("stroke-dasharray", this.dashArray))
                .addAttribute(new Attribute("stroke-opacity", this.strokeOpacityValue))
        );
    }

    public x1(x1Value: string): Line {
        this.x1Value = x1Value;
        return this;
    }

    public x2(x2Value: string): Line {
        this.x2Value = x2Value;
        return this;
    }

    public y1(y1Value: string): Line {
        this.y1Value = y1Value;
        return this;
    }

    public y2(y2Value: string): Line {
        this.y2Value = y2Value;
        return this;
    }

    public point1(x1Value: string, y1Value: string): Line {
        this.x1(x1Value);
        this.y1(y1Value);
        return this;
    }

    public point2(x2Value: string, y2Value: string): Line {
        this.x2(x2Value);
        this.y2(y2Value);
        return this;
    }

    public points(x1Value: string, y1Value: string, x2Value: string, y2Value: string): Line {
        this.point1(x1Value, y1Value);
        this.point2(x2Value, y2Value);
        return this;
    }

    // @Override
    public stroke(strokeColor: string): Line {
        this.strokeColor = strokeColor;
        return this;
    }

    // @Override
    public strokeWidth(strokeWidthValue: string): Line {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };

    // @Override
    public lineCap(lineCapType: string): Line {
        this.lineCapType = lineCapType;
        return this;
    };

    // @Override
    public dash(dashArray: string): Line {
        this.dashArray = dashArray;
        return this;
    };

    // @Override
    public strokeOpacity(strokeOpacityValue: string): Line {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };

}
