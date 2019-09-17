import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

import "./assets/styles/reset.css";
import "./scss/index.scss";
import "element-ui/lib/theme-chalk/index.css";
// import store from "./store/index.js";
// import Vuex from "./common/min-vuex";
import Vuex from "./code-realize/store-1/store.js";

// Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const pageA = {
  state: {
    count: 100
  },
  mutations: {
    incrementA(state) {
      state.count++;
    }
  },
  actions: {
    incrementAAction(context) {
      setTimeout(() => {
        context.commit("incrementA");
      }, 1000);
    }
  }
};

const store = new Vuex.Store(
  {
    modules: {
      a: pageA
    },
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
    }
  },
  Vue
);

// Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
