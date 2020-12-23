import Polygon from "../Polygon";
import PolygonInterface from "../PolygonInterface";

export default class Triangle extends Polygon implements PolygonInterface {

    constructor() {
        super();
        this.sides(3);
    }

}
    
