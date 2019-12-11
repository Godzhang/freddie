import Vue from "vue";
import VueRouter from "vue-router";

import App from "../views/App";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "",
      component: App,
      redirect: "/home",
      children: [
        {
          path: "home",
          component: () => import("@/views/Home")
        },
        {
          path: "a",
          component: () => import("@/views/A")
        },
        {
          path: "tableslot",
          component: () => import("@/views/TableSlot")
        },
        {
          path: "tree",
          component: () => import("@/views/TreeRender")
        },
        {
          path: "animate",
          component: () => import("@/views/animate/Animate"),
          children: [
            {
              path: "roughViz",
              component: () => import("@/views/animate/RoughViz")
            }
          ]
        }
      ]
    }
  ]
});
