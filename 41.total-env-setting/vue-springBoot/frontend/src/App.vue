<template>
  <div id="app">
    <!-- Header -->
    <div id ="header">
        <main-header></main-header>
    </div>

    <div id ="wrap">
      <!-- Navi -->
      <div class="snb">
        <main-navi></main-navi>
      </div>

      <!-- Body -->
      <div id="container" class="main">
        <main-body></main-body>
      </div>    
    </div>

    <!-- Footer -->
    <div id ="footer">
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
</script>

<style src="./css/common.css">

/* Layout */
#header{position:relative;overflow:hidden;border-top:1px solid #efefef;margin-bottom:30px;padding-bottom:20px;font-weight:normal}
#wrap{overflow:hidden;width:1003px}
#container{position:relative;float:right;width:718px;}
#content{border-top:1px solid #efefef;padding-top:20px;padding-left:5px;font-weight:normal}
#footer{position:relative;overflow:hidden;border-top:1px solid #efefef;margin-top:30px;padding-top:20px;font-weight:normal}
.snb{float:left;width:175px;min-height:820px;padding:0px 40px 0 50px; background:url(../images/bg_shadow.png) 100% 0 no-repeat}
.tnb {float:right; border-top:3px solid #f37421;padding-top:25px;font-family:'Verdana';}

/* Side Navigation Bar */
.snb h1{margin-bottom:68px;font-weight:normal}
.snb h1 a{display:block;margin-bottom:10px;font-size:40px;color:#f37421;}
.snb h1 span{position:absolute;top:150px; left:50px;font-size:11px;font-weight:normal;font-family:'Nanum Gothic', Arial, Helvetica; color:#939494}
.gnb{border-top:1px solid #efefef;font-family:'Nanum Gothic Bold';}
.gnb li {display:block;border-bottom:1px solid #efefef; font-size:16px;}
.gnb > li:hover{border-bottom:solid 1px #FFFFFF}
.gnb > li > a{display:block;width:100%; height:29px;line-height:29px;color:#f37c2f;padding-left:10px;}
.gnb > li > a:hover, .gnb li a.cur{height:29px;line-height:29px;background:url(../images/over_gnb.gif) no-repeat; color:#fff;padding-left:26px;border-bottom:solid 1px #FFFFFF}
.gnb > li > ul{display:none;margin-bottom:20px;padding-top:5px;padding-bottom:10px;border:1px solid #fab483;border-top:0;}
.gnb > li > ul > li{margin:0 15px;font-size:15px}
.gnb > li > ul > li > a{display:block;padding:5px 15px;color:#888888;background:url(../images/off_gnb_sub.gif) 3px 50% no-repeat;}
.gnb > li > ul > li > a:hover, .gnb > li > ul > li > a.cur2{color:#f37421;background:url(../images/over_gnb_sub.gif) 0 50% no-repeat}
.gnb > li > ul > li.last{border-bottom:0 none;}
.gnb > li > ul > li > ul { display:none; font-size:13px !important; font-family:'Nanum Gothic' }
.gnb > li > ul > li > ul li {font-size:13px; margin-top:2px;margin-bottom:2px;border:0 none; }
.gnb > li > ul > li > ul a{display:block; margin-left:15px; padding:3px 0;color:#9c9589;font-size:13px;letter-spacing:-0.05em}
.gnb > li > ul > li > ul a:hover, .gnb > li > ul > li > ul a.cur3{color:#f89a5c }

/* Container */
#container.main{background:url(../images/bg_main.png) 100% 0 no-repeat}
#container.sub{background:url(../images/bg_sub.png) 100% 0 no-repeat}
.tnb li{float:left;margin-left:9px;padding-right:9px; background:url(../images/bg_bar.png) 100% 50% no-repeat}
.tnb li.last{background:none;}
.tnb li a{color:#f89a5c}
.tnb li a:hover{color:#f17b2e;}

.main .visual{position:absolute;top:100px;left:0}
.main .tle_pg{margin-top:207px;}
.main .tle_pg h1{font-size:18px;font-weight:normal;font-family:'Nanum Gothic Bold';color:#f37421;letter-spacing:-.1em}
.main .tle_pg p{margin-top:10px;font-size:13px;color:#777777;font-weight:normal;line-height:1.5em;}
.main #content{margin-top:25px;}

.sub .tle_pg{margin-top:200px; margin-bottom:30px;padding-left:20px}
.sub .tle_pg h1{font-size:30px;color:#f37421;margin-bottom:8px;}
.sub .tle_pg p{color:#777777;font-size:13px;font-weight:normal; letter-spacing:-.1em}
.sub #content{padding-right:20px;}



/* Footer */
#footer .logo_footer{float:left;margin-left:90px;margin-top:0px;}
#footer .copy{float:left; margin-left:90px;}
#footer .copy ul{padding-bottom:15px}
#footer .copy li{float:left;margin-left:9px;padding-right:9px; background:url(../images/bg_bar.png) 100% 50% no-repeat}
#footer .copy li.last{background:none;}
#footer .copy li a{color:#fab38a}
#footer .copy li a:hover{color:#f17b2e;}
#footer .copy address{padding-bottom:40px;margin-top:15px;margin-left:9px;font-size:12.5px;color:#777777;line-height:1.5em}
.nav_footer{float:left;padding-top:10px;width:148px;margin-left:200px;top:30px;left:860px;}
.nav_footer li{display:none;border-top:1px solid #efefef}
.nav_footer li.last{display:none;border-top:1px solid #efefef;margin-bottom:30px;}
.nav_footer a{display:block;padding:5px 10px;color:#777777;}
.nav_footer a:hover{color:#777777}
.nav_footer .first{display:block;width:123px;padding:5px 10px;border-top:1px solid #efefef;font-size:12px;font-family:'Verdana'; background:url(../images/arrow2.png) 125px 50% no-repeat}

#popContent{border-top:1px solid #efefef;padding-top:20px;padding-left:5px;font-weight:normal;margin-top:20px}
#popContent p {font-size:13px;color:#666;line-height:1.5em}
#popContent h2 {font-size:18px;font-family:'Nanum Gothic Bold';color:#f37421;margin-bottom:8px; padding-top:15px; background:url(../images/bg_t_bar.png) no-repeat;margin-top:30px}
#popContent h3 {font-size:16px;font-family:'Nanum Gothic Bold';color:#f37421;margin-bottom:10px; padding-top:15px;}
  

</style>

