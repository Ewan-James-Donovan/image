import SVGCanvas from "../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.polygon()
    .sides(5)
    .position(320, 320)
    .radius(100)
    .rotate((2 * Math.PI) / 20)
    .lineCap("square")
    .stroke("green")
    .strokeWidth("2px")
    .dash("1, 3, 5, 9")
    .strokeOpacity("70%")
    .fill("lime")
    .fillOpacity("30%");

canvas.render();