<template>
  <div class="home_loged">
      <h1>Robotic Instructor: Página Principal</h1>
        <carrusel/>
  <tarjeta/>
  <router-view/>
  </div>
</template>

<script>
import carrusel from '@/components/carrusel.vue'
import tarjeta from '@/components/tarjeta_logeado.vue'
export default {
  name:'Home_loged',
  components:{
    carrusel,
    tarjeta
  }
}
</script>

<style>

</style>