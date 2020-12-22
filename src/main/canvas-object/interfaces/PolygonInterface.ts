import Fill from "./Fill";
import Position from "./Position";
import Radius from "./Radius";
import Rotate from "./Rotate";
import Stroke from "./Stroke";

export default interface PolygonInterface extends
    Fill<PolygonInterface>,
    Position<PolygonInterface>,
    Stroke<PolygonInterface>,
    Radius<PolygonInterface>,
    Rotate<PolygonInterface> {
    prepareForBuild(): void;
}