import AbstractCanvasObject from "../AbstractCanvasObject.js";
import Strokable from "../../behaviours/Strokable.js";
import Fillable from "../../behaviours/Fillable.js";
import Positionable from "../../behaviours/Positionable.js";
import RadiusDefinable from "../../behaviours/RadiusDefinable.js";
import Path from "../simple-canvas-objects/Path.js";
import MathTools from "../../utils/MathTools.js";

export default class Arc extends AbstractCanvasObject {

    constructor(registry) {

        super(registry);

        const positionable = new Positionable().useInstanceVariableMode();
        this.x = positionable.x;
        this.y = positionable.y;
        this.position = positionable.position;

        const fillable = new Fillable().useInstanceVariableMode();
        this.fill = fillable.fill;
        this.fill("none");

        const strokable = new Strokable().useInstanceVariableMode();
        this.strokeColor = strokable.strokeColor;
        this.strokeWidth = strokable.strokeWidth;
        this.stroke = strokable.stroke;

        const radiusDefinable = new RadiusDefinable().useInstanceVariableMode();
        this.radius = radiusDefinable.radius;
        this.sampleValue = 100;
        this.path = new Path(this.registry);

    }

    samples(sampleValue) {
        this.sampleValue = sampleValue;
        return this;
    }

    startAngle(startAngleValue) {
        if (!this.radiusValue && this.radiusValue != 0) {
            throw `define radius`;
        }
        this.startAngleValue = startAngleValue % (2 * Math.PI);
        this.startAngleCalled = true;
        return this;
    }

    endAngle(endAngle) {
        endAngle %= 2 * Math.PI + 0.000000000000001;
        if (!this.startAngleCalled) {
            throw `call start angle first`;
        }
        let points = [];
        if (endAngle < this.startAngleValue) {
            for (let i = endAngle; i <= this.startAngleValue; i += (this.startAngleValue - endAngle) / this.sampleValue) {
                points.push(MathTools.cis(this.radiusValue, i, this.xPosition, this.yPosition));
            }
        } else { 
            for (let i = this.startAngleValue; i <= endAngle; i += (endAngle - this.startAngleValue) / this.sampleValue) {
                points.push(MathTools.cis(this.radiusValue, i, this.xPosition, this.yPosition));
            }
        }
        this.path
            .points(points).type("linear")
            .stroke(this.cssStrokeColor, this.strokeWidthValue);
        return this;
    }


}