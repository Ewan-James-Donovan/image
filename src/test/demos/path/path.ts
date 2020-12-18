import SVGCanvas from "../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.path()
    .points([
        [50, 50], 
        [100, 300], 
        [590, 590]
    ])
    .lineCap("butt")
    .stroke("blue")
    .strokeWidth("30px")
    .dash("30,30,50,50")
    .strokeOpacity("50%")
    .fill("lime")
    .fillOpacity("30%");

canvas.render();