import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import smallCaseRoutes from "./smallCaseRoutes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: smallCaseRoutes
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
