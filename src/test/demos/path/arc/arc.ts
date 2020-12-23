import SVGCanvas from "../../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.arc()
    .from(Math.PI / 4)
    .to(Math.PI / 2 + Math.PI / 4)
    .position(320, 320)
    .radius(200)
    .fillOpacity("0")
    .stroke("black")
    .strokeWidth("5px");

canvas.render();