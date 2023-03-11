<template>
  <div className="logobg">
    <img src="./assets/images/sbjwhite.png"/>
  </div>

  <div class="navbg">
  <nav className="navlinks">

    <div className="catlinks">
      <a> <router-link to="/"> Tops </router-link> </a>
    <a> <router-link to="/"> Pants </router-link> </a>
    <a> <router-link to="/"> Skirt </router-link> </a>
    <a> <router-link to="/"> Gown </router-link> </a>
    </div>

    <div className="catlinks">
    <a> <router-link to="/"> Bubu </router-link> </a>
    <a> <router-link to="/"> Jumpsuit </router-link> </a>
    <a> <router-link to="/"> Swim Wear </router-link> </a>
    <a> <router-link to="/"> Swim Cover </router-link> </a>
    </div>

    <!-- <router-link to="/about">About</router-link>  -->
  </nav>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body{
  margin:0;
  padding:0;
  font-family:inter;
}

.logobg{
  background:#81A695;
  padding-top:8px;
  padding-bottom:8px;
}

.logobg img{
  margin:auto;
  align-items:center;
  display:flex;
  justify-content:center;
  width:60px;
}

.navlinks{
  display: flex;
    justify-content: center;
    margin: auto;
    padding-top:30px;
    align-items: center;
    padding-bottom:30px;
}

.navlinks a{
  text-decoration:none;
  margin-right:30px;
  color:black;
  font-weight:400;
  font-size:15px;
}

/* .navlinks{
  display:flex;
  justify-content:center;

} */

</style>

