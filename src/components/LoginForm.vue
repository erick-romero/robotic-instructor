<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div id="main" class="col-md-8">
              <div class="card border-gray1 mt-5">
                <div class="card-header">
                  <h1 class = "card-title">Login</h1>
                </div>
                <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="card-text">Dirección de correo</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con nadie más</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" class="card-text">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                  </div>
                    <button type="submit" class="btn btn-outline-success" @click="login()">Inicio de sesión</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name:'LoginForm',
  data(){
      return{
        usePasswordChar: true,
        error: "",
        email: "",
        password: "",
      };
  },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully logged in');
                    this.$router.push('/Logeado');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>

<style>
h1{
  color: #2EB5E0;
}
</style>