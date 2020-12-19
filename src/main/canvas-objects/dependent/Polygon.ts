import Attribute from "../../dom/Attribute";
import Tag from "../../dom/Tag";
import Path from "../independent/Path";
import Radius from "../interfaces/Radius";

export default class Polygon extends Path implements Radius {

    private numberOfSides: number;
    private radiusValue: string;
    private nestedPointArray: Array<Array<number>>;

    constructor() {
        super();
        this.points = undefined;
    }

    // @Override
    public prepareForBuild(): void {
        // super.points() ???
        let pathString: string = "M ";
        let firstElement: boolean = true;
        for (const pointArray of this.nestedPointArray) {
            if (firstElement) {
                pathString += + pointArray[0].toString() + " " + pointArray[1].toString();
                firstElement = false;
            }
            pathString += "L " + pointArray[0].toString() + " " + pointArray[1].toString();
        }
        this.addTag(
            new Tag("path")
                .addAttribute(new Attribute("d", pathString))
                .addAttribute(new Attribute("stroke", this.strokeColor))
                .addAttribute(new Attribute("stroke-width", this.strokeWidthValue))
                .addAttribute(new Attribute("stroke-linecap", this.lineCapType))
                .addAttribute(new Attribute("stroke-dasharray", this.dashArray))
                .addAttribute(new Attribute("stroke-opacity", this.strokeOpacityValue))
                .addAttribute(new Attribute("fill", this.fillValue))
                .addAttribute(new Attribute("fill-opacity", this.fillOpacityValue))
        );
    }

    // @Override
    public sides(numberOfSides: number): Polygon {
        this.numberOfSides = Math.round(numberOfSides);
        return this;
    }

    // @Override
    public radius(radiusValue: string): Polygon {
        this.radiusValue = radiusValue;
        return this;
    }

}
    
