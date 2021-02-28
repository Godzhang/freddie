import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Frappe from "../views/Frappe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/frappe",
    component: Frappe,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
