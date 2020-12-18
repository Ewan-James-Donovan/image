import Circle from "./canvas-objects/simple/Circle";
import Line from "./canvas-objects/simple/Line";
import Rectangle from "./canvas-objects/simple/Rectangle";

export default interface DrawingInterface {

    circle(): Circle;
    rectangle(): Rectangle;
    line(): Line;

}