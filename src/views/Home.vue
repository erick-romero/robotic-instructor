<template>
  <carrusel/>
  <h1>Robotic Instructor</h1>
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
