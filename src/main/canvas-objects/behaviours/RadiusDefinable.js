export default class RadiusDefinable {

    useInstanceVariableMode() {
        this.radius = function (radiusValue) {
            this.radiusValue = radiusValue;
            return this;
        };
        return this;
    }

    radius(radius) {
        this.tag.addAttribute("r", radius);
        return this;
    }

}