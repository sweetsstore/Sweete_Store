<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>
<script>
import bottomnav from '../src/components/bottomnav/bottomnav'
export default {
  name: 'App',
  components: {
    'bottom-nav': bottomnav
  }
}
</script>
<style>
*{
  margin:0;
  padding:0;
}
</style>
