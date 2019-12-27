import Vue from "vue";
import { Button, Layout, Header, Sider, Content } from "view-design";
import "./iview-var.less";
import "view-design/dist/styles/iview.css";
import "./iview-override.less";

Vue.component("Button", Button);
Vue.component("Layout", Layout);
Vue.component("Header", Header);
Vue.component("Sider", Sider);
Vue.component("Content", Content);
