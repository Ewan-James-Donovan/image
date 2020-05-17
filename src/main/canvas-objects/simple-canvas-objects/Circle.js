import SimpleCanvasObject from "../SimpleCanvasObject.js";
import Positionable from "../behaviours/Positionable.js";
import Fillable from "../behaviours/Fillable.js";
import Strokable from "../behaviours/Strokable.js";
import RadiusDefinable from "../behaviours/RadiusDefinable.js";

export default class Circle extends SimpleCanvasObject {

    constructor(registry) {
        super(registry);
        this.setTagName("circle");

        const positionable = new Positionable().useCenterMode();
        this.x = positionable.x;
        this.y = positionable.y;
        this.position = positionable.position;

        const fillable = new Fillable();
        this.fill = fillable.fill;

        const strokable = new Strokable();
        this.strokeColor = strokable.strokeColor;
        this.strokeWidth = strokable.strokeWidth;
        this.stroke = strokable.stroke;

        this.radius = new RadiusDefinable().radius;

    }

}