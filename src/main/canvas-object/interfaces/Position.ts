export default interface Position<T> {

    x(x: string | number): T;
    y(x: string | number): T;
    position(x: string | number, y: string | number): T;

}