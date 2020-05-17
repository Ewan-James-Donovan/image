export default class ConstructionRegistry {

    constructor() {
        this.constructionObjects = [];
    }

    addConstructionObject(constructionObjects) {
        this.constructionObjects.push(constructionObjects);
    }

    getConstructionObjects() {
        return this.constructionObjects;
    }

    clear() {
        this.constructionObjects = [];
    }

}