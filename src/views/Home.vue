<template>
  <carrusel/>
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
