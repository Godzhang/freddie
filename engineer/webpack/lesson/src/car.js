const { SyncHook, AsyncSeriesHook } = require("tapable");

class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(["newspeed"]),
      brake: new SyncHook(),
      calculateRoutes: new AsyncSeriesHook(["source", "target", "routesList"])
    };
  }
}

const car = new Car();

car.hooks.brake.tap("warningLampPlugin", () =>
  console.log("warningLampPlugin")
);

car.hooks.accelerate.tap("loggerPlugin", newSpeed =>
  console.log(`accelerate to ${newSpeed}`)
);

car.hooks.calculateRoutes.tapPromise(
  "calculateRoutes tapPromise",
  (source, target, routesList) => {
    console.log("source", source);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`tapPromise to ${source}, ${target}, ${routesList}`);
        resolve();
      }, 1000);
    });
  }
);

car.hooks.brake.call();
car.hooks.accelerate.call(10);

console.time("cost");

car.hooks.calculateRoutes.promise("async", "hook", "demo").then(
  () => {
    console.timeEnd("cost");
  },
  error => {
    console.error(error);
    console.timeEnd("cost");
  }
);
