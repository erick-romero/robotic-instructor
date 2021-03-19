<template>
  
  <diseño_episodios/>
  <router-view/>
</template>


<script>
// @ is an alias to /src

import diseño_episodios from '@/components/diseño_episodios.vue'

export default 
{
  name: 'Diseño',
  components: {
    diseño_episodios
  }
}

</script>
