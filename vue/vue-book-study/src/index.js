import Vue from "./vue";

const vm = new Vue({
  data: {
    name: "zhangqi",
    age: 30,
    // ??
    // wifes: ["zhaojinge"],
    // family: {
    //   wife: "zhaojinge",
    // },
  },
});
console.log(vm);

// vm.$watch(
//   "name",
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   },
//   { immediate: true }
// );
// vm.name = "mercury";

// const unwatch = vm.$watch(
//   (data) => {
//     return data.name + data.age;
//   },
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   },
//   { immediate: true }
// );
// vm.name = "mercury";
// vm.age = 100;
// unwatch();
// vm.age = 200;
