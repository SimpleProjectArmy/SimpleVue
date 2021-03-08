<template>
  <div>
    TEST
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Display from './vnex/Display'
import Increment from './vnex/Increment'
export default {
  name: 'VuexPlay',
  components: {
    Display,
    Increment
  }
}
</script>
