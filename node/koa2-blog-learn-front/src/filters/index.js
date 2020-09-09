import Vue from "vue";
import { dateFormatter } from "./dateFormatter";

Vue.filter("dateFormatter", dateFormatter);
