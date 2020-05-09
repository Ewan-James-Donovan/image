import TypeChecker from "./Errors/TypeChecker.js";
import UnitChecker from "./Errors/UnitChecker.js";
import NotFillable from "./Errors/NotFillable.js";
import NotStrokable from "./Errors/NotStrokable.js";
import NotSizable from "./Errors/NotSizable.js";

export default class ErrorHandler {

    static checkType(variableName, variable, typeToCheckFor) {
        return TypeChecker(variableName, variable, typeToCheckFor);
    }
    
    static notFillable() {
        return NotFillable();
    }

    static notSizable() {
        return NotSizable();
    }

    static notStrokable() {
        return NotStrokable();
    }

    static checkCSSUnit(unitVariable) {
        return UnitChecker(unitVariable);
    }
}