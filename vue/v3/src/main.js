import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

import "./assets/styles/reset.css";
import "./scss/index.scss";

Vue.use(Vuex);
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  render: h => h(App)
});

// console.log(vm);

vm.$mount("#app");
