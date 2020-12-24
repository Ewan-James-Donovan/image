export default interface Position<T> {

    x(x: number): T;
    y(x: number): T;
    position(x: number, y: number): T;

}