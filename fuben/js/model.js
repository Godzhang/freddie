// 单例模式
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// function Singleton(FuncClass) {
//   let _instance;
//   return new Proxy(FuncClass, {
//     construct(target, args) {
//       return _instance || (_instance = Reflect.construct(FuncClass, args));
//     }
//   });
// }
// const PersonInstance = Singleton(Person);
// const p1 = new PersonInstance("zhangqi", 30);
// const p2 = new PersonInstance("zhaojinge", 27);

// const getSingle = function(fn) {
//   let result;
//   return function() {
//     return result || (result = fn.apply(this, arguments));
//   };
// };

// 工厂模式
