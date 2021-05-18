<template>
<div id="top">
  <router-link to="/electronica"> <button id="xd" type="button" class="btn btn-outline-primary ">Regresar</button> </router-link>
  <h1 id="tit">Electrónica: Episodio 1</h1>
</div>  
  <div class="video">
      <div class="embed-responsive embed-responsive-21by9">
      <h2>Video</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/SosNQTpZsCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="container-lg">
        <h1>Transcripción de la Lección: </h1>
        <p class="texto">

        </p>
      </div>

  </div>
  
<br>
<br>


</template>

<style>
.video{
  background-color: white;
}
.texto{
  font-size: 25px;
  text-align:justify;
}
#tit{
  width: 90%;
  display: inline-block;
}
#xd{
  padding-bottom: 10px;
}
</style>