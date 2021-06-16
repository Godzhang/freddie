import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    btnPremission: {
      add: true,
      edit: false,
      delete: true
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
