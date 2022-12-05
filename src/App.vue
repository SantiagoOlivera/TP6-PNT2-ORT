<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <RGBColorGame />
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */

import RGBColorGame from './components/RGBColorGame.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld
    RGBColorGame,
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
html{
  background: #232323;
}
*, body{
  box-sizing: border-box;
  margin: 0;
}
</style>
