<template>
<div id="top">
  <router-link to="/Programacion"> <button id="xd" type="button" class="btn btn-outline-primary ">Regresar</button> </router-link>
  <h1 id="tit">Programación: Episodio 4</h1>
</div>  
  <div class="video">
      <div class="embed-responsive embed-responsive-21by9">
      <h2>Video</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ayp7lXePb6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div class="container-lg">
        <h1>Transcripción de la Lección: </h1>
        <p class="texto">
          <pre>
            Las estructuras de programación o estructuras de control permiten tomar decisiones y realizar un proceso repetidas veces. Son los denominados bifurcaciones y bucles. En la mayoría de los lenguajes de programación, este tipo de estructuras son comunes en cuanto a concepto, aunque su sintaxis varía de un lenguaje a otro.

Bifurcaciones

Las bifurcaciones permiten ejecutar una de entre varias acciones en función del valor de una expresión lógica o relacional. Se tratan de estructuras muy importantes ya que son las encargadas de controlar el flujo de ejecución de un programa. Existen dos bifurcaciones diferentes: if y switch.

Bifurcación if else 
Las sentencias incluidas en el else se ejecutan en el caso de no cumplirse la expresión de comparación (false), 
if (booleanExpression) { 
statements1; } 
else { statements2; }

Ejemplo:

if(numero &lt; 10) 
System.out.println("Numero tiene 1 digito ");
else if (numero &lt; 100) 
System.out.println("Numero tiene 1 digito "); 
else { 
System.out.println("Se ha ejecutado la opcion por defecto "); }

Bucles 
Un bucle se utiliza para realizar un proceso repetidas veces. Se denomina también lazo o loop. El código incluido entre las llaves {} (opcionales si el proceso repetitivo consta de una sola línea), se ejecutará mientras se cumpla unas determinadas condiciones. 

Ejemplo:

for (int i = 0; i &lt; 5; ++i) { 
System.out.println(i);
}
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