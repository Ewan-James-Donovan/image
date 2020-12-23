import Fill from "../../../../common-interfaces/Fill";
import Position from "../../../../common-interfaces/Position";
import Radius from "../../../../common-interfaces/Radius";
import Rotate from "../../../../common-interfaces/Rotate";
import Stroke from "../../../../common-interfaces/Stroke";

export default interface PredefinedPolygonInterface extends
    Fill<PredefinedPolygonInterface>,
    Position<PredefinedPolygonInterface>,
    Stroke<PredefinedPolygonInterface>,
    Radius<PredefinedPolygonInterface>,
    Rotate<PredefinedPolygonInterface> {
}