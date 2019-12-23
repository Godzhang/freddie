// let a = 1;
// a = "stirng";

// class C {
//   constructor() {
//     this.constructorOnly = 0;
//     this.constructorUnknown = undefined;
//   }
//   method() {
//     this.constructorOnly = false;
//     this.constructorUnknown = "abc";
//     this.methodOnly = "ok";
//   }
//   methods() {
//     this.methodOnly = 123;
//   }
// }

// class C {
//   constructor() {
//     /** @type {number | undefined} */
//     this.prop = undefined;
//     /** @type {number | undefined} */
//     this.count;
//   }
// }
// let c = new C();
// c.prop = 0;
// c.count = 123;

// /** @types {{a:number}} */
// let obj = { a: 1 };
// obj.b = 2;
