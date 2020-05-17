import ErrorHandler from "../error-handling/ErrorHandler.js";

export default class Canvas {

    constructor(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor) {
        ErrorHandler.checkType("canvasParentCSSId", canvasParentCSSId, "string");
        ErrorHandler.checkType("canvasWidth", canvasWidth, "string");
        ErrorHandler.checkType("canvasHeight", canvasHeight, "string");
        ErrorHandler.checkType("canvasBackgroundColor", canvasBackgroundColor, "string");
        this.canvasParentCSSId = canvasParentCSSId;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasBackgroundColor = canvasBackgroundColor;
    }

}