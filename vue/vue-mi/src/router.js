/*
 * @Author: 张奇
 * @Date: 2019-10-01 07:52:01
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-06 09:38:39
 * @Description: file content
 */
import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
const Home = () => import(/* webpackChunkName:'home' */ "./page/Home.vue");
const SingleHome = () =>
  import(/* webpackChunkName:'singlehome' */ "./page/SingleHome.vue");
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
          path: "singlehome",
          component: SingleHome
        },
        {
          path: "test",
          component: Test
        }
      ]
    }
  ]
});
