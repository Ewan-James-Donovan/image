import CanvasObject from "../CanvasObject";

export default interface Fill {

    fill(cssColour: string): CanvasObject;
    fillOpacity(fillOpacityValue: string): CanvasObject;
}