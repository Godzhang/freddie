import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import Vuex from "vuex";

import "./assets/styles/reset.css";
import "./scss/index.scss";
import "element-ui/lib/theme-chalk/index.css";
// import store from "./store/index.js";
// import Vuex from "./common/min-vuex";
// import Vuex from "./code-realize/store-1/store.js";
import Code from "./utils/test";
import VuexPlugin from "./utils/vuex-plugin";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);
Vue.use(Vuex);
Vue.use(Code);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const pageA = {
  state: {
    count: 100
  },
  mutations: {
    incrementA(state) {
      state.count++;
    },
    incrementD(state, num) {
      state.count += num;
    }
  },
  actions: {
    incrementAAction(context) {
      setTimeout(() => {
        context.commit("incrementA");
      }, 1000);
    }
  },
  modules: {
    b: {
      state: {
        count: 200
      },
      mutations: {
        incrementB(state) {
          state.count++;
        }
      },
      actions: {
        incrementBAction(context) {
          setTimeout(() => {
            context.commit("incrementB");
          }, 1000);
        }
      },
      modules: {
        d: {
          state: {
            count: 300
          },
          mutations: {
            incrementD(state, num) {
              state.count += num;
            }
          },
          actions: {
            incrementDAction(context, num) {
              setTimeout(() => {
                context.commit("incrementD", num);
              }, 1000);
            }
          }
        }
      }
    },
    c: {
      state: {
        count: 300
      },
      mutations: {
        incrementC(state) {
          state.count++;
        }
      },
      actions: {
        incrementCAction(context) {
          setTimeout(() => {
            context.commit("incrementC");
          }, 1000);
        }
      }
    }
  }
};

const store = new Vuex.Store(
  {
    // modules: {
    //   a: pageA
    // },
    state: {
      count: 1
    },
    getters: {
      doubleCount(state) {
        return state.count * 2;
      }
    },
    mutations: {
      increment(state) {
        state.count++;
      }
    },
    actions: {
      addCount(context) {
        setTimeout(() => {
          context.commit("increment");
        }, 1000);
      }
    },
    plugins: [VuexPlugin]
  },
  Vue
);

// Vue.prototype.$store = store;

const vm = new Vue({
  router,
  store,
  code: 1,
  render: h => h(App)
});

// console.log(vm);

vm.$mount("#app");
