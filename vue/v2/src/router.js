import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
const Home = () => import(/* webpackChunkName:'home' */ "./page/Home.vue");
const Queen = () => import(/* webpackChunkName:'queen' */ "./page/Queen.vue");
const Vuex = () => import(/* webpackChunkName:'vuex' */ "./page/Vuex.vue");
const Parent = () =>
  import(/* webpackChunkName:'parent' */ "./page/Parent.vue");

const CodeView = () =>
  import(/* webpackChunkName:'codeView' */ "./page/CodeView.vue");
const Test = () => import(/* webpackChunkName:'test' */ "./page/Test.vue");

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
        },
        {
          path: "queen",
          component: Queen
        },
        {
          path: "vuex",
          component: Vuex
        },
        {
          path: "parent",
          component: Parent
        },
        {
          path: "codeview",
          component: CodeView
        },
        {
          path: "test",
          component: Test
        },
        {
          path: "scroll",
          component: () =>
            import(/* webpackChunkName:'scroll' */ "./page/ScrollDemo.vue")
        }
      ]
    }
  ]
});
