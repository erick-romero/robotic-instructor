<template>
<div id="top">
  <router-link to="/electronica"> <button id="xd" type="button" class="btn btn-outline-primary ">Regresar</button> </router-link>
  <h1 id="tit">Electrónica: Episodio 4</h1>
</div>  
  <div class="video">
      <div class="embed-responsive embed-responsive-21by9">
      <h2>Video</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bEDUAyJnCho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
      <div class="container-lg">
        <h1>Transcripción de la Lección: </h1>
        <p class="texto">
          <pre>
Una vez que tenga el diseño o quiera replicar una idea que le gustó, debe empezar con la búsqueda de las piezas necesarias para hacer funcionar su robot. La forma sencilla de iniciarse en la robótica es consultando en internet y luego acudiendo a tiendas de electrónica online. Por lo general, va a necesitar:
• Un controlador de robot controla un tipo particular de robot que está conectado a un computador. Utiliza una interfaz de software genérico para controlar y supervisar.
Proporcionan una alternativa a la programación fuera de línea y es posible mover un robot mientras está siendo simulado.
• Motores: Todos los robots incluyen algún sistema capaz de producir movimiento siendo los más corrientes los motores de corriente continua (DC) y los servos motores o servos. Los primeros se utilizan casi siempre junto con un sistema de engranajes que reducen la velocidad.
• Fuente de alimentación. Para que el robot funcione como espera, necesita darle la energía que exigen los componentes que haya incorporado.
• Sensores. El desempeño del robot dependerá en gran medida de estas piezas electrónicas que permiten interpretar los estímulos externos. Existen sensores para diferentes tareas.

• Arduino: Es una plataforma de desarrollo basada en una placa electrónica de hardware libre que incorpora un microcontrolador re-programable y una serie de pines hembra. Estos permiten establecer conexiones entre el microcontrolador y los diferentes sensores y actuadores de una manera muy sencilla.

• Raspberry: Esta es una de las plataformas que se ha desarrollado en los últimos años. La Raspberry Pi es una plataforma en la que se ha introducido todos los elementos necesarios de un PC en una pequeña PCB. Este tipo de ordenadores se denominan Ordenadores en Placa Reducida o Micro-PC.
Raspberry Pi 3 Model B+ es un ordenador de placa única (SBC) de bajo costo, desarrollada con el objetivo de estimular la enseñanza de informática/programación. 
          </pre>

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