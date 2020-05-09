import ErrorHandler from "../error-handling/ErrorHandler";

export default function (fillColor) {
    ErrorHandler.checkType(fillColor, "string");
    this.tag.addAttribute("fill", fillColor);
}