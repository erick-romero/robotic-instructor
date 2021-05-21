<template>
  <carrusel/>
  <div style="background-color:#00A8A8; color:white; font-size:30px;">
    Bienvenido a Robotic Instructor. Esta pagina fue diseñada para el aprenizaje de distintos temas de robotica
  </div> 
  <div style="background-color:#00A8A8;  color:white; font-size:30px;">
    Selecciona alguno de los bloques de abajo para comenzar tu viaje de aprendizaje
  </div> 
  <tarjeta/>
  <router-view/>
</template>




<script>
// @ is an alias to /src



import carrusel from '@/components/carrusel.vue'
import tarjeta from '@/components/tarjeta.vue'

export default 
{
  name: 'Home',
  components: {
    carrusel,
    tarjeta
  }
}


</script>
