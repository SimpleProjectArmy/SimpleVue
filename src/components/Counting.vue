<template>
  <div id="app">
    Clicked: {{ getLast }}times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">reset</button>
    <button @click="incrementByTwo(parseInt(value))">incrementByTwo</button>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  data() {
    return {
      value: 2
    }
  },
  computed: mapGetters(['evenOrOdd', 'getLast']),

  methods: {
    ...mapActions(['increment', 'decrement', 'incrementByTwo']),

    ...mapMutations(['reset'])
  }
}
</script>
