<template>
  <div id="app">

    <div class ="mHeader">
        <router-link to="/">
        <img id = "img_h1" src="./assets/logo.jpg">
        </router-link>

        <router-link to="/profile">
          <img align="right" id = "img_h2" src="./assets/profile.jpg">
        </router-link>
    </div>

    <!-- <div class ="mHeader">
      <main-header></main-header>
    </div> -->

    <!-- <div>
      <router-link to="/mainBody">router</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div> -->

    <!-- <div class ="mBody">
      <main-body></main-body>
      <main-body2></main-body2>
    </div> -->

    <div class="mBody">
      <router-view></router-view>
      <!-- <profile-body></profile-body>
      <profile-body2></profile-body2> -->
    </div>

    <div class ="mFooter">
      <!-- Global Component, Footer -->
      <main-footer></main-footer>
    </div>

  </div>
</template>

<script>
  import MainBody from './components/MainBody.vue';
  import MainBody2 from './components/MainBody2.vue';

  import ProfileBody from './components/ProfileBody.vue';
  import ProfileBody2 from './components/ProfileBody2.vue';

  // import Vue from 'vue'
  // import VueRouter from 'vue-router'
  // Vue.use(VueRouter);


  export default {
    components: {
      'main-body': MainBody,
      'main-body2': MainBody2,

      'profile-body': ProfileBody,
      'profile-body2': ProfileBody2
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#section{
  padding-left: 50px;
}

h2{
  font-weight: normal;
  text-align: left;
  /* margin-left: 15px;
  margin-bottom: 5px; */
  margin: 10px;

}
a{
  margin: 10px;
  border-bottom: 5px;
  font-family: sans-serif;
}

/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */

.mHeader{
    /* text-align: center; */
    padding: 20px;
}

.mBody{
    text-align: center;
    background-color: rgb(250, 250, 250);
    padding: 20px;
    /* padding-left: 100px;
    padding-right: 100px; */
}


.mFooter{
   text-align: center;
   padding-top: 10px;
}

#contents {
text-align: center;
border-style: solid;
border-width: thin;
border-color: rgb(220, 220, 220);
background-color: rgb(255, 255, 255);
padding: 10px;
margin: 0 auto;
margin-bottom: 50px;
/* border: 10px; */
width: 550px;

}

img#img_c{
  width: 550px;
  height:550px;
}

img#img_h{
  width: 35px;
  height:35px;
}


img#img_h1 {
  text-align: left;
  /* padding-right: 60%; */
  /* margin-right: 60%; */
}
img#img_h2 {
  text-align: right;
  padding: 10px;
  /* width: 60px;
  height:60px; */
  /* margin-left: 60%; */

}

</style>
