import base from "./base";
import axios from "../http/http";
import qs from "qs";

const article = {
  articleList() {
    return axios.get(`${base.sq}/topics`);
  }
};
