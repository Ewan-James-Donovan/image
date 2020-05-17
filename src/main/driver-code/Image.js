import Animator from "../drawing/animation/Animator.js";
import Frame from "../drawing/Frame.js";
import Canvas from "../drawing/Canvas.js";

export default class Image {

    createCanvas(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor) {
        const canvas = new Canvas(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor);
        this.frameObj = new Frame(canvas);
        this.draw = this.frameObj.drawer;
        this.canvasWidth = this.frameObj.renderer.canvasWidthPx;
        this.canvasHeight = this.frameObj.renderer.canvasHeightPx;
    }

    frame(func, state) {
        this.frameObj.render(func, state);
    }

    animate(state, func) {
        Animator.animate(state, func, this);
    }

    scene(state, startTime, endTime, func) {
        let sceneIsReadyToPlay = false;
        if (state.frame >= (state.desiredFrameRate / 1000) * startTime && state.frame < (state.desiredFrameRate / 1000) * endTime) {
            sceneIsReadyToPlay = true;
        }
        if (sceneIsReadyToPlay) {
            func(state);
        }
    }

}