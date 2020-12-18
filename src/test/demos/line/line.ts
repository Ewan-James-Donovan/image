import SVGCanvas from "../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.line()
    .points("50px", "50px", "590px", "590px")
    .lineCap("butt")
    .stroke("blue")
    .strokeWidth("30px")
    .dash("30,30,50,50")
    .strokeOpacity("50%");

canvas.line()
    .points("50px", "50px", "590px", "590px")
    .lineCap("round")
    .stroke("magenta")
    .strokeWidth("10px")
    .dash("30,30,50,50")
    .strokeOpacity("50%");

canvas.render();