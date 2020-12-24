import SVGCanvas from "../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.animate({ r: 100 }, (state: any) => {
    sc.circle()
        .radius(String(Math.sin(state.r) * 100 + 100) + "px")
        .position("320px", "320px")
        .fill("green")
    state.r += 0.01;
}, 50, true);