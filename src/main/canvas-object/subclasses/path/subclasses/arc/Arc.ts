import Attribute from "../../../../../dom/Attribute";
import Tag from "../../../../../dom/Tag";
import Path from "../../Path";
import ArcInterface from "./ArcInterface";

export default class Arc extends Path<Arc> implements ArcInterface {

    private sampleCountValue: number = 50;
    private fromAngle: number;
    private toAngle: number;
    private radiusValue: number;
    private xValue: number;
    private yValue: number;
    private nestedPointArray: Array<Array<number>>;

    // @Override
    public prepareForBuild(): void {
        this.calculatePoints();
        let pathString: string;
        if (this.nestedPointArray[0][0]) {
            pathString = "M ";
            let firstElement: boolean = true;
            for (const pointArray of this.nestedPointArray) {
                if (firstElement) {
                    pathString += + pointArray[0].toString() + " " + pointArray[1].toString();
                    firstElement = false;
                }
                pathString += " L " + pointArray[0].toString() + " " + pointArray[1].toString();
            }
        }
        this.addTag(
            new Tag("path")
                .addAttribute(new Attribute("d", pathString === "M " ? null : pathString))
                .addAttribute(new Attribute("stroke", this.strokeColor))
                .addAttribute(new Attribute("stroke-width", this.strokeWidthValue))
                .addAttribute(new Attribute("stroke-linecap", this.lineCapType))
                .addAttribute(new Attribute("stroke-dasharray", this.dashArray))
                .addAttribute(new Attribute("stroke-opacity", this.strokeOpacityValue))
                .addAttribute(new Attribute("fill", this.fillValue))
                .addAttribute(new Attribute("fill-opacity", this.fillOpacityValue))
        );
    }

    private calculatePoints(): void {
        this.nestedPointArray = new Array<Array<number>>();
        for (let i: number = 0; i <= this.sampleCountValue; i++) {
            this.nestedPointArray.push([
                this.radiusValue * Math.cos((i * (this.toAngle - this.fromAngle)) / this.sampleCountValue + this.fromAngle) + this.xValue,
                this.radiusValue * Math.sin((i * (this.toAngle - this.fromAngle)) / this.sampleCountValue + this.fromAngle) + this.yValue
            ]);
        }
    }

    public samples(samples: number): ArcInterface {
        this.sampleCountValue = Math.round(samples);
        return this;
    }

    public from(angle: number): ArcInterface {
        this.fromAngle = angle;
        return this;
    }

    public to(angle: number): ArcInterface {
        this.toAngle = angle;
        return this;
    }

    // @Override
    public radius(radiusValue: number): ArcInterface {
        this.radiusValue = radiusValue;
        return this;
    }

    // @Override
    public x(x: number): ArcInterface {
        this.xValue = x;
        return this;
    }

    // @Override
    public y(y: number): ArcInterface {
        this.yValue = y;
        return this;
    }

    // @Override
    public position(x: number, y: number): ArcInterface {
        this.x(x);
        this.y(y);
        return this;
    }

}

