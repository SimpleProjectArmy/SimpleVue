<template>
  <div id="app">
    Clicked: {{ getLast }} times, state={{ count }} count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">reset</button>
    <button @click="incrementByTwo(parseInt(value))">incrementByTwo</button>
    <input type="number" v-model="mutiple" />
    <button @click="mutipleValue">mutipleValue</button>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
export default {
  data() {
    return {
      value: 2,
      mutiple: 7
    }
  },
  computed: {
    ...mapGetters(['evenOrOdd', 'getLast']),
    ...mapState({count: (state) => state.counting.count})
  },

  methods: {
    ...mapActions(['increment', 'decrement', 'incrementByTwo']),

    ...mapMutations(['reset']),
    mutipleValue() {
      this.$store.dispatch('mutipleValue')
    }
  },
  created() {
    this.$store.dispatch('autoDecrement')
  }
}
</script>
