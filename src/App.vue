<template>
  <div id="app">
    <!-- <test></test> -->
    <gmaptest></gmaptest>
  </div>
</template>

<script>

import test from './components/test'
import gmaptest from './components/gmaptest'

export default {
  name: 'app',
  components: {
    test,
    gmaptest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 60px;
}
</style>
