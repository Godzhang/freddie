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

// 建造者(生成器)模式
function CarBuilder({ color = "white", weight = 0 }) {
  this.color = color;
  this.weight = weight;
}
CarBuilder.prototype.buildType = function(type) {
  switch (type) {
    case "small":
      this.tyreType = "小号轮胎";
      this.tyreIntro = "正在使用小号轮胎";
  }
};
