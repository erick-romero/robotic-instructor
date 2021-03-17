<template>
  <div class="loginForm">
    <h1>Login</h1>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary" @click="login()">Submit</button>
</form>
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

</style>