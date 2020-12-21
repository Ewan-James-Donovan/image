import SVGCanvas from "../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.animate({ r: 100 }, (state: any) => {

    canvas.circle()
        .radius(String(Math.sin(state.r) * 100 + 100) + "px")
        .position("320px", "320px")
        .fill("green")
        .fillOpacity("20%");

    if (canvas.timeElapsed() >= 4000) {
        canvas.circle()
        .radius(String(Math.cos(state.r) * 100 + 100) + "px")
        .position("320px", "320px")
        .fill("blue")
        .fillOpacity("20%");
    }

    if (canvas.timeElapsedIsBetween(2000, 4000)) {
        canvas.hexagon()
        .radius(Math.cos(state.r) * 100 + 100)
        .position(320, 320)
        .fill("lime")
        .rotate(state.r)
        .fillOpacity("20%");
    }

    state.r += 0.01;
    
});