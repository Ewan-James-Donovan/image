import Polygon from "../Polygon";
import PredefinedPolygonInterface from "../PredefinedPolygonInterface";

export default class Pentagon extends Polygon implements PredefinedPolygonInterface {

    constructor() {
        super();
        this.sides(5);
    }

}
    
