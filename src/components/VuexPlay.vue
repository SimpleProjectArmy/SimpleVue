<template>
  <div>
    TEST
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Display from './vuex/Display'
import Increment from './vuex/Increment'
export default {
  name: 'VuexPlay',
  components: {
    Display: Display,
    Increment: Increment
  }
}
</script>
