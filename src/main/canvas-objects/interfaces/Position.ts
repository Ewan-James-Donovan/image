import CanvasObject from "../CanvasObject";

export default interface Position {

    x(x : string | number) : CanvasObject;
    y(x : string | number) : CanvasObject;
    position(x : string | number, y : string | number) : CanvasObject;

}