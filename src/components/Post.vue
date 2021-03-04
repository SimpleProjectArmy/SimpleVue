<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ todos }}</h2>
    <h1>{{ message }}</h1>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      msg: "Post Post Post",
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ],
      message: "Hello Vue.js!"
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
