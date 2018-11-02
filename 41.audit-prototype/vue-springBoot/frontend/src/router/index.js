import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import DetailUser from '@/components/DetailUser'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/:id',
//       name: 'DetailUser',
//       component: DetailUser
//     }
//   ]
// })


// import ContentsMain from '../components/contents/Main.vue';

// const routes = [
//   { path:'/',component: ContentsMain }
// ]

// export default new VueRouter({
//   mode: 'history',
//   routes
// });

import ContentsMain from '@/components/contents/Main.vue';
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ContentsMain',
      component: ContentsMain
    }
  ]
})
