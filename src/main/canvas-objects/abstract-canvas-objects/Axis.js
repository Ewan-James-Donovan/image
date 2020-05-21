import AbstractCanvasObject from "../AbstractCanvasObject.js";
import Strokable from "../behaviours/Strokable.js";
import Positionable from "../behaviours/Positionable.js";
import Path from "../simple-canvas-objects/Path.js";
import Point2D from "../../drawing/math-constructs/Point.js";

export default class Axis extends AbstractCanvasObject {

    constructor(registry, constructionRegistry) {

        super(registry, constructionRegistry);

        const strokable = new Strokable().useInstanceVariableMode();
        this.strokeColor = strokable.strokeColor;
        this.strokeWidth = strokable.strokeWidth;
        this.stroke = strokable.stroke;
        this.path = new Path(this.registry);
        this.constructionRegistry.addConstructionObject(this);

    }

    getValuePosition(axisValue) {

        axisValue -= this.lowerRange;

        const xOrY = (this.endValue - this.startValue) /
            (this.upperRange - this.lowerRange) *
            axisValue +
            this.startValue;

        if (this.orientationVal == "horizontal") {
            return new Point2D(xOrY, this.positionVal);
        }

        return new Point2D(this.positionVal, xOrY);

    }

    position(value) {
        this.positionVal = value;
        return this;
    }

    orientation(setting) {
        this.orientationVal = setting;
        return this;
    }

    range(lowerRange, upperRange) {
        this.lowerRange = lowerRange;
        this.upperRange = upperRange;
        this.rangeCalled = true;
        return this;
    }

    tickMarkSize(sizePx) {
        this.tickMarkSizeVal = sizePx;
        this.minorTickSize = this.tickMarkSizeVal * 0.618;
        return this;
    }

    gridMode() {
        this.tickMarkSizeVal = (this.endValue - this.startValue) / 2;
        this.minorTickSize = this.tickMarkSizeVal;
        return this;
    }

    majorTickMark(majorTickMarkVal) {
        this.majorTickMarkVal = majorTickMarkVal;
        return this;
    }

    minorTickMark(minorTickMarkVal) {
        this.minorTickMarkVal = minorTickMarkVal;
        return this;
    }

    start(startValue) {
        this.startValue = startValue;
        return this;
    }

    end(endValue) {
        this.endValue = endValue
        return this;
    }

    draw() {

        function majorTickMarkVal(majorTickMarkVal, dis) {
            let position;
            if (dis.yPosition >= 0 || dis.yPosition < 0) {
                position = dis.yPosition;
                dis.lineArr = [[[dis.startValue, dis.yPosition], [dis.endValue, dis.yPosition]]];
            }
            if (dis.xPosition >= 0 || dis.xPosition < 0) {
                position = dis.xPosition;
                dis.lineArr = [[[dis.xPosition, dis.startValue], [dis.xPosition, dis.endValue]]];
            }
            dis.majorTickMarkVal = majorTickMarkVal;
            dis.majorTickPixelIncrement = (dis.endValue - dis.startValue) / (dis.upperRange - dis.lowerRange) * majorTickMarkVal;
            let i = 0;
            while (i <= dis.endValue - dis.startValue) {
                if (dis.yPosition >= 0 || dis.yPosition < 0) {
                    dis.lineArr.push([[i + dis.startValue, position - dis.tickMarkSizeVal], [i + dis.startValue, position + dis.tickMarkSizeVal]]);
                }
                if (dis.xPosition >= 0 || dis.xPosition < 0) {
                    dis.lineArr.push([[position - dis.tickMarkSizeVal, i + dis.startValue], [position + dis.tickMarkSizeVal, i + dis.startValue]]);
                }
                i += dis.majorTickPixelIncrement;
            }
        }

        function minorTickMark(minorTickMarkVal, dis) {
            if (dis.majorTickMarkVal % minorTickMarkVal != 0) {
                throw "minor tick mark must be a factor of major tick mark";
            }
            let position;
            if (dis.yPosition >= 0 || dis.yPosition < 0) {
                position = dis.yPosition;
            }
            if (dis.xPosition >= 0 || dis.xPosition < 0) {
                position = dis.xPosition;
            }
            dis.minorTickMarkVal = minorTickMarkVal;
            dis.minorTickPixelIncrement = (dis.endValue - dis.startValue) / (dis.upperRange - dis.lowerRange) * minorTickMarkVal;
            let i = 0;
            while (i <= dis.endValue - dis.startValue) {
                if (dis.yPosition >= 0 || dis.yPosition < 0) {
                    dis.lineArr.push([[i + dis.startValue, position - dis.minorTickSize], [i + dis.startValue, position + dis.minorTickSize]]);
                }
                if (dis.xPosition >= 0 || dis.xPosition < 0) {
                    dis.lineArr.push([[position - dis.minorTickSize, i + dis.startValue], [position + dis.minorTickSize, i + dis.startValue]]);
                }
                i += dis.minorTickPixelIncrement;
            }
        }

        const positionable = new Positionable().useInstanceVariableMode();
        if (this.orientationVal == "horizontal") {
            this.positionSetter = positionable.y;
            // this.lineArr = [[[this.startValue, this.yPosition], [this.endValue, this.yPosition]]];
        }
        if (this.orientationVal == "vertical") {
            this.positionSetter = positionable.x;
            // this.lineArr = [[[this.xPosition, this.startValue], [this.xPosition, this.endValue]]];
        }

        this.positionSetter(this.positionVal);

        if (this.majorTickMarkVal && !this.minorTickMarkVal) {
            majorTickMarkVal(this.minorTickMarkVal, this);
        } else if (this.majorTickMarkVal && this.minorTickMarkVal) {
            majorTickMarkVal(this.majorTickMarkVal, this);
            minorTickMark(this.minorTickMarkVal, this);
        }
        this.path.points(this.lineArr).type("piecewise-linear").stroke(this.cssStrokeColor, this.strokeWidthValue);
    }


}