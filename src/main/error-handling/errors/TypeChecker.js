export default function (variablePath, variable, typeToCheckFor) {
    if (typeof variable != typeToCheckFor) {
        throw `exception: Type of variable, ${variablePath}, is '${typeof variable}'. Expected type: '${typeToCheckFor}'.`;
    }
}