<template>
  <div id="app">
    <router-view/>
</div>
</template>

<script>
import bottomnav from './components/bottomnav/bottomnav'
export default {
  name: 'App',
  components: {
    bottomnav: bottomnav
  }
}
</script>

<style>
body{
  margin: 0;
}
/* #app {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
