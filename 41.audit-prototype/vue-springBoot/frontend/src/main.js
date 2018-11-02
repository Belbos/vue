// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'

//Vue.config.productionTip = false
//Vue.prototype.$http = axios

import MainHeader from './components/frame/MainHeader.vue';
import MainFooter from './components/frame/MainFooter.vue';
import MainNavi from './components/frame/MainNavi.vue';
import MainBody from './components/frame/MainBody.vue';

Vue.component('main-header', MainHeader);
Vue.component('main-footer', MainFooter);
Vue.component('main-body', MainBody);
Vue.component('main-navi', MainNavi);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
