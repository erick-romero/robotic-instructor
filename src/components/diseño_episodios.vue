<template>
    <h1 style="margin: 50px">Diseño</h1>
<div style="font-size:30px;">
    Selecciona el episodio que quieras aprender
   </div> 
<div class="row">
  <div class="col">
    <div class="card">
        <img src="" class="card-img-top" alt="">
          <div class="card-body align-center">
              <h5 class="card-title">Episodio 1</h5>
              <p class="card-text">¿Qué es el diseño 3D?</p> 
              <router-link to = "/DiseñoVideo1"><a class="btn btn-primary">Ir</a></router-link>
          </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
        <img src="" class="card-img-top" alt="">
          <div class="card-body align-center">
              <h5 class="card-title">Episodio 2</h5>
              <p class="card-text">Impresión en 3D</p> 
              <router-link to = "/DiseñoVideo2"><a class="btn btn-primary">Ir</a></router-link>
          </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
        <img src="" class="card-img-top" alt="">
          <div class="card-body align-center">
              <h5 class="card-title">Episodio 3</h5>
              <p class="card-text">Impresión de partes de robot en 3D</p> 
               <router-link to = "/DiseñoVideo3"><a class="btn btn-primary">Ir</a></router-link>
          </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
        <img src="" class="card-img-top" alt="">
          <div class="card-body align-center">
              <h5 class="card-title">Episodio 4</h5>
              <p class="card-text">Uso de TinkerCad</p> 
              <router-link to = "/DiseñoVideo4"><a class="btn btn-primary">Ir</a></router-link>
          </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
        <img src="" class="card-img-top" alt="">
          <div class="card-body align-center">
              <h5 class="card-title">Episodio 5</h5>
              <p class="card-text">Otros software de diseño 3D</p> 
              <router-link to = "/DiseñoVideo5"><a class="btn btn-primary">Ir</a></router-link>
          </div>
    </div>
  </div>


</div>

</template>

<style scoped>


.card{
    margin-top: 20px;
    background-color: #ffffff !important;
    padding: 40px;
    /* margin-right: 10px;
    margin-left: 10px; */
}

.btn
{
    font-family: cooper,arial;
    font-size: 25px;
}


.btn-primary{
    background-color: #0C6980;
    border-color: #0C6980;
    border-radius: 30px;
    width: 120px;
}
.card-title
{
    font-family: cooper,arial;
    font-size: 25px;
}
.card-text
{
    font-family: cooper,arial;
    color: black;
    height: 70px;
    text-align: middle;
}

.btn-primary:hover {
    background-color: #00A8A8;
    border-color: #00A8A8;
}

</style>