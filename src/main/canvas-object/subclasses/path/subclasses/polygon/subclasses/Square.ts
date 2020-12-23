import Polygon from "../Polygon";
import PolygonInterface from "../PolygonInterface";

export default class Square extends Polygon implements PolygonInterface {

    constructor() {
        super();
        this.sides(4);
    }

}
    
