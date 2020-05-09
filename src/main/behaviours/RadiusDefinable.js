import ErrorHandler from "../error-handling/ErrorHandler.js";

export default class RadiusDefinable {

    radius(radius) {
        this.tag.addAttribute("r", radius);
        return this;
    }

}