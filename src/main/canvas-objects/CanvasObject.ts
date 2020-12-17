import Tag from "../dom/Tag";

export default abstract class CanvasObject {

    private tags : Array<Tag> = new Array<Tag>();

    protected addTag(tag : Tag) : void {
        this.tags.push(tag);
    }

    public getTags() {
        return [...this.tags];
    }

    public abstract prepareForBuild() : void;

}