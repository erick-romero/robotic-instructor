<template>
<div id="top">
  <router-link to="/Programacion"> <button id="xd" type="button" class="btn btn-outline-primary ">Regresar</button> </router-link>
  <h1 id="tit">Programación: Episodio 3</h1>
</div>  
  <div class="video">
      <div class="embed-responsive embed-responsive-21by9">
      <h2>Video</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/cs2oKIY4oGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
      <div class="container-lg">
        <h1>Transcripción de la Lección: </h1>
        <p class="texto">
          <pre>
            Qué es la programación?
Es una de las ramas de la robótica. Es igual de importante que el diseño o que la electrónica del robot ya que permite que haga cosas por su cuenta sin que un humano tenga que intervenir por él.

¿Cómo se programa? 
Existen múltiples software para iniciar en el mundo de la programación entre ellos tenemos a lego, mindstorms, scratch y Arduino.
En el primero de ellos podemos ver que tenemos algunas partes esenciales, por ejemplo en la parte inferior vemos que tenemos bloques que simbolizan a los motores a las pantallas una bocina y algunos controles más. En el panel naranja, tenemos cosas relacionadas con el control, por ejemplo, tenemos este bloque de inicio que indica cuándo va a iniciar un programa, podemos iniciar múltiples bloques de este tipo simultáneamente.

SCRATCH
En scratch tenemos algo muy similar, solo que este es de manera vertical. En la parte izquierda podemos ver que igual está organizado por colores y por secciones, por ejemplo, el azul vendría a ser el equivalente a los bloques verdes de lego solo que aquí también incluye un apartado para la apariencia ya que también podemos utilizar scratch para programar videojuegos o animaciones. 

Arduino
En cuanto a Arduino tenemos algo muy diferente, ya que aquí ya no es una interfaz gráfica o por bloques como habíamos visto previamente, aquí tenemos algunas partes importantes del software de Arduino que es el botón de compilar, para ver si nuestro código está correcto y el botón de subir para programar nuestro robot.
De las partes fundamentales del código de arduino tenemos el void 0, que es donde vamos a decirle a nuestros pines y son de entrada o de salida y el void loop que es donde vamos a poner nuestra programación para que se repite infinitamente. 

En todos estos tenemos en común que existen condiciones y comparaciones, alguna condición puede ser por ejemplo enciende tus motores si tienes espacio suficiente para avanzar y alguna comparación podría ser tres es mayor que 2, esto en código se podría traducir a condiciones como: if o while qué quiere decir sí o mientras que, en las comparaciones tenemos cosas como que un número es menor que otro, o mayor que es mayor, o igual que es menor, o igual o que es igual. 
Uno de los pilares importantes de la programación son los if, que traducido al español, quiere decir sí es una pregunta a nuestro robot o si algo es verdadero o falso y a partir de ahí ejecutará alguna acción en el software del lego podemos ver a los if de la siguiente manera: 
Tenemos un bloque de naranja de control, en el que podemos apreciar dos secciones, una que tiene una palomita y otra que tiene una tacita; si la condición que se establece al inicio del bloque se cumple, se van a ejecutar las acciones que estén dentro de la palomita y, si no se cumple, se va a ejecutar lo que esté en la tacita.
También tenemos los while que hacen que se repite infinitamente esto, que es este bloque naranja que tiene indicado una flecha en forma de loop. En scratch tenemos algo similar pero de manera vertical, y combinando los bloques gráficos con algo de texto. Aquí podemos ver la palabra if y aquí tenemos un espacio para poner una condición, si es nuestra condición, se cumple, entonces vamos a ejecutar lo que está en este espacio del bloque y si no vamos a ejecutar lo que está en este espacio y cuando termine la programación va a continuar. 
En Arduino tenemos algo un poco más complicado ya que no tenemos la interfaz gráfica a la que estamos acostumbrados, aquí tenemos simplemente el if, un espacio para poner la condición dentro de unos paréntesis y todo lo que esté dentro de los corchetes siguientes, es lo que se ve que ejecutar en caso de que se cumpla la condición si no, tendremos que poner un else y hacer exactamente lo mismo por si no se llega a cumplir la condición.
Por el momento esto ha sido todo, continuaremos aprendiendo en los siguientes vídeos.
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