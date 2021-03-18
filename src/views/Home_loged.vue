<template>
  <div class="home_loged">
      <h1>estas logeado wey</h1>
      <button type="submit" class="btn btn-primary" @click="signout()">Cerrar sesion</button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name:'Home_loged',
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