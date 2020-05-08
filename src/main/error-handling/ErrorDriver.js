import TypeChecker from "./Errors/TypeChecker.js";
import UnitChecker from "./Errors/UnitChecker.js";
import NotFillable from "./Errors/NotFillable.js";
import NotStrokable from "./Errors/NotStrokable.js";
import NotSizable from "./Errors/NotSizable.js";

export default class ErrorHandler {
    constructor() {
        this.checkType = TypeChecker;
        this.checkUnit = UnitChecker;
        this.notFillable = NotFillable;
        this.notStrokable = NotStrokable;
        this.notSizable = NotSizable;
    }
}