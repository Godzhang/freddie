import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
const Home = () => import(/* webpackChunkName:'home' */ "./page/Home.vue");
const Layout = () => import(/* webpackChunkName:'home' */ "./page/Layout.vue");
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
      path: "/home",
      name: "home",
      components: { default: Home },
      alias: "/main",
      children: [
        {
          path: "chaoyang",
          name: "chaoyang",
          component: Chaoyang,
          meta: { routeName: "chaoyang" }
        }
      ]
    },
    {
      path: "/layout",
      name: "layout",
      components: Layout,
      meta: { scrollToTop: true }
    },
    {
      path: "/user/:id",
      name: "user",
      component: User,
      // props: true
      // props: { newsletterPopup: false }
      props: route => {
        return { newsletterPopup: false };
      }
    },
    // {
    //   path: "/animate",
    //   name: "animate",
    //   component: Animate
    // },
    // {
    //   path: "/filter",
    //   name: "filter",
    //   component: Filter
    // },
    {
      path: "*",
      redirect: "/main"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   const position = {}
    //   if (to.hash) {
    //     position.selector = to.hash
    //     if (to.hash === '#')
    //   }
    // }
    console.log(savedPosition);
    return savedPosition;
  }
});

router.beforeEach((to, from, next) => {
  console.log("router before each");
  next();
});

export default router;
