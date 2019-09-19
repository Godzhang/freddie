import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

import "./assets/styles/reset.css";
import "./scss/index.scss";
import "element-ui/lib/theme-chalk/index.css";
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");