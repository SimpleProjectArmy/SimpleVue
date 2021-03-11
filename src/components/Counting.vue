<template>
  <div id="app">
    Clicked: {{ getLast }}times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  computed: mapGetters(['evenOrOdd', 'getLast']),

  methods: {
    ...mapActions(['increment', 'decrement']),

    ...mapMutations(['reset'])
  }
}
</script>
