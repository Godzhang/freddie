import Vue from "vue";
import App from "./app.vue";
import { Button } from "view-design";
import "view-design/dist/styles/iview.css";

Vue.component("i-button", Button);

new Vue({
  el: "#app",
  render: h => h(App)
});
