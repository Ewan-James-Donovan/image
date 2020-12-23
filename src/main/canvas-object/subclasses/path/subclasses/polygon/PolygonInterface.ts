import PredefinedPolygonInterface from "./PredefinedPolygonInterface";

export default interface PolygonInterface extends PredefinedPolygonInterface {
    sides(numberOfSides: number): PolygonInterface;
}