import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

import "./assets/styles/reset.css";
import "./scss/index.scss";
import "element-ui/lib/theme-chalk/index.css";
// import store from "./store/index.js";
import Vuex from "./common/min-vuex";

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0
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
  }
});

// Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
