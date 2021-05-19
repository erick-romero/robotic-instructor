<template>
<div id="top">
  <router-link to="/Diseño"> <button id="xd" type="button" class="btn btn-outline-primary ">Regresar</button> </router-link>
  <h1 id="tit">Diseño: Episodio 4</h1>
</div>  
  <div class="video">
      <div class="embed-responsive embed-responsive-21by9">
      <h2>Video</h2>
        
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/E7MINtw__xM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
      <div class="container-lg">
        <h1>Transcripción de la Lección: </h1>
        <p class="texto">
          <pre>
            Este software CAD se basa en una geometría sólida constructiva (CSG), que permite a los usuarios crear modelos complejos mediante la combinación de objetos más simples.
El software permite agregar circuitos electrónicos a los diseños 3D para crear objetos con luz y movimiento. 
El resultado final incluso se puede simular en el software para verificar cómo responderán los componentes en la vida real. 
Otra capacidad de TinkerCAD es transformar un diseño 3D en modelos de ladrillo construibles, similar a la creación de legos.
Los modelos 3D se pueden guardar en tres formatos diferentes, STL, OBJ y SVG. 
Una vez que tengamos el archivo STL del modelo, continuaremos utilizando un software de laminado. 
El software de corte convierte el modelo 3D en una serie de capas delgadas y produce un archivo de código G que contiene instrucciones adaptadas a un tipo específico de impresora. 
En otras palabras, está dividiendo el objeto en una pila de capas planas y describe estas capas como movimientos lineales del extrusor de la impresora 3D.
          </pre>
        </p>
      </div>
        <div class="align-items-center">
    <iframe width="725" height="453" src="https://www.tinkercad.com/embed/b8d9wgk69fP?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
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
