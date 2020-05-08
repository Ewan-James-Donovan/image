export default function (variable, typeToCheckFor) {
    const name = obj => Object.keys(obj)[0];
    if (typeof variable != typeToCheckFor) {
        throw `exception: Type of variable, ${name(variable)}, is '${typeof variable}'. Expected type: '${typeToCheckFor}'`;
    }
}