import $ from "jquery";
import getCart from "../ShoppingCart/GetCart";

export default class ShoppingCart {
  constructor(app) {
    this.$el = $(`<div></div>`).css({
      "padding-bottom": "10px",
      "border-bottom": "1px solid #ccc"
    });
    this.app = app;
    this.cart = getCart();
  }

  initBtn() {
    let $btn = $("<button>购物车</button>");
    $btn.click(() => {
      this.showCart();
    });
    this.$el.append($btn);
  }

  showCart() {
    console.log(this.cart.getList());
  }

  render() {
    this.app.$el.append(this.$el);
  }

  init() {
    this.initBtn();
    this.render();
  }
}
