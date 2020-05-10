import ErrorHandler from "../error-handling/ErrorHandler.js";

export default class Fillable {

    useInstanceVariableMode() {
        this.fill = function (cssFillColor) {
            this.cssFillColor = cssFillColor;
            return this;
        };
        return this;
    }

    fill(cssFillColor) {
        this.tag.addAttribute("fill", cssFillColor);
        return this;
    }

}