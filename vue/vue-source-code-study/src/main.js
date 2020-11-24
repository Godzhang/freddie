import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./assets/styles/reset.css";
import "./scss/index.scss";
import "animate.css";

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  render: h => h(App)
});

// console.log(vm);

vm.$mount("#app");
