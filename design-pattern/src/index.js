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

class Park {
  constructor() {}
}
