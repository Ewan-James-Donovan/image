import Circle from "./canvas-object/subclasses/Circle";
import Rectangle from "./canvas-object/subclasses/Rectangle";
import Line from "./canvas-object/subclasses/Line";
import Path from "./canvas-object/subclasses/path/Path";
import Polygon from "./canvas-object/subclasses/path/subclasses/polygon/Polygon";
import Triangle from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Triangle";
import Square from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Square";
import Pentagon from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Pentagon";
import Hexagon from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Hexagon";
import Octagon from "./canvas-object/subclasses/path/subclasses/polygon/subclasses/Octagon";
import PolygonInterface from "./canvas-object/interfaces/PolygonInterface";
import PolygonSidesInterface from "./canvas-object/interfaces/PolygonSidesInterface";

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
    // text(): Text 
    // axis(): Axis; 
    // axes(): Axes; 
    // grid(): Grid; 
    // arc(): Arc; 
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