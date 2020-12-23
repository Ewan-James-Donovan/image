import Polygon from "../Polygon";
import PolygonInterface from "../PolygonInterface";

export default class Pentagon extends Polygon implements PolygonInterface {

    constructor() {
        super();
        this.sides(5);
    }

}
    
