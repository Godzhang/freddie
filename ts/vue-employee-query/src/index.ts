// const hello: string = "hello typescript";
// document.querySelectorAll(".app")[0].innerHTML = hello;

import Vue from "vue";

import EmployeeQuery from "./components/EmployeeQuery.vue";

// let app1 = new Vue({
//   el: ".app",
//   data: { name: "TypeScript" },
//   template: `<h1>Hello {{ name }}</h1>`
// });

let app2 = new Vue({
  el: ".app",
  data: {
    name: "EmployeeQuery",
    selected: 1,
    department: [{ department: "zhangqi", departmentId: 1 }]
  },
  template: `<EmployeeQuery @query="getParam" :department="department" />`,
  components: { EmployeeQuery }
});
