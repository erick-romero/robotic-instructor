<template>
  <diseño_electronica/>
  <br>
  <br>
  <iframe width="800" height="800" src="https://eduardosalaz.github.io/circuito/" frameborder="0"></iframe>
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
