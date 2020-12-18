import CanvasObject from "../CanvasObject";

export default interface Position {

    x(x : string) : CanvasObject;
    y(x : string) : CanvasObject;
    position(x : string, y : string) : CanvasObject;

}