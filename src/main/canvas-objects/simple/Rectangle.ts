import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import Position from "../interfaces/Position";
import Fill from "../interfaces/Fill";
import Stroke from "../interfaces/Stroke";
import Dimensions from "../interfaces/Dimensions";

export default class Rectangle extends CanvasObject implements Dimensions, Position, Fill, Stroke {

    private widthValue: string;
    private heightValue: string;
    private xValue: string;
    private yValue: string;
    private fillValue: string;
    private fillOpacityValue: string;
    private strokeColor: string;
    private strokeWidthValue: string;
    private lineCapType: string;
    private dashArray: string;
    private strokeOpacityValue: string;

    // @Override
    public prepareForBuild(): void {
        this.addTag(
            new Tag("rect")
                .addAttribute(new Attribute("width", this.widthValue))
                .addAttribute(new Attribute("height", this.heightValue))
                .addAttribute(new Attribute("x", this.xValue))
                .addAttribute(new Attribute("y", this.yValue))
                .addAttribute(new Attribute("fill", this.fillValue))
                .addAttribute(new Attribute("fill-opacity", this.fillOpacityValue))
                .addAttribute(new Attribute("stroke", this.strokeColor))
                .addAttribute(new Attribute("stroke-width", this.strokeWidthValue))
                .addAttribute(new Attribute("stroke-linecap", this.lineCapType))
                .addAttribute(new Attribute("stroke-dasharray", this.dashArray))
                .addAttribute(new Attribute("stroke-opacity", this.strokeOpacityValue))
        );
    }
    
    // @Override
    public width(widthValue: string): Rectangle {
        this.widthValue = widthValue;
        return this;

    };

    // @Override
    public height(heightValue: string): Rectangle {
        this.heightValue = heightValue;
        return this;

    };

    // @Override
    public dimensions(widthValue: string, heightValue: string): Rectangle {
        this.width(widthValue);
        this.height(heightValue);
        return this;
    };

    // @Override
    public x(x: string): Rectangle {
        this.xValue = x;
        return this;
    }

    // @Override
    public y(y: string): Rectangle {
        this.yValue = y;
        return this;
    }

    // @Override
    public position(x: string, y: string): Rectangle {
        this.x(x);
        this.y(y);
        return this;
    }

    // @Override
    public fill(fillValue: string): Rectangle {
        this.fillValue = fillValue;
        return this;
    }

    // @Override
    public fillOpacity(fillOpacityValue: string): Rectangle {
        this.fillOpacityValue = fillOpacityValue;
        return this;
    };

    // @Override
    public stroke(strokeColor: string): Rectangle {
        this.strokeColor = strokeColor;
        return this;
    }

    // @Override
    public strokeWidth(strokeWidthValue: string): Rectangle {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };

    // @Override
    public lineCap(lineCapType: string): Rectangle {
        this.lineCapType = lineCapType;
        return this;
    };

    // @Override
    public dash(dashArray: string): Rectangle {
        this.dashArray = dashArray;
        return this;
    };

    // @Override
    public strokeOpacity(strokeOpacityValue: string): Rectangle {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };

}
