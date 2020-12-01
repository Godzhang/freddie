import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lib from "../views/Lib.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/lib",
    name: "Lib",
    component: Lib
  }
];

const router = new VueRouter({
  routes
});

export default router;
