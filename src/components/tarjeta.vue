<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">
<div class="row">
    <div class="box">
    </div>
    <div class="card mx-auto" style="width: 18rem;">
    <img class="cardimg" src="../assets/s1.svg" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Diseño</h5>
        <p class="card-text">El Diseño es el proceso de desarrollo de una representación matemática de cualquier objeto 3D.</p>
        <router-link to = "/login"> <a class="btn btn-primary">Ir</a> </router-link>
    </div>
    </div>
    <div class="card mx-auto" style="width: 18rem;">
    <img class="cardimg" src="../assets/s2.svg" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Programación</h5>
        <p class="card-text">La programación es la encargada de darle las instrucciones al hardware para que este actúe.</p>
        <router-link to = "/login"> <a class="btn btn-primary">Ir</a> </router-link>
    </div>
    </div>
    <div class="card mx-auto" style="width: 18rem;">
    <img class="cardimg" src="../assets/s3.svg" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Electrónica</h5>
        <p class="card-text">La electrónica es todo aquello que trata con circuitos que involucran componentes electrónicos activos.</p>
        <router-link to = "/login"> <a class="btn btn-primary">Ir</a> </router-link>
    </div>
    </div>
    <div class="box">
    </div>
</div> 
</template>

<style scoped>
.row{
    background-color: #00A8A8;
}

.card{
    margin-top: 30px;
    background-color: #ffffff !important;
}
.card-image-top{
   width: 20px;
   height: 20px;
}
.cardimg{
   margin-left: auto;
   margin-right: auto;
   margin-top: 20px;
   display: block;
   width: 120px;
   height: 120px;
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
    width: 110px;
}

.btn-primary:hover {
    background-color: #00A8A8;
    border-color: #00A8A8;
}

.card-title
{
    font-family: cooper,arial;
    font-size: 25px;
}
.card-text
{
    font-family: cooper,arial;
    height: 55%;
    color: black;
}
.box
{
    width: 15%;
    
}

</style>