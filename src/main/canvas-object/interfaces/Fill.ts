export default interface Fill<T> {

    fill(cssColour: string): T;
    fillOpacity(fillOpacityValue: string): T;
}