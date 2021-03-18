<template>
  <div class="cuenta">
      <h1>Bienvenido, {{ name }} </h1>
      <button type="submit" class="btn btn-outline-danger" @click="signout()">Cerrar sesion</button>
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';
export default {
    name: 'Cuenta',
    methods:{
      signout() {
            firebase
                .auth()
                .signOut();
            this.$router.push('/');
        },
    },
    setup(){
      const name = ref("");
      onBeforeMount(() =>{
        const user = firebase.auth().currentUser;
        if(user){
          name.value = user.email.split('@')[0];
        }
      });

      return{
        name
      }
    }
}
</script>

<style>

</style>