<template>
  <div class="logeado">
      <h1>estas logeado wey</h1>
      <button type="submit" class="btn btn-primary" @click="signout()">Cerrar sesion</button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name:'Logeado',
  methods: {
        signout() {
            firebase
                .auth()
                .signOut();
            this.$router.push('/');
        },
    },
}
</script>

<style>

</style>