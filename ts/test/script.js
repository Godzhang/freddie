// interface Identities<V, M> {
//   value: V;
//   message: M;
// }
var GenericClass = /** @class */ (function () {
    function GenericClass(value) {
        this.value = value;
    }
    GenericClass.prototype.getIdentity = function () {
        return this.value;
    };
    return GenericClass;
}());
var g = new GenericClass(86);
console.log(g.getIdentity());
