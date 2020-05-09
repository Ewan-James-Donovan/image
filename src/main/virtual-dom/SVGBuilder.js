export default class SVGBuilder {

    build(registry) {
        let svgString = `<svg width="100%" height="100%">`;
        for (let canvasObject of registry.getCanvasObjects()) {
            for (let tag of canvasObject.tags) {
                tagString += tag.toHTML();
            }
        }
        svgString += `</svg>`;
    }

}