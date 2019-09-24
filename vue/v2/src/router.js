import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
const Home = () => import(/* webpackChunkName:'home' */ "./page/Home.vue");
const Queen = () => import(/* webpackChunkName:'queen' */ "./page/Queen.vue");
const Vuex = () => import(/* webpackChunkName:'vuex' */ "./page/Vuex.vue");
const Parent = () =>
  import(/* webpackChunkName:'parent' */ "./page/Parent.vue");
const Rotary = () =>
  import(/* webpackChunkName:'rotary' */ "./page/rotary/Rotary.vue");
const RotaryChild1 = () =>
  import(
    /* webpackChunkName:'rotaryChild1' */ "./page/rotary/RotaryChild1.vue"
  );
const RotaryChild2 = () =>
  import(
    /* webpackChunkName:'rotaryChild2' */ "./page/rotary/RotaryChild2.vue"
  );

Vue.use(Router);

let base = `${process.env.BASE_URL}`;

export default new Router({
  mode: "history",
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
        }
      ]
    },
    {
      path: "/queen",
      component: Queen
    },
    {
      path: "/vuex",
      component: Vuex
    },
    {
      path: "/parent",
      component: Parent
    },
    {
      path: "/rotary",
      component: Rotary
    },
    {
      path: "/rotarychild1",
      component: RotaryChild1
    },
    {
      path: "/rotarychild2",
      component: RotaryChild2
    }
  ]
});
