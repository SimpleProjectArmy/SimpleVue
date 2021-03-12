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
  incrementByTwo(state, payload) {
    state.count += payload
  },
  autoDecrement(state) {
    state.count -= 22
  },
  mutipleValue(state, payload) {
    state.count *= 7
  }
}

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementByTwo: (context, value) => {
    // getters: {…}, state: {…}, rootGetters: {…}, dispatch: ƒ, commit: ƒ
    context.commit('incrementByTwo', value)
  },
  autoDecrement: ({commit}) => commit('autoDecrement'),
  mutipleValue: ({commit}) => commit('mutipleValue')
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
