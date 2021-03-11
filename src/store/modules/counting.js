const state = {
  count: 0
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  reset(state) {
    state.count = 0
  },
  incrementByMe(state, payload) {
    state.count += payload
  }
}

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementByMe: ({commit}) => commit('decrement')
}

const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  getLast: (state) => state.count
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
