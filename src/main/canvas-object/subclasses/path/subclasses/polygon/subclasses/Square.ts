import Polygon from "../Polygon";
import PredefinedPolygonInterface from "../PredefinedPolygonInterface";

export default class Square extends Polygon implements PredefinedPolygonInterface {

    constructor() {
        super();
        this.sides(4);
    }

}
    
