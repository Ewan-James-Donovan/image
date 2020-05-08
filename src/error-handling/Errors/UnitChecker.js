export default function (unitVariable) {
    validUnits = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
    let unitIsInvalid = true;
    for (let unit of validUnits) {
        if (unitVariable == unit) {
            unitIsInvalid = false;
            break;
        }
    }
    if (unitIsInvalid) {
        throw `exception: CSS unit, ${unitVariable}, is invalid.`;
    }
}

