// import $ from "jquery";

// $(".app").css({ color: "red" });

globalLib({ x: 1 });
globalLib.doSomething();

// import moduleLib from "./module-lib";

// moduleLib({ x: 1 });

// import umdLib from "./umd-lib";

// console.log(umdLib);
// umdLib.doSomething();

// import m from "moment";
// declare module "moment" {
//   export function myFunction(): void;
// }

// m.myFunction = () => {};

export {};
declare global {
  namespace globalLib {
    function doAnything(): void;
  }
}
globalLib.doAnything = () => {};
