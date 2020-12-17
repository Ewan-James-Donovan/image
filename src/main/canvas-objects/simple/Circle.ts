import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import RadiusDefinable from "../interfaces/RadiusDefinable";
import Positionable from "../interfaces/Positionable";

export default class Circle extends CanvasObject implements RadiusDefinable, Positionable {

    private radiusValue : string;
    private xValue : string;
    private yValue : string;

    // @Override
    public radius(radiusValue : string) : Circle {
        this.radiusValue = radiusValue;
        return this;
    }

    // @Override
    x(x : string) : Circle {
        this.xValue = x;
        return this;
    }

    // @Override
    y(y : string) : Circle {
        this.yValue = y;
        return this;
    }

    // @Override
    position(x : string, y : string) : Circle {
        this.x(x);
        this.y(y);
        return this;
    }

    // @Override
    public prepareForBuild() : void {
        this.addTag(
            new Tag("circle")
            .addAttribute(new Attribute("r", this.radiusValue || "0px"))
            .addAttribute(new Attribute("cx", this.xValue || "0px"))
            .addAttribute(new Attribute("cy", this.yValue || "0px"))
        );
    }

}