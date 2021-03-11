<template>
  <div id="app">
    Clicked: {{ getLast }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters(['evenOrOdd', 'getLast']),
  methods: mapActions(['increment'])
}
</script>
