import SVGCanvas from "../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.path()
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

sc.render();