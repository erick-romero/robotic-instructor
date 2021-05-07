<template>
  <div class="cuenta">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div id="main" class="col-md-8">
          <div class="card border-gray1 mt-5">
           <div class="card-header">
            <h1 class = "card-title">Configuración de cuenta de  {{ name }}</h1>
          </div>
          <div class="card-body">
            <button type="submit" class="btn btn-outline-primary" @click="verify()">Verificación de correo</button>
            <br>
            <br>
            <button type="submit" class="btn btn-outline-secondary" v-on:click="isHidden2 = !isHidden2">Cambio de correo</button>
            <br>
            <br>
            <div v-if="!isHidden2">
              <form>
                <div class="form-group">
                  <label for="exampleInputPassword1" class="card-text">Nuevo Correo electrónico</label>
                  <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email" v-model="email">
                </div>
                <button type="submit" class="btn btn-outline-success" @click="changeEmail()">Cambiar correo</button>
                <br><br>
              </form>
            </div>
            <button type="submit" class="btn btn-outline-warning" v-on:click="isHidden = !isHidden">Cambio de contraseña</button>
            <br>
            <br>
            <div v-if="!isHidden">
              <h1>Debes de tener tu correo verificado para cambiar tu contraseña</h1>
              <form>
                <div class="form-group">
                  <label for="exampleInputPassword1" class="card-text">Contraseña</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-outline-success" @click="changePwd()">Cambiar contraseña</button>
                <br><br>
              </form>
            </div>
            <button type="submit" class="btn btn-outline-danger" @click="signout()">Cierre de sesión</button>
            <br>
            <br>
            <a class="btn btn-outline-success"  href="localhost:3000">Blockly</a>
            <br>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';
export default {
    name: 'Cuenta',
    components: {},
    data(){
      return {
        password: "",
        isHidden: true,
        isHidden2: true,
      }
    },
    methods:{
      Blockly(){
        this.$router.push('/blockly');
      },
      changeEmail(){
        var user = firebase.auth().currentUser;
          user.updateEmail(this.email).then(() =>{
          alert('Correo cambiada correctamente!');
          this.isHidden2 = true;
        }).catch(function(error){
          console.log(error)
        });
      },
      changePwd(){
        var user = firebase.auth().currentUser;
        if(user.emailVerified){
          user.updatePassword(this.password).then(() =>{
          alert('Contraseña cambiada correctamente!');
          this.isHidden = true;
        }).catch(function(error){
          console.log(error)
        });
        }else{
          alert('Verifica tu correo primero!');
          this.isHidden = true;
        }
      },

      signout() {
        firebase
          .auth()
          .signOut();
          this.$router.push('/');
        },
      verify(){
        const user = firebase.auth().currentUser;
        user.sendEmailVerification().then(() =>{
          alert('Correo de verificación enviado!')
        }).catch(function(error){
          console.log(error)
        });
      },
      /*changePassword(){
        const user = firebase.auth().currentUser;
        if (user.emailVerified){
          console.log(yay)
        }
        user.sendEmailVerification().then(() =>{
          alert('Correo de verificación enviado!')
        }).catch(function(error){
          console.log(error)
        });
      }*/
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
        name,
      }
    }
}
</script>

<style>

</style>