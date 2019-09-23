import Vue from "vue";
import { Button, Layout, Icon } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);

Vue.component("Authorized", Authorized);
Vue.use(Auth);

const Iconfont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1431475_mb1njbkxas.js"
});
Vue.component("Iconfont", Iconfont);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
