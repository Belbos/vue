<template>
    <div class="main">
        <div id="mtop">
            <div class="visual">
                <img src="../../images/main_visual.jpg" width="426" height="67" alt="GLOBAL CODE OF CONDUCT HANWHA AEROSPACE">
            </div>
            <div class="tle_pg">
                <h1>윤리경영</h1>
                    <p> 한화에어로스페이스는 인재와 기술을 바탕으로 최고의 제품과 서비스를 <br />
                        창출하여 인류사회에 공헌하는 글로벌 초인류기업의 역할을 다하겠습니다.
                    </p>
            </div>
        
            <div id="content">
                <contents-article></contents-article>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import mArticle from './MainArticle.vue'

Vue.component('contents-article',mArticle);

export default {

}
</script>

<style lang="css">
#mtop{
    background:url(../../images/bg_main2.png) 100% 0 no-repeat;
    position:relative;
    float:right;
    width:718px;
    margin-top:50px
    }
.main .visual{
    position:absolute;
    /* top:100px; */
    left:0
    }
.main .tle_pg{
    margin-top:107px;
    }
.main .tle_pg h1{font-size:18px;font-weight:normal;font-family:'Nanum Gothic Bold';color:#f37421;letter-spacing:-.1em}
.main .tle_pg p{margin-top:10px;margin-bottom:35px;font-size:13px;color:#777777;font-weight:normal;line-height:1.5em;}
.main #content{margin-top:25px;  position:relative;}


</style>
