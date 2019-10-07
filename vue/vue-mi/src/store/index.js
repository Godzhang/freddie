import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    msg: "zhangqi",
    userInfo: {
      name: "zhangqi",
      email: "zhangqijilindaxue@126.com"
    },
    todo: {
      1: [1, 2, 3],
      2: [1, 2, 3, 4, 5]
    }
  },
  getters: {
    getTodoById: state => id => {
      return state.todo[id];
    }
  },
  mutations: {
    updateMessage(state, msg) {
      state.msg = msg;
    }
  },
  actions: {
    rootActions() {
      console.log("rootactions");
    }
  },
  modules: {
    cart,
    products
  }
});
