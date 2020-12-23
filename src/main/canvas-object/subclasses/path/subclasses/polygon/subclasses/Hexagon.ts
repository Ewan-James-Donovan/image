import Polygon from "../Polygon";
import PredefinedPolygonInterface from "../PredefinedPolygonInterface";

export default class Hexagon extends Polygon implements PredefinedPolygonInterface {

    constructor() {
        super();
        this.sides(6);
    }

}
    
