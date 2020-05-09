import SimpleCanvasObject from "../SimpleCanvasObject.js";
import Positionable from "../../behaviours/Positionable.js";
import Sizeable from "../../behaviours/Sizeable.js";
import Fillable from "../../behaviours/Fillable.js";
import Strokable from "../../behaviours/Strokable.js";

export default class Rectangle extends SimpleCanvasObject {

    constructor(registry) {
        super(registry);
        this.setTagName("rect");

        this.positionable = new Positionable();
        this.x = this.positionable.x;
        this.y = this.positionable.y;
        this.position = this.positionable.position;

        this.sizable = new Sizeable();
        this.width = this.sizable.width;
        this.height = this.sizable.height;
        this.size = this.sizable.size;

        this.fillable = new Fillable();
        this.fill = this.fillable.fill;

        this.strokable = new Strokable();
        this.strokeColor = this.strokable.strokeColor;
        this.strokeWidth = this.strokable.strokeWidth;
        this.stroke = this.strokable.stroke;
    }

}