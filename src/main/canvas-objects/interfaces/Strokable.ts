import CanvasObject from "../CanvasObject";

export default interface Strokable {

    stroke(strokeColor: string): CanvasObject;
    strokeWidth(strokeWidthValue: string): CanvasObject;
    lineCap(lineCapType: string): CanvasObject;
    dash(dashArray: string): CanvasObject;
    strokeOpacity(strokeOpacityValue: string): CanvasObject;

}