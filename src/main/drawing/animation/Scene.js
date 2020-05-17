export default class Scene {

    static create(state, startTime, endTime, func) {
        let eventIsReadyToPlay = false;
        if (state.frame >= (state.desiredFrameRate / 1000) * startTime && state.frame < (state.desiredFrameRate / 1000) * endTime) {
            eventIsReadyToPlay = true;
        }
        if (eventIsReadyToPlay) {
            func(state);
        }
    }

}