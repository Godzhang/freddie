import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Edit from "../views/Edit.vue";
import Show from "../views/Show";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit
  },
  {
    path: "/show/:id",
    name: "Show",
    component: Show
  }
];

const router = new VueRouter({
  routes
});

export default router;
