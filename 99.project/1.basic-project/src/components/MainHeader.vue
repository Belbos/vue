<template>
  <div class="header">
    <img id = "img1" src="../assets/logo.jpg">
    <input type="text" name="account" value="">
    <img id = "img2" src="../assets/profile.jpg">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.header {
  clear:left;
  float:left;
  left:0;
  top:0px;
  text-align: center;
  /* font-size: 12px; */
  /* color: white; */
  /* background: #000000; */
  padding: 10px 0;
  position: absolute;
  clear: both;
  width: 100%;
  padding-bottom: 50px;
}

img#img1 {
  text-align: left;
  padding-right: 100px;
}
img#img2 {
  text-align: left;
  padding-left: 100px;
}

</style>
