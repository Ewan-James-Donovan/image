export default class Attribute {

    constructor(name, value) {
        ErrorHandler.checkType(name, "string");
        ErrorHandler.checkType(value, "string");
        this.name = name;
        this.value = value;
    }
    
}