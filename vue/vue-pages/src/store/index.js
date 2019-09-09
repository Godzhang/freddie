import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groups: [1]
  },
  modules: {},
  actions: {},
  mutations: {},

  getters: {
    getGroups(state) {
      return state.groups;
    }
  }
});
