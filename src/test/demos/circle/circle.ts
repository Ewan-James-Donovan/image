import SVGCanvas from "../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.circle()
    .radius("150px")
    .position("320px", "320px")
    .fill("green")

canvas.circle()
    .radius("200px")
    .position("320px", "320px")
    .fill("cyan")
    .lineCap("round")
    .stroke("magenta")
    .strokeWidth("10px")
    .dash("30,30,50,50")
    .fillOpacity("50%")
    .strokeOpacity("50%");

canvas.render();