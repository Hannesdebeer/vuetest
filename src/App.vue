<template>
  <div id="app">
    <header></header>
    <test></test>
  </div>
</template>

<script>

import header from './components/header';
import test from './components/test';



export default {
  name: 'app',
  components: {
    header,
    test
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
  padding:0px;

}
</style>
