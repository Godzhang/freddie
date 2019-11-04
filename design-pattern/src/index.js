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
