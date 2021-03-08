<template>
  <appNavBar/>
  <carrusel/>
  <tarjeta/>
</template>

<script>
import appNavBar from './components/appNavBar.vue'
import carrusel from './components/carrusel.vue'
import tarjeta from './components/tarjeta.vue'

export default {
  name: 'App',
  components: {
    appNavBar,
    carrusel,
    tarjeta
  }
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


</style>
