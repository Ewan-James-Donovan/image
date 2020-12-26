import Fill from "../../common-interfaces/Fill";
import Stroke from "../../common-interfaces/Stroke";

export default interface PathInterface extends
    Fill<PathInterface>,
    Stroke<PathInterface> {

    points(nestedPointArray: Array<Array<number>>): PathInterface

}