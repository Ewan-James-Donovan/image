import PolygonInterface from "../PolygonInterface";

export default interface PolygonSuperInterface extends PolygonInterface {
    sides(numberOfSides: number): PolygonSuperInterface;
}