export default class Positionable {

    useLineMode() {
        this.x = function (x) {
            this.tag.addAttribute("x1", x);
            return this;
        };
        this.y = function (y) {
            this.tag.addAttribute("y1", y);
            return this;
        };
        this.x2 = function (x) {
            this.tag.addAttribute("x2", x);
            return this;
        };
        this.y2 = function (y) {
            this.tag.addAttribute("y2", y);
            return this;
        };
        this.position = function (x1, y1, x2, y2) {
            this.x(x1);
            this.y(y1);
            this.x2(x2);
            this.y2(y2);
            return this;
        }
        return this;
    }

    useCenterMode() {
        this.x = function (x) {
            this.tag.addAttribute("cx", x);
            return this;
        };
        this.y = function (y) {
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