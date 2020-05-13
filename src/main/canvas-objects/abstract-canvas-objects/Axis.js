import AbstractCanvasObject from "../AbstractCanvasObject.js";
import Strokable from "../../behaviours/Strokable.js";
import Positionable from "../../behaviours/Positionable.js";
import Path from "../simple-canvas-objects/Path.js";

export default class Axis extends AbstractCanvasObject {

    constructor(registry) {

        super(registry);

        const strokable = new Strokable().useInstanceVariableMode();
        this.strokeColor = strokable.strokeColor;
        this.strokeWidth = strokable.strokeWidth;
        this.stroke = strokable.stroke;
        this.yPosition = 50;
        this.path = new Path(this.registry);

    }

    orientation(setting) {
        const positionable = new Positionable().useInstanceVariableMode();
        if (setting == "horizontal") {
            this.y = positionable.y;
            this.lineArr = [[[this.startValue, this.yPosition], [this.endValue, this.yPosition]]];
        }
        if (setting == "vertical") {
            this.x = positionable.x;
            this.lineArr = [[[this.xPosition, this.startValue], [this.xPosition, endValue]]];
        }
        this.orientationVal = setting;
        return this;
    }

    range(lowerRange, upperRange) {
        this.lowerRange = lowerRange;
        this.upperRange = upperRange;
        this.rangeCalled = true;
        return this;
    }

    majorTickMark(majorTickMarkVal) {
        this.majorTickMarkVal = majorTickMarkVal;
        this.majorTickPixelIncrement = (this.startValue - this.endValue) / (this.upperRange - this.lowerRange) * majorTickMarkVal;
        let i = 0;
        while (i <= this.startValue - this.endValue) {
            console.log("hello")
            this.lineArr.push([[i + this.endValue, this.yPosition - 2.5], [i + this.endValue, this.yPosition + 2.5]]); /// SHOULD BE START VALUE???
            i += this.majorTickPixelIncrement;
        }
        console.log(this.lineArr)
        this.path.points(this.lineArr).type("piecewise-linear").stroke("black", 2);
        return this;
    }

    minorTickMark(minorTickMarkVal) {
        this.minorTickMarkVal = minorTickMarkVal;
        this.minorTickPixelIncrement = (this.startValue - this.endValue) / (this.upperRange - this.lowerRange) * minorTickMarkVal;
        return this;
    }

    start(startValue) {
        // if (!this.yPosition && this.yPosition != 0) {
        //     throw ``;
        // }
        // if (!this.rangeCalled) {
        //     throw `call start angle first`;
        // }
        this.startValue = startValue;
        this.startCalled = true;
        return this;
    }

    end(endValue) {
        this.endValue = endValue
        // if (!this.startCalled) {
        //     throw ``;
        // }
        // if (this.orientationVal == "horizontal") {

        // }
        // if (this.orientationVal == "vertical") {

        // }
        return this;
    }


}