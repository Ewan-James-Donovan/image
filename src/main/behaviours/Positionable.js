export default class Positionable {

    useCenterMode() {
        this.x = function(x) {
            this.tag.addAttribute("cx", x);
            return this;
        };
        this.y = function(y) {
            this.tag.addAttribute("cy", y);
            return this;
        };
        return this;
    }

    x(x) {
        this.tag.addAttribute("x", x);
        return this;
    }

    y(y) {
        this.tag.addAttribute("y", y);
        return this;
    }

    position(x, y) {
        this.x(x);
        this.y(y);
        return this;
    }

}