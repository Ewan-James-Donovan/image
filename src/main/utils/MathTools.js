export default class MathTools {

    static eulersFormula(radius, theta, xOffset, yOffset) {
        return [radius * Math.cos(theta) + xOffset, radius * Math.sin(theta) + yOffset];
    }

    static cis = MathTools.eulersFormula;

    static polarToCartesian = MathTools.eulersFormula;

}