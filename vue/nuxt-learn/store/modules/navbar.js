const state = () => ({
  app: []
})

const mutations = {
  add(state, item) {
    state.app.push(item)
  }
}

const actions = {
  add: ({ commit }, item) => {
    commit('add', item)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
