import SVGCanvas from "../../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.polygon()
    .sides(24)
    .position(320, 320)
    .radius(100)
    .rotate((2 * Math.PI) / 20)
    .lineCap("square")
    .stroke("green")
    .strokeWidth("2px")
    .dash("1, 3, 5, 9")
    .strokeOpacity("70%")
    .fill("lime")
    .fillOpacity("10%");

sc.triangle()
    .position(320, 320)
    .radius(100)
    .rotate((2 * Math.PI) / 20)
    .lineCap("square")
    .stroke("green")
    .strokeWidth("2px")
    .dash("1, 3, 5, 9")
    .strokeOpacity("70%")
    .fill("lime")
    .fillOpacity("10%");

sc.square()
    .position(320, 320)
    .radius(100)
    .rotate((2 * Math.PI) / 20)
    .lineCap("square")
    .stroke("green")
    .strokeWidth("2px")
    .dash("1, 3, 5, 9")
    .strokeOpacity("70%")
    .fill("lime")
    .fillOpacity("10%");

sc.pentagon()
    .position(320, 320)
    .radius(100)
    .rotate((2 * Math.PI) / 20)
    .lineCap("square")
    .stroke("green")
    .strokeWidth("2px")
    .dash("1, 3, 5, 9")
    .strokeOpacity("70%")
    .fill("lime")
    .fillOpacity("10%");

sc.hexagon()
    .position(320, 320)
    .radius(100)
    .rotate((2 * Math.PI) / 20)
    .lineCap("square")
    .stroke("green")
    .strokeWidth("2px")
    .dash("1, 3, 5, 9")
    .strokeOpacity("70%")
    .fill("lime")
    .fillOpacity("10%");

sc.octagon()
    .position(320, 320)
    .radius(100)
    .rotate((2 * Math.PI) / 20)
    .lineCap("square")
    .stroke("green")
    .strokeWidth("2px")
    .dash("1, 3, 5, 9")
    .strokeOpacity("70%")
    .fill("lime")
    .fillOpacity("10%");

sc.render();