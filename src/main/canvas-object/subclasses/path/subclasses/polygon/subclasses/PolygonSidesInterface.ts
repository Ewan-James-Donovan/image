import PolygonInterface from "../PolygonInterface";

export default interface PolygonSidesInterface extends PolygonInterface {
    sides(numberOfSides: number): PolygonSidesInterface;
}