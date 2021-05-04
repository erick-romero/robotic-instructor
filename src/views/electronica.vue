<template>
  
  <diseño_electronica/>
  <router-view/>
</template>


<script>
// @ is an alias to /src

import diseño_electronica from '@/components/diseño_electronica.vue'

export default 
{
  name: 'electronica',
  components: {
    diseño_electronica
  }
}

</script>
