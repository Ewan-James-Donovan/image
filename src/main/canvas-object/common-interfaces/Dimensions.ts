export default interface Dimensions<T> {

    width(widthValue: string): T;
    height(heightValue: string): T;
    dimensions(widthValue: string, heightValue: string): T;

}