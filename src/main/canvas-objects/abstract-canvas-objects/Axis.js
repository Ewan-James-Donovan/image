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
        // this.yPosition = 50;
        this.path = new Path(this.registry);

    }

    orientation(setting) {
        const positionable = new Positionable().useInstanceVariableMode();
        if (setting == "horizontal") {
            this.position = positionable.y;
            // this.lineArr = [[[this.startValue, this.yPosition], [this.endValue, this.yPosition]]];
        }
        if (setting == "vertical") {
            this.position = positionable.x;
            // this.lineArr = [[[this.xPosition, this.startValue], [this.xPosition, this.endValue]]];
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
        let position;
        let tickMarkArr = [];
        if (this.yPosition >= 0 || this.yPosition < 0) {
            position = this.yPosition;
            this.lineArr = [[[this.startValue, this.yPosition], [this.endValue, this.yPosition]]];
        }
        if (this.xPosition >= 0 || this.xPosition < 0) {
            position = this.xPosition;
            this.lineArr = [[[this.xPosition, this.startValue], [this.xPosition, this.endValue]]];
        }
        this.majorTickMarkVal = majorTickMarkVal;
        this.majorTickPixelIncrement = (this.endValue - this.startValue) / (this.upperRange - this.lowerRange) * majorTickMarkVal;
        let i = 0;
        while (i <= this.endValue - this.startValue) {
            console.log("hello")
            if (this.yPosition >= 0 || this.yPosition < 0) {
                this.lineArr.push([[i + this.startValue, position - 4], [i + this.startValue, position + 4]]);
            }
            if (this.xPosition >= 0 || this.xPosition < 0) {
                this.lineArr.push([[position - 4, i + this.startValue], [position + 4, i + this.startValue]]);
            }
            i += this.majorTickPixelIncrement;
        }
        console.log(this.lineArr)

        return this;
    }

    minorTickMark(minorTickMarkVal) {
        let position;
        if (this.yPosition >= 0 || this.yPosition < 0) {
            position = this.yPosition;
        }
        if (this.xPosition >= 0 || this.xPosition < 0) {
            position = this.xPosition;
        }
        this.minorTickMarkVal = minorTickMarkVal;
        this.minorTickPixelIncrement = (this.endValue - this.startValue) / (this.upperRange - this.lowerRange) * minorTickMarkVal;
        let i = 0;
        while (i <= this.endValue - this.startValue) {
            console.log("hello")
            if (this.yPosition >= 0 || this.yPosition < 0) {
                this.lineArr.push([[i + this.startValue, position - 2.5], [i + this.startValue, position + 2.5]]);
            }
            if (this.xPosition >= 0 || this.xPosition < 0) {
                this.lineArr.push([[position - 2.5, i + this.startValue], [position + 2.5, i + this.startValue]]);
            }
            i += this.minorTickPixelIncrement;
        }
        console.log(this.lineArr)
        this.path.points(this.lineArr).type("piecewise-linear").stroke(this.cssStrokeColor, this.strokeWidthValue);
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