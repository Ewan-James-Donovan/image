import SimpleCanvasObject from "../SimpleCanvasObject.js";
import Strokable from "../../behaviours/Strokable.js";
import Fillable from "../../behaviours/Fillable.js";

export default class Path extends SimpleCanvasObject {

    constructor(registry) {

        super(registry);
        this.setTagName("path");

        const fillable = new Fillable();
        this.fill = fillable.fill;
        this.fill("none");

        const strokable = new Strokable();
        this.strokeColor = strokable.strokeColor;
        this.strokeWidth = strokable.strokeWidth;
        this.stroke = strokable.stroke;

    }

    points(nestedPointArray) {
        this.nestedPointArray = nestedPointArray;
        this.pointsDefined = true;
        return this;
    }

    type(pathType) {
        if (!this.pointsDefined) {
            throw `define points before path type`;
        }
        this.tag.addAttribute("d", this.pathBuilder(this.nestedPointArray, pathType.toLowerCase()));
        console.log(this.pathBuilder(this.nestedPointArray, pathType.toLowerCase()))
        return this;
    }

    pathBuilder(nestedPointArray, pathType, closedPath) {
        let pathOperator;
        switch (pathType) {
            case "linear":
                pathOperator = "L";
                break;
            case "piecewise-linear":
                return this.discontinuousPathBuilder(nestedPointArray, pathType, closedPath);
            default:
                throw `Image: expection not defined.`;
        }
        let pathString = "";
        let i = 0;
        for (let pointArr of nestedPointArray) {
            if (i == 0) {
                i++;
                pathString += `M ${pointArr[0]} ${pointArr[1]} `;
            } else {
                pathString += `${pathOperator} ${pointArr[0]} ${pointArr[1]} `
            }
        }
        if (closedPath) {
            pathString += "Z";
        }
        return pathString;
    }

    discontinuousPathBuilder(nestedNestedPointArray, pathType, closedPath) {
        switch (pathType) {
            case "piecewise-linear":
                pathType = "linear";
                break;
            default:
                throw `Image: expection not defined.`;
        }
        let pathString = "";
        for (let nestedPointArray of nestedNestedPointArray) {
            pathString += this.pathBuilder(nestedPointArray, "linear");
        }
        if (closedPath) {
            pathString += "Z";
        }
        return pathString;
    }

}