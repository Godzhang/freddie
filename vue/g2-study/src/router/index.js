import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BasicBar from "../views/BasicBar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/basic-bar",
    component: BasicBar,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
