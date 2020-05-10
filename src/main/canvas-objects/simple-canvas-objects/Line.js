import SimpleCanvasObject from "../SimpleCanvasObject.js";
import Positionable from "../../behaviours/Positionable.js";
import Strokable from "../../behaviours/Strokable.js";

export default class Line extends SimpleCanvasObject {

    constructor(registry) {

        super(registry);
        this.setTagName("line");

        const positionable = new Positionable().useLineMode();
        this.x = positionable.x;
        this.y = positionable.y;
        this.x2 = positionable.x2;
        this.y2 = positionable.y2;
        this.position = positionable.position;

        const strokable = new Strokable();
        this.strokeColor = strokable.strokeColor;
        this.strokeWidth = strokable.strokeWidth;
        this.stroke = strokable.stroke;

    }

}