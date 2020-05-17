import SimpleCanvasObject from "../SimpleCanvasObject.js";
import Positionable from "../behaviours/Positionable.js";
import Sizeable from "../behaviours/Sizeable.js";
import Fillable from "../behaviours/Fillable.js";
import Strokable from "../behaviours/Strokable.js";

export default class Rectangle extends SimpleCanvasObject {

    constructor(registry) {
        super(registry);
        this.setTagName("rect");

        const positionable = new Positionable();
        this.x = positionable.x;
        this.y = positionable.y;
        this.position = positionable.position;

        const sizable = new Sizeable();
        this.width = sizable.width;
        this.height = sizable.height;
        this.size = sizable.size;

        const fillable = new Fillable();
        this.fill = fillable.fill;

        const strokable = new Strokable();
        this.strokeColor = strokable.strokeColor;
        this.strokeWidth = strokable.strokeWidth;
        this.stroke = strokable.stroke;
    }

}