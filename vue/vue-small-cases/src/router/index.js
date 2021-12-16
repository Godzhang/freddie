import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import smallCaseRoutes from "./smallCaseRoutes";
import Scroll from "../views/Scroll.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: smallCaseRoutes
  },
  {
    path: "/scroll",
    component: Scroll
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  routes
});

export default router;
