export default class Strokable {

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