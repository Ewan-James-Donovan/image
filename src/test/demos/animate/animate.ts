import SVGCanvas from "../../../main/SVGCanvas";

const canvas: SVGCanvas = new SVGCanvas("test");

canvas.animate({ r: 100 }, (state: any) => {
    canvas.circle()
        .radius(String(Math.sin(state.r) * 100 + 100) + "px")
        .position("320px", "320px")
        .fill("green")
    state.r += 0.01;
});