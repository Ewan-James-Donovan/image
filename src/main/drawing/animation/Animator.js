export default class Animator {

    static animate(state, func, dis) {
        state.frameRate = 0;
        let offset = 0;
        function frameRate() {
            let firstFrame = state.frame;
            setTimeout(function () {
                state.frameRate = (state.frame - firstFrame) * 4;
                if (state.frameRate < state.desiredFrameRate) {
                    if (state.desiredFrameRate) {
                        offset += state.desiredFrameRate / 6000;
                        state.desiredRefreshMs = 1000 / (state.desiredFrameRate + offset);
                    } else {
                        state.desiredRefreshMs = 0;
                    }
                } else if (state.frameRate > state.desiredFrameRate) {

                    if (state.desiredFrameRate) {
                        offset -= state.desiredFrameRate / 6000;
                        state.desiredRefreshMs = 1000 / (state.desiredFrameRate + offset);
                    } else {
                        state.desiredRefreshMs = 0;
                    }
                }
            }, 250);
        }
        if (state.desiredFrameRate) {
            state.desiredRefreshMs = 1000 / (state.desiredFrameRate + offset);
        } else {
            state.desiredRefreshMs = 0;
        }
        let n = 0;
        (function loop() {
            state.frame = n++;
            dis.frame(func, state);
            frameRate();
            if (state.logFrameRate) {
                console.log(state.frameRate);
            }
            setTimeout(loop, state.desiredRefreshMs);
        }());
    }

}