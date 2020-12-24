import SVGCanvas from "../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.circle()
    .radius("150px")
    .position("320px", "320px")
    .fill("green")

sc.circle()
    .radius("200px")
    .position("320px", "320px")
    .fill("cyan")
    .lineCap("round")
    .stroke("magenta")
    .strokeWidth("10px")
    .dash("30,30,50,50")
    .fillOpacity("50%")
    .strokeOpacity("50%");

sc.render();