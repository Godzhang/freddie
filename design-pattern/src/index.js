// class jQuery {
//   constructor(selector) {
//     let slice = Array.prototype.slice;
//     let dom = slice.call(document.querySelectorAll(selector));
//     let len = dom ? dom.length : 0;
//     for (let i = 0; i < len; i++) {
//       this[i] = dom[i];
//     }
//     this.length = len;
//     this.selector = selector || "";
//   }

//   append(node) {}

//   addClass(name) {}

//   html(data) {}
// }

// window.$ = function(selector) {
//   // 工厂模式
//   return new jQuery(selector);
// };
// console.log($("p"));
// console.log($("p").addClass);

// *********************************************************************** //

// class Car {
//   constructor(number, name) {
//     this.number = number;
//     this.name = name;
//   }
// }

// class Kuaiche extends Car {
//   constructor(number, name, price) {
//     super(number, name);
//     this.price = 1;
//   }
// }

// class Zhuanche extends Car {
//   constructor(number, name, price) {
//     super(number, name);
//     this.price = 2;
//   }
// }

// class Trip {
//   constructor(car) {
//     this.car = car;
//   }
//   start() {
//     console.log(
//       `行程开始，名称： ${this.car.name}， 车牌号： ${this.car.number}`
//     );
//   }
//   end() {
//     console.log(`行程结束， 价格：${this.car.price * 5}`);
//   }
// }

// let car = new Kuaiche(100, "雪铁龙");
// let trip = new Trip(car);
// trip.start();
// trip.end();

// *********************************************************************** //

// class Car {
//   constructor(num) {
//     this.num = num;
//   }
// }

// class Park {
//   constructor(floors) {
//     this.floors = floors || [];
//     this.camera = new Camera();
//     this.screen = new Screen();
//     this.carList = {}; // 存储摄像头拍摄返回的车辆信息
//   }

//   emptyNum() {
//     return this.floors
//       .map(floor => {
//         return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个空闲车位`;
//       })
//       .join("\n");
//   }

//   in(car) {
//     // 通过摄像头获取信息
//     const info = this.camera.shot(car);
//     // 听到某个停车位
//     const i = parseInt((Math.random() * 100) % 100);
//     const place = this.floors[0].places[i];
//     place.in();
//     info.place = place;
//     // 记录信息
//     this.carList[car.num] = info;
//   }

//   out(car) {
//     // 获取信息
//     const info = this.carList[car.num];
//     // 将停车位清空
//     const place = info.place;
//     place.out();
//     // 显示时间
//     this.screen.show(car, info.inTime);
//     // 清空记录
//     delete this.carList[car.num];
//   }
// }

// class Floor {
//   constructor(index, places) {
//     this.index = index;
//     this.places = places || [];
//   }

//   emptyPlaceNum() {
//     let num = 0;

//     this.places.forEach(place => {
//       if (place.empty) {
//         num++;
//       }
//     });

//     return num;
//   }
// }

// class Place {
//   constructor() {
//     this.empty = true;
//   }

//   in() {
//     this.empty = false;
//   }

//   out() {
//     this.empty = true;
//   }
// }

// class Camera {
//   constructor() {}

//   shot(car) {
//     return {
//       num: car.num,
//       inTime: Date.now()
//     };
//   }
// }

// class Screen {
//   constructor() {}

//   show(car, inTime) {
//     console.log("车牌号", car.num);
//     console.log("停车时间", Date.now() - inTime);
//   }
// }

// // 测试
// function initPark() {
//   const floors = [];
//   for (let i = 0; i < 3; i++) {
//     const places = [];
//     for (let j = 0; j < 100; j++) {
//       places[j] = new Place();
//     }
//     floors[i] = new Floor(i + 1, places);
//   }
//   return new Park(floors);
// }

// const park = initPark();

// const car1 = new Car(100);
// const car2 = new Car(200);
// const car3 = new Car(300);

// console.log("第一辆车进入");
// console.log(park.emptyNum());
// park.in(car1);
// console.log("第二辆车进入");
// console.log(park.emptyNum());
// park.in(car2);
// console.log("第一辆车离开");
// park.out(car1);
// console.log("第二辆车离开");
// park.out(car2);
// console.log("第三辆车进入");
// console.log(park.emptyNum());
// park.in(car3);
// setTimeout(() => {
//   console.log("第三辆车离开");
//   park.out(car3);
// }, 2000);

// *********************************************************************** //

// 工厂模式
// class Product {
//   constructor(name) {
//     this.name = name;
//   }
//   init() {}
//   fn1() {}
//   fn2() {}
// }

// class Creator {
//   create(name) {
//     return new Product(name);
//   }
// }

// let creator = new Creator();
// let p = creator.create("p1");
// console.log(p);

// *********************************************************************** //

// 单例模式
// class SingleObject {
//   login() {
//     console.log("login...");
//   }
// }
// SingleObject.getInstance = (function() {
//   let instance;
//   return function() {
//     if (!instance) {
//       instance = new SingleObject();
//     }
//     return instance;
//   };
// })();

// let obj1 = SingleObject.getInstance();
// obj1.login();
// let obj2 = SingleObject.getInstance();
// obj2.login();

// console.log("obj1 === obj2: ", obj1 === obj2);
// console.log("-----------分割线-----------");

// let obj3 = new SingleObject();
// console.log("obj1 === obj3: ", obj1 === obj3);

// 最后，完整的演示

// 登录框
// class LoginForm {
//   constructor() {
//     this.state = "hide";
//   }
//   show() {
//     if (this.state === "show") {
//       console.log("已经显示");
//       return;
//     }
//     this.state = "show";
//     console.log("登录框显示成功");
//   }
//   hide() {
//     if (this.state === "hide") {
//       console.log("已经隐藏");
//       return;
//     }
//     this.state = "hide";
//     console.log("登录框隐藏成功");
//   }
// }
// LoginForm.getInstance = (function() {
//   let instance;
//   return function() {
//     if (!instance) {
//       instance = new LoginForm();
//     }
//     return instance;
//   };
// })();

// let login1 = LoginForm.getInstance();
// login1.show();
// let login2 = LoginForm.getInstance();
// login2.show();
// console.log("login1 === login2: ", login1 === login2);

// 通用的惰性单例
// let getSingle = function(fn) {
//   let result;
//   return function() {
//     return result || (result = fn.apply(this, arguments));
//   };
// };

// let createLoginLayer = function() {
//   let div = document.createElement("div");
//   div.innerHTML = "通用的惰性单例";
//   div.style.display = "none";
//   document.body.appendChild(div);
//   return div;
// };

// let createSingleLoginLayer = getSingle(createLoginLayer);
// document.body.onclick = function() {
//   let loginLayer = createSingleLoginLayer();
//   loginLayer.style.display = "block";
// };

// *********************************************************************** //

// 适配器模式
// class Adaptee {
//   specificRequesn() {
//     return "德国标准的插头";
//   }
// }

// class Target {
//   constructor() {
//     this.adaptee = new Adaptee();
//   }
//   request() {
//     let info = this.adaptee.specificRequesn();
//     console.log(`${info} -> 转换器 -> 中国标准插头`);
//   }
// }

// let target = new Target();
// target.request();

// 示例2, 适配器转换将旧数据转换成新数据格式
// let getGuangdongCity = function() {
//   let guangdongCity = [
//     {
//       name: "shenzhen",
//       id: 11
//     },
//     {
//       name: "guangzhou",
//       id: 12
//     }
//   ];
//   return guangdongCity;
// };

// let render = function(fn) {
//   console.log("开始渲染广东地图");
//   document.write(JSON.stringify(fn()));
// };

// let addressAdapter = function(oldAddressfn) {
//   let address = {};
//   let oldAddress = oldAddressfn();

//   oldAddress.forEach(item => {
//     address[item.name] = item.id;
//   });
//   return function() {
//     return address;
//   };
// };
// render(addressAdapter(getGuangdongCity));

// *********************************************************************** //

// 装饰器模式
// class Circle {
//   draw() {
//     console.log("画一个圆形");
//   }
// }

// class Decorator {
//   constructor(circle) {
//     this.circle = circle;
//   }
//   draw() {
//     this.circle.draw();
//     this.setRedBorder(circle);
//   }
//   setRedBorder(circle) {
//     console.log("设置红色边框");
//   }
// }

// let circle = new Circle();
// circle.draw();

// let decorator = new Decorator(circle);
// decorator.draw();

// 示例一
// function testDec(target) {
//   target.isDec = true;
// }

// @testDec
// class Demo {
//   constructor() {}
// }
// console.log(Demo.isDec);

// 示例二
// function mixin(...list) {
//   return function(target) {
//     Object.assign(target.prototype, ...list);
//   };
// }
// const Foo = {
//   foo() {
//     console.log("foo");
//   }
// };
// @mixin(Foo)
// class MyClass {}

// new MyClass().foo();

// 示例三
// function readonly(target, name, descriptor) {
//   descriptor.writable = false;
//   return descriptor;
// }

// class Person {
//   constructor() {
//     this.first = "zhang";
//     this.last = "qi";
//   }

//   @readonly
//   name() {
//     return `${this.first} ${this.last}`;
//   }
// }
// let p = new Person();
// // 不能更改
// // p.name = function() {
// //   return this.first;
// // };
// console.log(p.name());

// 示例四
// function log(target, name, descriptor) {
//   let oldValue = descriptor.value;

//   descriptor.value = function() {
//     console.log(`Calling ${name} with`, [...arguments].join(", "));
//     return oldValue.apply(this, arguments);
//   };
// }

// class Math {
//   @log
//   add(a, b) {
//     return a + b;
//   }
// }

// const math = new Math();
// let result = math.add(2, 4);
// console.log(result);

// 示例五 (core-decorators)
// import {
//   readonly,
//   deprecate,
//   autobind,
//   override,
//   suppressWarnings
// } from "core-decorators";

// class Meal {
//   @readonly
//   entree() {
//     console.log("entree");
//   }
// }

// let dinner = new Meal();
// dinner.entree = "zhangqi";

// --------------------- //

// class Person {
//   @deprecate
//   faceplam() {}

//   @deprecate("We stopped facepalming")
//   faceplamHard() {}

//   @deprecate("We stopped facepalming", {
//     url: "http://knowyourmeme.com/memes/facepalm"
//   })
//   faceplamHarder() {}
// }
// let p = new Person();
// p.faceplam();
// p.faceplamHard();
// p.faceplamHarder();

// --------------------- //

// class Person {
//   @autobind
//   getPerson() {
//     return this;
//   }
// }
// let person = new Person();
// let getPerson = person.getPerson;
// console.log(getPerson() === person);

// *********************************************************************** //

// 代理模式
// class RealImg {
//   constructor(fileName) {
//     this.fileName = fileName;
//     this.loadFromDisk();
//   }
//   display() {
//     console.log("display... " + this.fileName);
//   }
//   loadFromDisk() {
//     console.log("loading... " + this.fileName);
//   }
// }
// class ProxyImg {
//   constructor(fileName) {
//     this.realImg = new RealImg(fileName);
//   }
//   display() {
//     this.realImg.display();
//   }
// }

// let proxyImg = new ProxyImg("1.jpg");
// proxyImg.display();

// ------------------ //
// let star = {
//   name: "zhangqi",
//   age: 33,
//   phone: "15900243148"
// };

// let agent = new Proxy(star, {
//   get: function(target, key) {
//     if (key === "phone") {
//       return "18611112222";
//     }
//     if (key === "price") {
//       return Math.pow(2, 18);
//     }
//     return target[key];
//   },
//   set: function(target, key, val) {
//     if (key === "customPrice") {
//       if (val < 100000) {
//         console.warn("价格太低");
//         return true;
//       } else {
//         target[key] = val;
//         return true;
//       }
//     }
//   }
// });

// console.log(agent.phone);
// console.log(agent.price);
// agent.customPrice = 10000;

// ---------虚拟代理--------- //
// let myImage = (function() {
//   let imgNode = document.createElement("img");
//   document.body.appendChild(imgNode);

//   return {
//     setSrc: function(src) {
//       imgNode.src = src;
//     }
//   };
// })();

// let proxyImg = (function() {
//   let img = new Image();
//   img.onload = function() {
//     myImage.setSrc(this.src);
//   };
//   return {
//     setSrc: function(src) {
//       myImage.setSrc("http://localhost:3000/images/you.jpg");
//       img.src = src;
//     }
//   };
// })();

// proxyImg.setSrc(
//   "http://img0.imgtn.bdimg.com/it/u=3726334667,3439228823&fm=26&gp=0.jpg"
// );

// ---------缓存代理--------- //
// let mult = function() {
//   console.log("开始计算乘积");
//   let a = 1;
//   for (let i = 0, l = arguments.length; i < l; i++) {
//     a *= arguments[i];
//   }
//   return a;
// };
// let proxyMult = (function() {
//   let cache = {};
//   return function() {
//     let args = [].join.call(arguments, ", ");
//     if (args in cache) {
//       return cache[args];
//     }
//     return (cache[args] = mult.apply(this, arguments));
//   };
// })();

// console.log(proxyMult(1, 2, 3, 4));
// console.log(proxyMult(1, 2, 3, 4));

// ---------高阶函数动态创建代理--------- //
// let createProxyFactory = function(fn) {
//   let cache = {};
//   return function() {
//     let args = [].join.call(arguments, ", ");
//     if (args in cache) {
//       return cache[args];
//     }
//     return (cache[args] = fn.apply(this, arguments));
//   };
// };

// *********************************************************************** //

// 观察者模式
// 主题，保存状态，状态变化之后触发所有观察者对象
// class Subject {
//   constructor() {
//     this.state = 0;
//     this.observers = [];
//   }
//   getState() {
//     return this.state;
//   }
//   setState(state) {
//     this.state = state;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     for (let i = 0, l = this.observers.length; i < l; i++) {
//       this.observers[i].update();
//     }
//   }
//   attach(observer) {
//     this.observers.push(observer);
//   }
// }
// // 观察者
// class Observer {
//   constructor(name, subject) {
//     this.name = name;
//     this.subject = subject;
//     this.subject.attach(this);
//   }
//   update() {
//     console.log(`${this.name} update, state: ${this.subject.getState()}`);
//   }
// }

// let subject = new Subject();
// let ob1 = new Observer("o1", subject);
// let ob2 = new Observer("o2", subject);
// let ob3 = new Observer("o3", subject);

// subject.setState(1);
// subject.setState(2);
// subject.setState(3);

// ------------------ //

// *********************************************************************** //
// 迭代器模式
// 1. 顺序遍历有序集合
// 2. 使用者不必知道集合的内部结构
// class Iterator {
//   constructor(container) {
//     this.list = container.list;
//     this.index = 0;
//   }
//   next() {
//     if (this.hasNext()) {
//       return this.list[this.index++];
//     }
//     return null;
//   }
//   hasNext() {
//     return this.index < this.list.length;
//   }
// }

// class Container {
//   constructor(list) {
//     this.list = list;
//   }

//   getIterator() {
//     return new Iterator(this);
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let c = new Container(arr);
// let it = c.getIterator();
// while (it.hasNext()) {
//   console.log(it.next());
// }

// -------------------------------------- //
// for...of
// function each(data) {
//   let iterator = data[Symbol.iterator]();

//   let item = { done: false };
//   while (!item.done) {
//     item = iterator.next();
//     if (!item.done) {
//       console.log(item);
//     }
//   }
// }
// each([1, 2, 3, 4]);
// each("abcd");
// let m = new Map();
// m.set("a", 100);
// m.set("b", 200);
// each(m);

// *********************************************************************** //
// 状态模式
// 状态
// class State {
//   constructor(color) {
//     this.color = color;
//   }
//   handle(context) {
//     console.log(`turn to ${this.color} light`);
//     context.setState(this);
//   }
// }

// // 主体
// class Context {
//   constructor() {
//     this.state = null;
//   }
//   getState() {
//     return this.state;
//   }
//   setState(state) {
//     this.state = state;
//   }
// }

// let context = new Context();
// let green = new State("green");
// let yellow = new State("yellow");
// let red = new State("red");

// green.handle(context);
// console.log(context.getState());
// yellow.handle(context);
// console.log(context.getState());
// red.handle(context);
// console.log(context.getState());

// -------------------------------------- //
// 有限状态机
// import StateMachine from "javascript-state-machine";

// let btn = document.getElementById("btn");

// const fsm = new StateMachine({
//   init: "收藏",
//   transitions: [
//     {
//       name: "doStore",
//       from: "收藏",
//       to: "取消收藏"
//     },
//     {
//       name: "deleteStore",
//       from: "取消收藏",
//       to: "收藏"
//     }
//   ],
//   methods: {
//     onDoStore() {
//       console.log("收藏成功");
//       updateText();
//     },
//     onDeleteStore() {
//       console.log("取消收藏成功");
//       updateText();
//     }
//   }
// });

// function updateText() {
//   btn.innerHTML = fsm.state;
// }

// btn.onclick = function() {
//   if (fsm.is("收藏")) {
//     fsm.doStore();
//   } else {
//     fsm.deleteStore();
//   }
// };
// updateText();

// -------------------------------------- //
// promise
// import StateMachine from "javascript-state-machine";

// const fsm = new StateMachine({
//   init: "pending",
//   transitions: [
//     {
//       name: "resolve",
//       from: "pending",
//       to: "fullfilled"
//     },
//     {
//       name: "reject",
//       from: "pending",
//       to: "rejected"
//     }
//   ],
//   methods: {
//     onResolve(state, data) {
//       // state 当前状态
//       // data 传递参数
//       data.successList.forEach(fn => fn());
//     },
//     onReject(state, data) {
//       data.failList.forEach(fn => fn());
//     }
//   }
// });

// class MyPromise {
//   constructor(fn) {
//     this.successList = [];
//     this.failList = [];

//     fn(
//       () => {
//         fsm.resolve(this);
//       },
//       () => {
//         fsm.reject(this);
//       }
//     );
//   }

//   then(successFn, failFn) {
//     this.successList.push(successFn);
//     this.failList.push(failFn);
//   }
// }

// function fn() {
//   return new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       // reject();
//     }, 1000);
//   });
// }
// let res = fn();
// res.then(
//   () => {
//     console.log("then success");
//   },
//   () => {
//     console.log("then fail");
//   }
// );
// res.then(
//   () => {
//     console.log("then success 2");
//   },
//   () => {
//     console.log("then fail 2");
//   }
// );

// *********************************************************************** //
// 原型模式
// 克隆自己，生成一个新对象
// let prototype = {
//   getName() {
//     console.log(this.first + " " + this.last);
//   },
//   say() {
//     console.log("hello");
//   }
// };

// let x = Object.create(prototype);
// x.first = "zhang";
// x.last = "qi";
// x.getName();
// x.say();

// let y = Object.create(prototype);
// x.first = "zhao";
// x.last = "jinge";
// x.getName();
// x.say();

// *********************************************************************** //
// 桥接模式

// *********************************************************************** //
// 组合模式

// *********************************************************************** //
// 享元模式
// 共享内存 | 相同数据，共享使用

// *********************************************************************** //
// 策略模式

// *********************************************************************** //
// 模板方法模式

// *********************************************************************** //
// 职责链模式
// class Action {
//   constructor(name) {
//     this.name = name;
//     this.nextAction = null;
//   }
//   setNextAction(action) {
//     this.nextAction = action;
//   }
//   handle() {
//     console.log(`${this.name} 审批`);
//     if (this.nextAction != null) {
//       this.nextAction.handle();
//     }
//   }
// }
// let a1 = new Action("组长");
// let a2 = new Action("经理");
// let a3 = new Action("总监");
// a1.setNextAction(a2);
// a2.setNextAction(a3);
// a1.handle();

// *********************************************************************** //
// 命令模式
// 接受者
// class Receiver {
//   exec() {
//     console.log("执行");
//   }
// }
// // 命令者
// class Command {
//   constructor(receiver) {
//     this.receiver = receiver;
//   }
//   cmd() {
//     console.log("触发命令");
//     this.receiver.exec();
//   }
// }
// // 触发者
// class Invoke {
//   constructor(command) {
//     this.command = command;
//   }
//   invoke() {
//     console.log("开始");
//     this.command.cmd();
//   }
// }
// let solider = new Receiver();
// let trumpeter = new Command(solider);
// let general = new Invoke(trumpeter);
// general.invoke();

// *********************************************************************** //
// 备忘录模式
// 状态备忘
// class Memento {
//   constructor(content) {
//     this.content = content;
//   }
//   getContent() {
//     return this.content;
//   }
// }
// // 备忘列表
// class CareTaker {
//   constructor() {
//     this.list = [];
//   }
//   add(memento) {
//     this.list.push(memento);
//   }
//   get(index) {
//     return this.list[index];
//   }
// }
// // 编辑器
// class Editor {
//   constructor() {
//     this.content = null;
//   }
//   setContent(content) {
//     this.content = content;
//   }
//   getContent() {
//     return this.content;
//   }
//   saveContentToMemento() {
//     return new Memento(this.content);
//   }
//   getContentFromMemento(memento) {
//     this.content = memento.getContent();
//   }
// }

// let editor = new Editor();
// let careTaker = new CareTaker();
// editor.setContent("111");
// editor.setContent("222");
// careTaker.add(editor.saveContentToMemento());
// editor.setContent("333");
// careTaker.add(editor.saveContentToMemento());
// editor.setContent("444");

// console.log(editor.getContent());
// editor.getContentFromMemento(careTaker.get(1));
// console.log(editor.getContent());
// editor.getContentFromMemento(careTaker.get(0));
// console.log(editor.getContent());

// *********************************************************************** //
// 中介者模式
// class Mediator {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   setA() {
//     let { number } = this.b;
//     this.a.setNumber(number * 100);
//   }
//   setB() {
//     let { number } = this.a;
//     this.b.setNumber(number / 100);
//   }
// }
// class A {
//   constructor() {
//     this.number = 0;
//   }
//   setNumber(num, m) {
//     this.number = num;
//     if (m) {
//       m.setB();
//     }
//   }
// }
// class B {
//   constructor() {
//     this.number = 0;
//   }
//   setNumber(num, m) {
//     this.number = num;
//     if (m) {
//       m.setA();
//     }
//   }
// }
// let a = new A();
// let b = new B();
// let m = new Mediator(a, b);
// a.setNumber(100, m);
// console.log(a.number, b.number);
// b.setNumber(100, m);
// console.log(a.number, b.number);

// *********************************************************************** //
// 访问者模式

// *********************************************************************** //
// 解释器模式

// *********************************************************************** //
// 实例
// import App from "./demo/app.js";

// let app = new App("app");
// app.init();
