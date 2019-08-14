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
// class CarBuilder {
//   constructor({ color = "white", weight = "0" }) {
//     this.color = color;
//     this.weight = weight;
//   }
//   // 生产部件，轮胎
//   buildTyre(type) {
//     const tyre = {};
//     switch (type) {
//       case "small":
//         tyre.tyreType = "小号轮胎";
//         tyre.tyreIntro = "正在使用小号轮胎";
//         break;
//       case "normal":
//         tyre.tyreType = "中号轮胎";
//         tyre.tyreIntro = "正在使用中号轮胎";
//         break;
//       case "big":
//         tyre.tyreType = "大号轮胎";
//         tyre.tyreIntro = "正在使用大号轮胎";
//         break;
//     }
//     this.tyre = tyre;
//     return this;
//   }
//   // 生产部件，发动机
//   buildEngine(type) {
//     const engine = {};
//     switch (type) {
//       case "small":
//         engine.engineType = "小马力发动机";
//         engine.engineIntro = "正在使用小马力发动机";
//         break;
//       case "normal":
//         engine.engineType = "中马力发动机";
//         engine.engineIntro = "正在使用中马力发动机";
//         break;
//       case "big":
//         engine.engineType = "大马力发动机";
//         engine.engineIntro = "正在使用大马力发动机";
//         break;
//     }
//     this.engine = engine;
//     return this;
//   }
// }

// let b1 = new CarBuilder({ color: "red", weight: "1600kg" })
//   .buildTyre("small")
//   .buildEngine("big");
// console.log(b1);

// 模板方法模式
class AbstractClass {
  constructor() {
    if (new.target === AbstractClass) {
      throw new Error("抽象类不能直接实例化");
    }
  }

  operate1() {
    console.log("operate1");
  }

  operate2() {
    console.log("抽象方法不能调用");
  }

  templateMethod() {
    this.operate1();
    this.operate2();
  }
}

class ConcreteClass extends AbstractClass {
  constructor() {
    super();
  }
  operate2() {
    console.log("operate2");
  }
}

const instance = new ConcreteClass();
instance.templateMethod();
