var pass = "zhaojinge";
var A = /** @class */ (function () {
  function A() {}
  Object.defineProperty(A.prototype, "fullName", {
    get: function () {
      return this._fullName;
    },
    set: function (name) {
      if (pass && pass === "zhaojinge") {
        this._fullName = name;
      } else {
        console.error("you are not zhaojinge");
      }
    },
    enumerable: true,
    configurable: true,
  });
  return A;
})();
var a = new A();
a.fullName = "zhangqi";
console.log(a.fullName);
