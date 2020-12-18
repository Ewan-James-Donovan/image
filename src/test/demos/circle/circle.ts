import SVGCanvas from "../../../main/SVGCanvas";

const canvas : SVGCanvas = new SVGCanvas("test");

canvas.circle()
    .radius("10px")
    .x("50px")
    .y("50px")
    .fill("red");

canvas.render();