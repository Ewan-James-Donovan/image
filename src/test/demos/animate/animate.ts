import SVGCanvas from "../../../main/SVGCanvas";

const sc: SVGCanvas = new SVGCanvas("test");

sc.animate({ r: 100, t: 0 }, (state: any) => {

    sc.circle()
        .radius(String(Math.sin(state.r) * 100 + 100) + "px")
        .position("320px", "320px")
        .fill("green")
        .fillOpacity("20%");

    if (sc.timeElapsed() >= 4000) {
        sc.circle()
            .radius(String(Math.cos(state.r) * 100 + 100) + "px")
            .position("320px", "320px")
            .fill("blue")
            .fillOpacity("20%");

    }

    if (sc.timeElapsedIsBetween(2000, 4000)) {
        sc.hexagon()
            .radius(Math.cos(state.r) * 100 + 100)
            .position(320, 320)
            .fill("lime")
            .rotate(state.r)
            .fillOpacity("20%");
        sc.arc()
            .from(state.t)
            .to(state.t*3)
            .position(320, 320)
            .radius(200)
            .fillOpacity("0")
            .stroke("black")
            .strokeWidth("5px");
        state.t += 0.01;
    }

    state.r += 0.01;
    
});