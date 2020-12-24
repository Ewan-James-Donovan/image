import Fill from "../../common-interfaces/Fill";
import Position from "../../common-interfaces/Position";
import Stroke from "../../common-interfaces/Stroke";

export default interface PathInterface extends
    Fill<PathInterface>,
    Position<PathInterface>,
    Stroke<PathInterface> {

    points(nestedPointArray: Array<Array<number>>): PathInterface

}