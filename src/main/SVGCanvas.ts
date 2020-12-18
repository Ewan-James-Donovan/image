import SVGBuilder from "./dom/SVGBuilder";
import CanvasObject from "./canvas-objects/CanvasObject";
import Circle from "./canvas-objects/simple/Circle";
import Rectangle from "./canvas-objects/simple/Rectangle";
import Line from "./canvas-objects/simple/Line";
import DrawingInterface from "./DrawingInterface";

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

}