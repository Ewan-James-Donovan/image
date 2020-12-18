import Circle from "./canvas-objects/independent/Circle";
import Line from "./canvas-objects/independent/Line";
import Path from "./canvas-objects/independent/Path";
import Rectangle from "./canvas-objects/independent/Rectangle";

export default interface DrawingInterface {

    circle(): Circle;
    rectangle(): Rectangle;
    line(): Line;
    path(): Path;
    // text(): Text // independent
    // polygon(): Polygon // dependent;
    // triangle(): Triangle; // extends Polygon dependent
    // square(): Square; // extends Polygon dependent
    // pentagon(): Pentagon; // extends Polygon dependent
    // hexagon(): Hexagon; // extends Polygon dependent
    // octagon(): Octogon; // extends Polygon dependent
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