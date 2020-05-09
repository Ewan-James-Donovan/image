import SimpleCanvasObject from "../SimpleCanvasObject.js";
import Positionable from "../../behaviours/Positionable.js";
import Fillable from "../../behaviours/Fillable.js";
import Strokable from "../../behaviours/Strokable.js";
import RadiusDefinable from "../../behaviours/RadiusDefinable.js";

export default class Circle extends SimpleCanvasObject {

    constructor(registry) {
        super(registry);
        this.setTagName("circle");

        this.positionable = new Positionable().useCenterMode();
        this.x = this.positionable.x;
        this.y = this.positionable.y;
        this.position = this.positionable.position;

        this.fillable = new Fillable();
        this.fill = this.fillable.fill;

        this.strokable = new Strokable();
        this.strokeColor = this.strokable.strokeColor;
        this.strokeWidth = this.strokable.strokeWidth;
        this.stroke = this.strokable.stroke;

        this.radius = new RadiusDefinable().radius;

    }

}