<template>
  <diseño_electronica/>
  <br>
  <br>
  <div style="font-size:20px;">
            Puedes interactuar con el simulador arrastrando componentes al centro y realizando sus conexiones
   </div>
   <div style="font-size:20px;">
            Tambien puedes guardar tu progresos con el boton de "Obtener datos" y cargarlo con el boton de cargar Datos
   </div>
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
