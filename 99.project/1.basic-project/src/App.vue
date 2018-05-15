<template>
  <div>
    <div class ="mHeader">
      <!-- Global Component, Header -->
      <main-header></main-header>
    </div>

    <!-- <div class ="mBody">
      <main-body></main-body>
      <main-body2></main-body2>
    </div> -->

    <div class="mBody">
      <profile-body></profile-body>
      <profile-body2></profile-body2>
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

  export default {
    components: {
      'main-body': MainBody,
      'main-body2': MainBody2,

      'profile-body': ProfileBody,
      'profile-body2': ProfileBody2,
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

</style>
