import SVGCanvas from "../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.rectangle()
    .dimensions("100px", "70px")
    .position("270px", "285px")
    .fill("green")

canvas.rectangle()
    .dimensions("100px", "70px")
    .position("320px", "320px")
    .fill("cyan")
    .lineCap("round")
    .stroke("magenta")
    .strokeWidth("10px")
    .dash("30,30,50,50")
    .fillOpacity("50%")
    .strokeOpacity("50%")
    .roundCorners("20px");

canvas.render();