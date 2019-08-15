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
// class AbstractClass {
//   constructor() {
//     if (new.target === AbstractClass) {
//       throw new Error("抽象类不能直接实例化");
//     }
//   }

//   operate1() {
//     console.log("operate1");
//   }

//   operate2() {
//     console.log("抽象方法不能调用");
//   }

//   templateMethod() {
//     this.operate1();
//     this.operate2();
//   }
// }

// class ConcreteClass extends AbstractClass {
//   constructor() {
//     super();
//   }
//   operate2() {
//     console.log("operate2");
//   }
// }

// const instance = new ConcreteClass();
// instance.templateMethod();

// 策略模式
// const StragegyMap = {};

// function context(type, ...rest) {
//   return StragegyMap[type] && StragegyMap[type](...rest);
// }

// StragegyMap.minus100_30 = function(price) {
//   return price - Math.floor(price / 100) * 30;
// };
// context("minus100_30", 270);

// 发布订阅模式
// class Publisher {
//   constructor() {
//     this._subsMap = {};
//   }

//   // 消息订阅
//   subscribe(type, cb) {
//     if (this._subsMap[type]) {
//       if (!this._subsMap[type].includes(cb)) {
//         this._subsMap[type].push(cb);
//       }
//     } else {
//       this._subsMap[type] = [cb];
//     }
//   }

//   // 消息退订
//   unsubscribe(type, cb) {
//     if (!this._subsMap[type] || !this._subsMap[type].includes(cb)) return;
//     const idx = this._subsMap[type].indexOf(cb);
//     this._subsMap[type].splice(idx, 1);
//   }

//   // 消息发布
//   notify(type, ...payload) {
//     if (!this._subsMap[type]) return;
//     this._subsMap[type].forEach(cb => cb(...payload));
//   }
// }

// const adadis = new Publisher();

// adadis.subscribe("运动鞋", message => console.log("152xxx" + message)); // 订阅运动鞋
// adadis.subscribe("运动鞋", message => console.log("138yyy" + message));
// adadis.subscribe("帆布鞋", message => console.log("139zzz" + message)); // 订阅帆布鞋

// adadis.notify("运动鞋", " 运动鞋到货了 ~"); // 打电话通知买家运动鞋消息
// adadis.notify("帆布鞋", " 帆布鞋售罄了 T.T"); // 打电话通知买家帆布鞋消息

// 状态模式
