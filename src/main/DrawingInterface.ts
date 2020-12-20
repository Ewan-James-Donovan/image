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

export default interface DrawingInterface {

    circle(): Circle;
    rectangle(): Rectangle;
    line(): Line;
    path(): Path;
    polygon(): Polygon;
    triangle(): Triangle;
    square(): Square;
    pentagon(): Pentagon;
    hexagon(): Hexagon;
    octagon(): Octagon;
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