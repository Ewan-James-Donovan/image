import SVGBuilder from "./dom/SVGBuilder";
import CanvasObject from "./canvas-object/CanvasObject";
import Circle from "./canvas-object/subclasses/Circle";
import Rectangle from "./canvas-object/subclasses/Rectangle";
import Line from "./canvas-object/subclasses/Line";
import Path from "./canvas-object/subclasses/path/Path";
import DrawingInterface from "./DrawingInterface";
import Polygon from "./canvas-object/subclasses/path/subclasses/polygon/Polygon";
import Triangle from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Triangle";
import Square from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Square";
import Pentagon from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Pentagon";
import Hexagon from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Hexagon";
import Octagon from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Octagon";

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