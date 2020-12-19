import SVGBuilder from "./dom/SVGBuilder";
import CanvasObject from "./canvas-objects/CanvasObject";
import Circle from "./canvas-objects/independent/Circle";
import Rectangle from "./canvas-objects/independent/Rectangle";
import Line from "./canvas-objects/independent/Line";
import Path from "./canvas-objects/independent/Path";
import DrawingInterface from "./DrawingInterface";
import Polygon from "./canvas-objects/dependent/Polygon";
import Triangle from "./canvas-objects/dependent/Triangle";
import Square from "./canvas-objects/dependent/Square";
import Pentagon from "./canvas-objects/dependent/Pentagon";
import Hexagon from "./canvas-objects/dependent/Hexagon";
import Octagon from "./canvas-objects/dependent/Octagon";

export default class SVGCanvas implements DrawingInterface {

    private containerElementId: string;
    private registry: Array<CanvasObject> = new Array<CanvasObject>();

    constructor(containerElementId: string) {
        this.containerElementId = containerElementId;
    }

    private register<T extends CanvasObject>(canvasObject: T): T {
        this.registry.push(canvasObject);
        return canvasObject;
    }

    public render(testMode = false) {
        const html: string = SVGBuilder.buildFromRegistry(this.registry);
        if (!testMode) {
            try {
                document.getElementById(this.containerElementId).innerHTML = html;
            } catch {
                console.warn("Element not found.");
            }
        }
        this.registry = new Array<CanvasObject>();
        return html;
    }

    // @Override
    public circle(): Circle {
        return this.register(new Circle());
    }

    // @Override
    public rectangle(): Rectangle {
        return this.register(new Rectangle());
    }

    // @Override
    public line(): Line {
        return this.register(new Line());
    }

    // @Override
    public path(): Path {
        return this.register(new Path());
    }

    // @Override
    public polygon(): Polygon {
        return this.register(new Polygon());
    }

    // @Override
    public triangle(): Triangle {
        return this.register(new Triangle());
    }

    // @Override
    public square(): Square {
        return this.register(new Square());
    }

    // @Override
    public pentagon(): Pentagon {
        return this.register(new Pentagon());
    }

    // @Override
    public hexagon(): Hexagon {
        return this.register(new Hexagon());
    }

    // @Override
    public octagon(): Octagon {
        return this.register(new Octagon());
    }

}