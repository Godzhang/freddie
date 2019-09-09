import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let base = `${process.env.BASE_URL}`;

let router = new Router({
  mode: "history",
  base: base,
  routes: []
});

export default router;
