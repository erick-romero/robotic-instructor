<template>
  <div class="home_loged">
      <h1>Robotic Instructor: Página Principal</h1>
        <carrusel/>
        <div style="background-color:#00A8A8; color:white; font-size:30px;">
    Bienvenido a Robotic Instructor. Esta pagina fue diseñada para el aprendizaje de distintos temas de robotica
  </div> 
  <div style="background-color:#00A8A8;  color:white; font-size:30px;">
    Seleccion alguno de los bloques de abajo para comenzar tu viaje de aprendizaje
  </div>
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