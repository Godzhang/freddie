import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
const Home = () => import(/* webpackChunkName:'home' */ "./page/Home.vue");
const Layout = () => import(/* webpackChunkName:'home' */ "./page/Layout.vue");
const Filter = () => import(/* webpackChunkName:'home' */ "./page/Filter.vue");
const Animate = () =>
  import(/* webpackChunkName:'animate' */ "./page/Animate.vue");

Vue.use(Router);

let base = `${process.env.BASE_URL}`;

export default new Router({
  mode: "hash",
  base,
  routes: [
    {
      path: "/",
      name: "app",
      component: App,
      redirect: "home",
      children: [
        {
          path: "home",
          component: Home
        },
        {
          path: "layout",
          component: Layout
        },
        {
          path: "animate",
          component: Animate
        },
        {
          path: "filter",
          component: Filter
        }
      ]
    }
  ]
});
