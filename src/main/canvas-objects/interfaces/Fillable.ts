import CanvasObject from "../CanvasObject";

export default interface Fillable {

    fill(cssColour : string) : CanvasObject;

}