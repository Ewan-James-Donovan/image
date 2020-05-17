
export default class Frame {

    static render(func, state, registry, constructionRegistry, drawer, renderer, dis) {
        registry.clear();
        constructionRegistry.clear();
        dis.canvasWidth = renderer.canvasWidthPx;
        dis.canvasHeight = renderer.canvasHeightPx;
        drawer.callFunction(func, state);
        renderer.render();
    }

}