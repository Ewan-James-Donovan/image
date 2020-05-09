export default class Sizeable {

    width(width) {
        this.tag.addAttribute("width", width);
        return this;
    }

    height(height) {
        this.tag.addAttribute("height", height);
        return this;
    }

    size(width, height) {
        this.width(width);
        this.height(height);
        return this;
    }

}