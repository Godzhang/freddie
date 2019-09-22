import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/UserLayout.vue"),
      isHiddenInMenu: true,
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login.vue")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register.vue")
        }
      ]
    },
    {
      path: "/",
      meta: { authority: ["user", "admin"] },
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        // dashboard
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页" },
              component: () =>
                import(
                  /* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis"
                )
            }
          ]
        },
        // form
        {
          path: "/form",
          name: "form",
          component: { render: h => h("router-view") },
          meta: { icon: "form", title: "表单", authority: ["admin"] },
          children: [
            {
              path: "/form/basic-form",
              name: "basicform",
              meta: { title: "基础表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm")
            },
            {
              path: "/form/step-form",
              name: "stepform",
              hideChildrenInMenu: true,
              meta: { title: "分布表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1"
                    )
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2"
                    )
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3"
                    )
                }
              ]
            }
          ]
        },
        // Exception
        {
          path: "/exception",
          name: "exception",
          component: { render: h => h("router-view") },
          redirect: "/exception/403",
          meta: { title: "异常页", icon: "warning", authority: ["admin"] },
          children: [
            {
              path: "/exception/403",
              name: "exception403",
              component: () =>
                import(
                  /* webpackChunkName: "exception" */ "@/views/Exception/403"
                ),
              meta: { title: "403" }
            },
            {
              path: "/exception/404",
              name: "exception404",
              component: () =>
                import(
                  /* webpackChunkName: "exception" */ "@/views/Exception/404"
                ),
              meta: { title: "404" }
            },
            {
              path: "/exception/500",
              name: "exception500",
              component: () =>
                import(
                  /* webpackChunkName: "exception" */ "@/views/Exception/500"
                ),
              meta: { title: "500" }
            }
          ]
        },
        // Profile
        {
          path: "/profile",
          name: "profile",
          component: { render: h => h("router-view") },
          redirect: "/profile/basic",
          meta: { title: "详情页", icon: "profile", authority: ["admin"] },
          children: [
            {
              path: "/profile/basic",
              name: "basic",
              component: () =>
                import(
                  /* webpackChunkName: "profile" */ "@/views/Profile/BasicProfile"
                ),
              meta: { title: "基础详情页" }
            },
            {
              path: "/profile/advanced",
              name: "advanced",
              component: () =>
                import(
                  /* webpackChunkName: "profile" */ "@/views/Profile/AdvancedProfile"
                ),
              meta: { title: "高级详情页" }
            }
          ]
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
