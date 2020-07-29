import Vue from "./vue";

const vm = new Vue({
  data: {
    name: "zhangqi",
    age: 30,
    // wifes: ["zhaojinge"],
    family: {
      wife: "zhaojinge",
    },
  },
});
// vm.$watch("family", (newVal, oldVal) => console.log(newVal, oldVal));
// vm.wifes = { name: "jdfi" };
// const w = vm.wifes;

// vm.name = "zhaojinge";
// console.log(vm.data.name);

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
