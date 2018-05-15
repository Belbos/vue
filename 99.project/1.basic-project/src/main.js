import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueRouter from './vendor/vue-router.js'
// import VueRouter from 'vue-router'
//
// Vue.use(VueRouter);

// Global Components
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue'



Vue.component('main-header', MainHeader);
Vue.component('main-footer', MainFooter);
// 할일 #2
// Global 컴포넌트를 하나 더 등록하고 nav-header 아래에 렌더링 해보세요.



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//
// const app = new Vue({
//     router
// }).$mount('#app')


//
//
// // 1. Define route components.
// var Foo = { template: '<div>foo</div>' }
// var Bar = { template: '<div>bar</div>' }
//
// // 2. Define some routes
// var routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
//
// // 3. Create the router instance and pass the `routes` option
// var router = new VueRouter({
//   routes
// })
//
// // 4. Create and mount the root instance.
// var app2 = new Vue({
//   router
// }).$mount('#app2')
