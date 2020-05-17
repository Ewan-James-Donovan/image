export default class SVGBuilder {

    static build(registry, constructionRegistry) {

        if (constructionRegistry) {
            for (const constructionObject of constructionRegistry.getConstructionObjects()) {
                constructionObject.draw();
            }
        }

        let svgString = `<svg width="100%" height="100%">`;
        for (const canvasObject of registry.getCanvasObjects()) {
            svgString += canvasObject.tag.toHTML();
        }
        return svgString + `</svg>`;
    }

}