import CanvasObject from "../CanvasObject";

export default interface Dimensions {

    width(widthValue: string): CanvasObject;
    height(heightValue: string): CanvasObject;
    dimensions(widthValue: string, heightValue: string): CanvasObject;

}