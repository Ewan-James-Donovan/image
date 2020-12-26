import Polygon from "../Polygon";
import PredefinedPolygonInterface from "../PredefinedPolygonInterface";

export default class Octagon extends Polygon implements PredefinedPolygonInterface {

    constructor() {
        super();
        this.sides(8);
    }

}
    
