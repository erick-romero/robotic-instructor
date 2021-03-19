<template>

    <diseño_programacion />
    <router-view />
</template>


<script>
// @ is an alias to /src

import diseño_programacion from '@/components/diseño_programacion.vue'

export default
{
  name: 'Programacion',
  components: {
    diseño_programacion
  }
}

</script>

