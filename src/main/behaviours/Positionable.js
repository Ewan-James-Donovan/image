export default class Positionable {

    x(x) {
        this.tag.addAttribute("x", x);
        return this;
    }

    y(y) {
        this.tag.addAttribute("y", y);
        return this;
    }

    position(x,y) {
        this.x(x);
        this.y(y);
        return this;
    }

}