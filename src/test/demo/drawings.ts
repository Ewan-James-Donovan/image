import SVGCanvas from "../../main/SVGCanvas";

// Multiple canvases have been made, but this could all be drawn on one.

const sc1: SVGCanvas = new SVGCanvas("1");

sc1.circle()
    .fill("red")
    .position(25, 25)
    .radius(12.5);

sc1.render();

const sc2: SVGCanvas = new SVGCanvas("2");

sc2.rectangle()
    .fill("orange")
    .position(7, 12.5)
    .dimensions(35, 25);

sc2.render();

const sc3: SVGCanvas = new SVGCanvas("3");

sc3.line()
    .points(10, 10, 40, 40)
    .stroke("yellow")
    .strokeWidth(3);

sc3.render();

const sc4: SVGCanvas = new SVGCanvas("4");

sc4.path()
    .points([
        [10, 10],
        [15, 25],
        [35, 25],
        [40, 40]
    ])
    .stroke("lime")
    .strokeWidth(3)
    .fillOpacity("0");

sc4.render();

const sc5: SVGCanvas = new SVGCanvas("5");

sc5.text()
    .string("hello")
    .position(5, 30)
    .fill("cyan")
    .font("consolas")
    .size("10pt");

sc5.render();

const sc6: SVGCanvas = new SVGCanvas("6");

sc6.polygon()
    .sides(9)
    .position(25, 25)
    .radius(12.5)
    .rotate((2 * Math.PI) / 20)
    .fill("blue");

sc6.render();

const sc7: SVGCanvas = new SVGCanvas("7");

sc7.triangle()
    .position(25, 25)
    .radius(12.5)
    .rotate((2 * Math.PI) / 20)
    .fill("purple");

sc7.render();

const sc8: SVGCanvas = new SVGCanvas("8");

sc8.square()
    .position(25, 25)
    .radius(12.5)
    .rotate((2 * Math.PI) / 20)
    .fill("hotpink");

sc8.render();

const sc9: SVGCanvas = new SVGCanvas("9");

sc9.pentagon()
    .position(25, 25)
    .radius(12.5)
    .rotate((2 * Math.PI) / 20)
    .fill("red");

sc9.render();

const sc10: SVGCanvas = new SVGCanvas("10");

sc10.hexagon()
    .position(25, 25)
    .radius(12.5)
    .rotate((2 * Math.PI) / 20)
    .fill("orange");

sc10.render();

const sc11: SVGCanvas = new SVGCanvas("11");

sc11.octagon()
    .position(25, 25)
    .radius(12.5)
    .rotate((2 * Math.PI) / 20)
    .fill("yellow");

sc11.render();

const sc12: SVGCanvas = new SVGCanvas("12");

sc12.animate({ r: 0, t: 0 }, (state: any) => {

    sc12.circle()
        .radius(Math.sin(state.r) * 10 + 10)
        .position(25, 25)
        .fill("lime");
    
    state.r += 0.01;

});



