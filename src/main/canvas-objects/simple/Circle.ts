import Tag from "../../dom/Tag";
import Attribute from "../../dom/Attribute";
import CanvasObject from "../CanvasObject";
import RadiusDefinable from "../interfaces/RadiusDefinable";
import Positionable from "../interfaces/Positionable";
import Fillable from "../interfaces/Fillable";

export default class Circle extends CanvasObject implements RadiusDefinable, Positionable, Fillable {

    private radiusValue : string;
    private xValue : string;
    private yValue : string;
    private fillValue : string;

    // @Override
    public radius(radiusValue : string) : Circle {
        this.radiusValue = radiusValue;
        return this;
    }

    // @Override
    public x(x : string) : Circle {
        this.xValue = x;
        return this;
    }

    // @Override
    public y(y : string) : Circle {
        this.yValue = y;
        return this;
    }

    // @Override
    public position(x : string, y : string) : Circle {
        this.x(x);
        this.y(y);
        return this;
    }


    // @Override
    public fill(fillValue : string) : Circle {
        this.fillValue = fillValue;
        return this;
    }


    // @Override
    public prepareForBuild() : void {
        this.addTag(
            new Tag("circle")
            .addAttribute(new Attribute("r", this.radiusValue || "0px"))
            .addAttribute(new Attribute("cx", this.xValue || "0px"))
            .addAttribute(new Attribute("cy", this.yValue || "0px"))
            .addAttribute(new Attribute("fill", this.fillValue))
        );
    }

}