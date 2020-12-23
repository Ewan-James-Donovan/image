export default interface Stroke<T> {

    stroke(strokeColor: string): T;
    strokeWidth(strokeWidthValue: string): T;
    lineCap(lineCapType: string): T;
    dash(dashArray: string): T;
    strokeOpacity(strokeOpacityValue: string): T;

}