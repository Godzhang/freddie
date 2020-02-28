import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/keep-alive/test1"
  },
  {
    path: "/keep-alive",
    component: () =>
      import(
        /* webpackChunkName:'keep-alive' */ "../views/keep-alive/Home.vue"
      ),
    children: [
      {
        path: "test1",
        component: () =>
          import(
            /* webpackChunkName:'keep-alive-test1' */ "../views/keep-alive/test-1/Test1.vue"
          )
      },
      {
        path: "test2",
        component: () =>
          import(
            /* webpackChunkName:'keep-alive-test2' */ "../views/keep-alive/test-2/Test2.vue"
          ),
        redirect: "child1",
        children: [
          {
            path: "child1",
            name: "child1",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test2-child1' */ "../views/keep-alive/test-2/Child1.vue"
              ),
            meta: {
              keepAlive: true
            }
          },
          {
            path: "child2",
            name: "child2",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test2-child2' */ "../views/keep-alive/test-2/Child2.vue"
              )
            // meta: {
            //   keepAlive: false
            // }
          },
          {
            path: "child3",
            name: "child3",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test2-child3' */ "../views/keep-alive/test-2/Child3.vue"
              )
            // meta: {
            //   keepAlive: true
            // }
          }
        ]
      },
      {
        path: "test3",
        component: () =>
          import(
            /* webpackChunkName:'keep-alive-test3' */ "../views/keep-alive/test-3/Test3.vue"
          ),
        redirect: "test3/child1",
        children: [
          {
            path: "child1",
            name: "child1",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test3-child1' */ "../views/keep-alive/test-3/Child1.vue"
              ),
            meta: {
              keepAlive: true
            }
          },
          {
            path: "child2",
            name: "child2",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test3-child2' */ "../views/keep-alive/test-3/Child2.vue"
              ),
            meta: {
              keepAlive: true
            }
          },
          {
            path: "child3",
            name: "child3",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test3-child3' */ "../views/keep-alive/test-3/Child3.vue"
              ),
            meta: {
              keepAlive: true
            }
          }
        ]
      },
      {
        path: "test4",
        component: () =>
          import(
            /* webpackChunkName:'keep-alive-test4' */ "../views/keep-alive/test-4/Test4.vue"
          ),
        redirect: "test4/child1",
        children: [
          {
            path: "child1",
            name: "child1",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test4-child1' */ "../views/keep-alive/test-4/Child1.vue"
              )
          },
          {
            path: "child2",
            name: "child2",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test4-child2' */ "../views/keep-alive/test-4/Child2.vue"
              )
          }
        ]
      },
      {
        path: "test5",
        component: () =>
          import(
            /* webpackChunkName:'keep-alive-test5' */ "../views/keep-alive/test-5/Test5.vue"
          ),
        redirect: "test5/child1",
        children: [
          {
            path: "child1",
            name: "test5-child1",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test5-child1' */ "../views/keep-alive/test-5/Child1.vue"
              ),
            meta: {
              level: 1,
              keepAlive: true
            }
          },
          {
            path: "child2",
            name: "test5-child2",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test5-child2' */ "../views/keep-alive/test-5/Child2.vue"
              ),
            meta: {
              level: 2,
              keepAlive: false
            }
          },
          {
            path: "child3",
            name: "test5-child3",
            component: () =>
              import(
                /* webpackChunkName:'keep-alive-test3-child3' */ "../views/keep-alive/test-5/Child3.vue"
              ),
            meta: {
              level: 3,
              keepAlive: true
            }
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

// 前进刷新，后退不刷新，配合 keep-alive 使用
// const pathStack = [];
// router.beforeEach((to, from, next) => {
//   if (pathStack.length && pathStack[pathStack.length - 1] === to.path) {
//     // 后退
//     to.meta.keepAlive = true;
//     pathStack.pop();
//   } else {
//     // 前进
//     to.meta.keepAlive = false;
//     pathStack.push(from.path);
//   }

//   next();
// });

export default router;
