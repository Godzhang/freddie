import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Country from "../views/Country.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/country",
    component: Country
  }
];

const router = new VueRouter({
  routes
});

export default router;
