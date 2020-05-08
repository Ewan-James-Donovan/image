export default function () {
    throw `exception: Object, ${this.constructor.name}, is not sizable. No usage of 'width' or 'height' is permitted.`;
}