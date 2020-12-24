import SVGCanvas from "../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.text()
    .string("hello")
    .lineCap("butt")
    .stroke("blue")
    .strokeWidth("1x")
    .position("50px", "50px")
    .fill("red")
    .dash("3,3")
    .strokeOpacity("50%")
    .font("consolas")
    .size("20pt");

sc.render();