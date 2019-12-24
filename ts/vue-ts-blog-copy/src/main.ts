import Vue from "vue";
import App from "./App.vue";
import Component from "vue-class-component";
import router from "./router";
import store from "./store";
import service from "./utils/https";
import urls from "./utils/urls";
import "./element";

Vue.config.productionTip = false;

Vue.prototype.$http = service;
Vue.prototype.urls = urls;

Component.registerHooks([
  "beforeRouterEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate"
]);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
