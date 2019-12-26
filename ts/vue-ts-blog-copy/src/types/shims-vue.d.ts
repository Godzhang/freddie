import { AxiosInstance } from "axios";
import { Urls } from "../utils/urls";
import VueRouter, { Route } from "vue-router";
import Vue from "vue";

declare module "*.vue" {
  export default Vue;
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $http: AxiosInstance;
    $urls: Urls;
  }
}
