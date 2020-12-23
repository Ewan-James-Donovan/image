import Fill from "../../../../common-interfaces/Fill";
import Position from "../../../../common-interfaces/Position";
import Radius from "../../../../common-interfaces/Radius";
import Rotate from "../../../../common-interfaces/Rotate";
import Stroke from "../../../../common-interfaces/Stroke";

export default interface PolygonInterface extends
    Fill<PolygonInterface>,
    Position<PolygonInterface>,
    Stroke<PolygonInterface>,
    Radius<PolygonInterface>,
    Rotate<PolygonInterface> {
}