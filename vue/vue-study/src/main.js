import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import audio from "@/common/utils/audio";
import orientation from "@/common/utils/orientation";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);
Vue.use(audio);
Vue.use(orientation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
