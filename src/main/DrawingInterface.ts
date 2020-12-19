import Circle from "./canvas-objects/independent/Circle";
import Rectangle from "./canvas-objects/independent/Rectangle";
import Line from "./canvas-objects/independent/Line";
import Path from "./canvas-objects/independent/Path";
import Polygon from "./canvas-objects/dependent/Polygon";
import Triangle from "./canvas-objects/dependent/Triangle";
import Square from "./canvas-objects/dependent/Square";
import Pentagon from "./canvas-objects/dependent/Pentagon";
import Hexagon from "./canvas-objects/dependent/Hexagon";
import Octagon from "./canvas-objects/dependent/Octagon";

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
    // text(): Text // independent
    // axis(): Axis; // dependent
    // axes(): Axes; // dependent
    // grid(): Grid; // dependent
    // arc(): Arc; // dependent
    // graph(): Graph // dependent
    // spline(cubic, etc): Spline // dependent
    // bezier(1, 2 (points lol) ): Bezier // dependent
    // image(file): ImageFrame // independent
    // svg(file): SVGItem // independent
    // isometricGrid(): IsometricGrid // dependent
    // ThreeDSpace(): ThreeDSpace // dependent
    // cube(): Cube // dependent
    // tetrahedron: Tetrahedron // dependent
    // icosahedron: Icosahedron // dependent
    // dodecahedron: Dodecahedron // dependent
    // octohedron: Octohedron // dependent
    // foreignElement: Foreign element // independent
    // latex(): Latex // independent maybe? or depdendent if foreign
}