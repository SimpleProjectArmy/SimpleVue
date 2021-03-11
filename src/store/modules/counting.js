const state = {
  count: 0
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement')
}

const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  getLast: (state) => state.count
}

export default {
  state,
  getters,
  actions,
  mutations
}
