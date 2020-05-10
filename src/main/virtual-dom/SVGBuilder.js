export default class SVGBuilder {

    static build(registry) {
        let svgString = `<svg width="100%" height="100%">`;
        for (let canvasObject of registry.getCanvasObjects()) {
            for (let tag of canvasObject.tags) {
                svgString += tag.toHTML();
            }
        }
        return svgString + `</svg>`;
    }

}