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
import PolygonInterface from "./canvas-object/subclasses/path/subclasses/polygon/PolygonInterface";
import PredefinedPolygonInterface from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/PredefinedPolygonInterface";
import Arc from "./canvas-object/subclasses/path/subclasses/arc/Arc";
import ArcInterface from "./canvas-object/subclasses/path/subclasses/arc/ArcInterface";

export default class SVGCanvas implements DrawingInterface {

    private containerElementId: string;
    private registry: Array<CanvasObject> = new Array<CanvasObject>();
    private backgroundColor: string;
    private lastRendered: number = Date.now();
    private frameRate: number = 0;
    private currentFrame: number = 0;
    private desiredFrameRate: number;
    private startTime: number;
    private timeElapsedValue: number;

    constructor(containerElementId: string) {
        this.containerElementId = containerElementId;
    }

    private register<T extends CanvasObject>(canvasObject: T): T {
        this.registry.push(canvasObject);
        return canvasObject;
    }

    public render(testMode = false): string {
        const html: string = SVGBuilder.buildFromRegistry(this.registry, this.backgroundColor ? this.backgroundColor : "rgba(0,0,0,0)");
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

    public timeElapsed(): number {
        return new Number(this.timeElapsedValue).valueOf();
    }

    public timeElapsedIsBetween(startMs: number, endMs: number): boolean {
        if (this.timeElapsedValue >= startMs && this.timeElapsedValue < endMs) {
            return true;
        }
        return false;
    } 

    public animate(state: Object, func: Function, desiredFrameRate: number = Infinity, staticThrottling: boolean = false, firstCalled: boolean = true): void {
        this.currentFrame++;
        func(state);
        this.render();
        if (firstCalled) {
            this.desiredFrameRate = desiredFrameRate;
            this.startTime = Date.now();
        } 
        if (staticThrottling || desiredFrameRate === Infinity) {
            setTimeout(() => this.animate(
                state, func, desiredFrameRate, staticThrottling, false),
                1000 / desiredFrameRate
            );
        } else {
            if (this.frameRate < this.desiredFrameRate) {
                setTimeout(() => this.animate(
                    state, func, desiredFrameRate + 1, staticThrottling, false),
                    1000 / (desiredFrameRate + this.desiredFrameRate / Math.pow(this.desiredFrameRate, 2))
                );
            } else if (this.frameRate > this.desiredFrameRate) {
                setTimeout(() => this.animate(
                    state, func, desiredFrameRate - 1, staticThrottling, false),
                    1000 / (desiredFrameRate - this.desiredFrameRate / Math.pow(this.desiredFrameRate, 2))
                );
            } else {
                setTimeout(() => this.animate(
                    state, func, desiredFrameRate, staticThrottling, false),
                    1000 / desiredFrameRate
                );
            }
        }
        const delta: number = (Date.now() - this.lastRendered) / 1000;
        this.lastRendered = Date.now();
        this.timeElapsedValue = this.lastRendered - this.startTime;
        this.frameRate = 1 / delta;
    }

    public background(backgroundColor: string): SVGCanvas {
        this.backgroundColor = backgroundColor;
        return this;
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
    public path(): Path<any> {
        return this.register(new Path());
    }

    // @Override
    public polygon(): PredefinedPolygonInterface {
        return this.register(new Polygon());
    }

    // @Override
    public triangle(): PolygonInterface {
        return this.register(new Triangle());
    }

    // @Override
    public square(): PolygonInterface {
        return this.register(new Square());
    }

    // @Override
    public pentagon(): PolygonInterface {
        return this.register(new Pentagon());
    }

    // @Override
    public hexagon(): PolygonInterface {
        return this.register(new Hexagon());
    }

    // @Override
    public octagon(): PolygonInterface {
        return this.register(new Octagon());
    }

    // @Override
    public arc(): ArcInterface {
        return this.register(new Arc());
    }
}