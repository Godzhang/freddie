import $ from "jquery";
import { GET_LIST } from "../config/config";
import createItem from "./CreateItem";

export default class List {
  constructor(app) {
    this.app = app;
    this.$el = $("<div></div>");
  }

  loadData() {
    // 返回 Promise 实例
    return fetch(GET_LIST).then(result => {
      return result.json();
    });
  }

  initItemList(data) {
    data.forEach(itemData => {
      let item = createItem(this, itemData);
      item.init();
    });
  }

  render() {
    this.app.$el.append(this.$el);
  }

  init() {
    this.loadData()
      .then(data => {
        this.initItemList(data);
      })
      .then(() => {
        this.render();
      });
  }
}
