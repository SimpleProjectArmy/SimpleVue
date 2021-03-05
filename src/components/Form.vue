<template>
  <div>
    {{ getName() }}
    <input type="text" name="" v-bind:value="age" />
    <button type="button" name="button" @click="add()">Add</button>
    <button type="button" name="button" @click="minus()">minus</button>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data: () => {
    return {
      name: 'Army',
      status: 'int',
      age: 20
    }
  },
  methods: {
    getName() {
      return this.name
    },
    add() {
      this.age++
      console.log(this.age)
    },
    minus() {
      this.age--
      console.log(this.age)
    }
  }
}
</script>
