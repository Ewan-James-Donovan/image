import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import Position from "../common-interfaces/Position";
import Fill from "../common-interfaces/Fill";
import Stroke from "../common-interfaces/Stroke";

export default class Rectangle extends CanvasObject implements Position<Rectangle>, Fill<Rectangle>, Stroke<Rectangle> {

    private cornerRadius: string;
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
                .addAttribute(new Attribute("rx", this.cornerRadius))
                .addAttribute(new Attribute("ry", this.cornerRadius))
        );
    }

    public roundCorners(cornerRadius: number): Rectangle {
        this.cornerRadius = `${cornerRadius}`;
        return this;
    }

    public width(widthValue: number): Rectangle {
        this.widthValue = `${widthValue}`;
        return this;

    };

    public height(heightValue: number): Rectangle {
        this.heightValue = `${heightValue}`;
        return this;

    };

    public dimensions(widthValue: number, heightValue: number): Rectangle {
        this.width(widthValue);
        this.height(heightValue);
        return this;
    };

    // @Override
    public x(x: number): Rectangle {
        this.xValue = `${x}`;
        return this;
    }

    // @Override
    public y(y: number): Rectangle {
        this.yValue = `${y}`;
        return this;
    }

    // @Override
    public position(x: number, y: number): Rectangle {
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
    public strokeWidth(strokeWidthValue: number): Rectangle {
        this.strokeWidthValue = `${strokeWidthValue}`;
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
