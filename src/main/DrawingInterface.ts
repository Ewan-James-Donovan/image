import Circle from "./canvas-object/subclasses/Circle";
import Rectangle from "./canvas-object/subclasses/Rectangle";
import Line from "./canvas-object/subclasses/Line";
import Path from "./canvas-object/subclasses/path/Path";
import PolygonInterface from "./canvas-object/subclasses/path/subclasses/polygon/PolygonInterface";
import PolygonSidesInterface from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/PolygonSidesInterface";
import ArcInterface from "./canvas-object/subclasses/path/subclasses/arc/ArcInterface";


export default interface DrawingInterface {

    background(backgroundColor: string): void;
    circle(): Circle;
    rectangle(): Rectangle;
    line(): Line;
    path(): Path<any>;
    polygon(): PolygonSidesInterface;
    triangle(): PolygonInterface;
    square(): PolygonInterface;
    pentagon(): PolygonInterface;
    hexagon(): PolygonInterface;
    octagon(): PolygonInterface;
    arc(): ArcInterface; 
    // text(): Text 
    // axis(): Axis; 
    // axes(): Axes; 
    // grid(): Grid; 
    // graph(): Graph;
    // spline(cubic, etc): Spline;
    // bezier(1, 2 (points lol) ): Bezier; 
    // image(file): ImageFrame; 
    // svg(file): SVGItem;
    // isometricGrid(): IsometricGrid; 
    // ThreeDSpace(): ThreeDSpace; 
    // cube(): Cube; 
    // tetrahedron: Tetrahedron; 
    // icosahedron: Icosahedron; 
    // dodecahedron: Dodecahedron; 
    // octohedron: Octohedron; 
    // foreignElement: Foreign element; 
    // latex(): Latex;
}