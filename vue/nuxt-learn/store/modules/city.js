const state = () => ({
  list: ['a']
})

const mutations = {
  add(state, list) {
    state.list.push(...list)
  }
}

const actions = {
  add: ({ commit }, list) => {
    commit('add', ...list)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
