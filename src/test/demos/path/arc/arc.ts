import SVGCanvas from "../../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.arc()
    .from(Math.PI / 4)
    .to(Math.PI / 2 + Math.PI / 4)
    .position(320, 320)
    .radius(200)
    .fillOpacity("0")
    .stroke("black")
    .strokeWidth("5px");

sc.render();