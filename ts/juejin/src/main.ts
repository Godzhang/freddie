import Vue from "vue";
import router from "@/router";
import App from "@/App.vue";
import "@/iview";
import "@/icons";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
