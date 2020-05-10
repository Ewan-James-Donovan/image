animate = (initState, scene) => {

    if (typeof initState != "object") {
        throw `exception: parentElementId must be a string. Currently, it is of type': ${typeof initState}`;
    }

    if (typeof scene != "function") {
        throw `exception: scene must be a function. Currently, it is of type: ${typeof scene}`;
    }

    let state = initState;
    state.frame = 0;
    state.frameRate = 0;
    let i = 0;
    let dis = this;
    function frameRate() {
        let firstFrame = state.frame;
        setTimeout(function () {
            state.frameRate = (state.frame - firstFrame) / 0.25;
        }, 250);
    }
    (function loop() {
        i++;
        dis.clear();
        scene(state);
        dis.draw();
        state.frame++;
        setTimeout(loop, 7.5);
        frameRate();
    }());
    
}