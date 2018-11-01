<template>
    <div>
        <div class="visual">
          <img src="../../images/main_visual.jpg" width="426" height="67" alt="GLOBAL CODE OF CONDUCT SAMSUNG TECHWIN">
        </div>
        <div class="tle_pg">
          <h1>윤리경영</h1>
            <p> 한화에어로스페이스는 인재와 기술을 바탕으로 최고의 제품과 서비스를 <br />
                창출하여 인류사회에 공헌하는 글로벌 초인류기업의 역할을 다하겠습니다.
            </p>
        </div>

        <div class="main_section">      
           <div class="article1">
             <h2>사이버경영진단팀소개</h2>
                <p>
                    사이버 경영진단팀은 고객 여러분의 제보를 신속하고<br /> 
                    공정하게 처리하며 부정이 없는 깨끗하고<br /> 청결한 기업을 만들어 갑니다.
                </p>
                <span class="btn2"><a href="/introduce/index_introduce.asp">바로가기</a></span>
           </div>
            <div class="article2">
                <h2>부정제보</h2>
                <p>
                    부정은 고객만족과 주주의 이익을 저해하는 요소입니다.<br />
                    당신의 소중한 제보를 기다립니다.
                </p>
                <span class="btn3"><a href="/unfairness/index_unfairness.asp">바로가기</a></span>
            </div>        
            <div class="article3">
                <h2>연락처</h2>
                <p>
                    메일 techwin.audit@hanwha.com<br />
                    주소 경상남도 창원시 성산구 창원대로 1204(성주동)<br/> 경영진단팀
                </p>
            </div>        
        </div>

        <contents-article></contents-article>
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

.main_section {margin-top:40px;}
.main_section > div {height:260px;position:relative;float:left;width:339px;}
.main_section > div.article2, .main_section > div.article4{padding-left:30px;width:309px;border-left:1px solid #efefef}
.main_section > div.article3, .main_section > div.article4{border-top:1px solid #efefef;padding-top:30px}
.main_section > div h2 {font-size:18px;font-family:'Nanum Gothic Bold'; color:#f37421;margin-bottom:10px; padding-top:17px; background:url(../../images/bg_t_bar.png) no-repeat}
.main_section > div p{color:#6d94c7;line-height:1.5em;}
.main_section > div .btn{display:block;padding:5px 10px; border-top:1px solid #efefef;position:absolute;top:190px;left:0; background:url(../../images/ico_arrow.png) 100% 50% no-repeat}
.main_section > div .btn2{display:block;padding:5px 10px; border-top:1px solid #efefef;position:absolute;top:220px;left:0; background:url(../../images/ico_arrow.png) 100% 50% no-repeat}
.main_section > div .btn3{display:block;padding:5px 10px; border-top:1px solid #efefef;position:absolute;top:190px;left:30px; background:url(../../images/ico_arrow.png) 100% 50% no-repeat}
.main_section > div .btn a{color:#666666}
.main_section > div .btn2 a{color:#666666}
.main_section > div .btn3 a{color:#666666}

.main_section > div.article1 { background:url(../../images/article3_over.png) 100% 100% no-repeat}
.main_section > div.article2 { background:url(../../images/article2_over.png) 100% 100% no-repeat}
.main_section > div.article3 { background:url(../../images/article4_over.png) 100% 100% no-repeat}
.main_section > div.article4 { /*background:url(../images/article4_over.png) 100% 100% no-repeat*/}

.main_section > div.article1:hover { background-image:url(../../images/article3_over_blue.png)}
.main_section > div.article2:hover { background-image:url(../../images/article2_over_blue.png)}
.main_section > div.article3:hover { background-image:url(../../images/article4_over_blue.png)}
/*.main_section > div.article4:hover {background-image:url(../images/article4_over_blue.png)}*/



</style>
