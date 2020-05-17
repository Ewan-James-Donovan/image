export default class Strokable {

    useInstanceVariableMode() {
        this.strokeColor = function (cssStrokeColor) {
            this.cssStrokeColor = cssStrokeColor;
            return this;
        };
        this.strokeWidth = function (strokeWidth) {
            this.strokeWidth = strokeWidth;
            return this;
        };
        this.stroke = function (cssStrokeColor, strokeWidthValue) {
            this.cssStrokeColor = cssStrokeColor;
            this.strokeWidthValue = strokeWidthValue;
            return this;
        };
        return this;
    }

    strokeColor(cssStrokeColor) {
        this.tag.addAttribute("stroke", cssStrokeColor);
        return this;
    }
    strokeWidth(strokeWidth) {
        this.tag.addAttribute("stroke-width", strokeWidth);
        return this;
    }
    stroke(cssStrokeColor, strokeWidth) {
        this.strokeColor(cssStrokeColor);
        this.strokeWidth(strokeWidth);
        return this;
    }

}