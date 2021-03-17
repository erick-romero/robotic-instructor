<template>
<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
  <nav class="navbar navbar-expand-md">
    <a class="navbar-brand" href="/">Robotic Instructor</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/Login"> <a class="nav-link"> Login </a> </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Registro"> <a class="nav-link"> Register </a> </router-link>
          </li> 
        </ul>
      </div>
  </nav>
  <router-view/>
</template>
<style>
.navbar
{
  background-color:#0c6980 ;
  height:100px;
}
.navbar-brand
{
  font-size: 50px !important;
  color: white;
  font-family:Lato,arial;
}
.nav-link
{
  font-size: 25px;
 color:white; 
}
.collapse
{
  padding-right:30px;
}
</style>


<script>
</script>