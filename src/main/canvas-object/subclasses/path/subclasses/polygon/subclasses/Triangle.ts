import Polygon from "../Polygon";
import PredefinedPolygonInterface from "../PredefinedPolygonInterface";

export default class Triangle extends Polygon implements PredefinedPolygonInterface {

    constructor() {
        super();
        this.sides(3);
    }

}
    
