import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import { Button, Table } from "view-design";
import "view-design/dist/styles/iview.css";

Vue.component("Button", Button);
Vue.component("Table", Table);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
