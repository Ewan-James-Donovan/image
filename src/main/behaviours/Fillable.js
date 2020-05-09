import ErrorHandler from "../error-handling/ErrorHandler.js";

export default class Fillable {

    fill(cssFillColor) {
        this.tag.addAttribute("fill", cssFillColor);
        return this;
    }

}