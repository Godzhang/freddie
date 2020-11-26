import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Layout from "./page/Layout.vue";
const Home = () => import(/* webpackChunkName:'home' */ "./page/Home.vue");
// const Layout = () => import(/* webpackChunkName:'home' */ "./page/Layout.vue");
const User = () => import(/* webpackChunkName:'user' */ "./page/User.vue");
const ViewA = () => import(/* webpackChunkName:'ViewA' */ "./page/View-a.vue");
const ViewB = () => import(/* webpackChunkName:'ViewB' */ "./page/View-b.vue");
const Chaoyang = () =>
  import(/* webpackChunkName:'haoyang' */ "./page/Chaoyang.vue");
const Filter = () => import(/* webpackChunkName:'home' */ "./page/Filter.vue");
const Animate = () =>
  import(/* webpackChunkName:'animate' */ "./page/Animate.vue");

Vue.use(Router);

let base = `${process.env.BASE_URL}`;

const router = new Router({
  mode: "hash",
  base,
  routes: [
    {
      path: "/page1",
      component: () => import(/* webpackChunkName:'page1' */ "./page/Page1.vue")
    },
    {
      path: "/page2",
      component: () => import(/* webpackChunkName:'page2' */ "./page/Page2.vue")
    },
    // {
    //   path: "/home",
    //   name: "home",
    //   components: { default: Home },
    //   alias: "/main",
    //   children: [
    //     {
    //       path: "chaoyang",
    //       name: "chaoyang",
    //       component: Chaoyang,
    //       meta: { routeName: "chaoyang" }
    //     }
    //   ]
    // },
    // {
    //   path: "/layout",
    //   name: "layout",
    //   component: Layout,
    //   meta: { scrollToTop: true }
    // },
    // {
    //   path: "/user/:id",
    //   name: "user",
    //   component: User,
    //   props: route => {
    //     return { newsletterPopup: false };
    //   }
    // },
    {
      path: "*",
      redirect: "/page1"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});

export default router;
