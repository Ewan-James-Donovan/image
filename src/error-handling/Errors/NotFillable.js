export default function () {
    throw `exception: Object, ${this.constructor.name}, is not fillable.`;
}