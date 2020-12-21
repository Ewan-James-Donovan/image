import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import Radius from "../interfaces/Radius";
import Position from "../interfaces/Position";
import Fill from "../interfaces/Fill";
import Stroke from "../interfaces/Stroke";

export default class Circle extends CanvasObject implements Radius<Circle>, Position<Circle>, Fill<Circle>, Stroke<Circle> {

    private radiusValue: string;
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
            new Tag("circle")
                .addAttribute(new Attribute("r", this.radiusValue))
                .addAttribute(new Attribute("cx", this.xValue))
                .addAttribute(new Attribute("cy", this.yValue))
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
    public radius(radiusValue: string): Circle {
        this.radiusValue = radiusValue;
        return this;
    }

    // @Override
    public x(x: string): Circle {
        this.xValue = x;
        return this;
    }

    // @Override
    public y(y: string): Circle {
        this.yValue = y;
        return this;
    }

    // @Override
    public position(x: string, y: string): Circle {
        this.x(x);
        this.y(y);
        return this;
    }

    // @Override
    public fill(fillValue: string): Circle {
        this.fillValue = fillValue;
        return this;
    }

    // @Override
    public fillOpacity(fillOpacityValue: string): Circle {
        this.fillOpacityValue = fillOpacityValue;
        return this;
    };

    // @Override
    public stroke(strokeColor: string): Circle {
        this.strokeColor = strokeColor;
        return this;
    }

    // @Override
    public strokeWidth(strokeWidthValue: string): Circle {
        this.strokeWidthValue = strokeWidthValue;
        return this;
    };

    // @Override
    public lineCap(lineCapType: string): Circle {
        this.lineCapType = lineCapType;
        return this;
    };

    // @Override
    public dash(dashArray: string): Circle {
        this.dashArray = dashArray;
        return this;
    };

    // @Override
    public strokeOpacity(strokeOpacityValue: string): Circle {
        this.strokeOpacityValue = strokeOpacityValue;
        return this;
    };

}
