import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'zhangqi'
  },
  getters: {},
  mutations: {
    setName (state, name) {
      state.name = name
    }
  },
  actions: {}
})
