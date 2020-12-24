import SVGCanvas from "../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.rectangle()
    .dimensions("100px", "70px")
    .position("270px", "285px")
    .fill("green")

sc.rectangle()
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

sc.render();