import Animator from "../drawing/animation/Animator.js";
import Frame from "../drawing/Frame.js";
import Canvas from "../drawing/Canvas.js";
import Scene from "../drawing/animation/Scene.js";

export default class Image {

    createCanvas(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor) {
        const canvas = new Canvas(canvasParentCSSId, canvasWidth, canvasHeight, canvasBackgroundColor);
        this.frameObj = new Frame(canvas);
        this.draw = this.frameObj.drawer;
        this.canvasWidth = this.frameObj.renderer.canvasWidthPx;
        this.canvasHeight = this.frameObj.renderer.canvasHeightPx;
    }

    frame(func, state) {
        if (!this.frameObj) {
            throw "";
        }
        this.frameObj.render(func, state);
    }

    animate(state, func) {
        Animator.animate(state, func, this);
    }

    scene(state, startTime, endTime, func) {
        Scene.create(state, startTime, endTime, func);
    }

}