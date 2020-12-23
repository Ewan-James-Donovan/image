import Polygon from "../Polygon";
import PolygonInterface from "../PolygonInterface";

export default class Octagon extends Polygon implements PolygonInterface {

    constructor() {
        super();
        this.sides(8);
    }

}
    
