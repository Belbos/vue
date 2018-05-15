import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import MainBody from './components/MainBody.vue';
import MainBody2 from './components/MainBody2.vue';

import ProfileBody from './components/ProfileBody.vue';
import ProfileBody2 from './components/ProfileBody2.vue';


const routes = [
  { path:'/',component: MainBody },
  { path:'/profile',component: ProfileBody }
]

export default new VueRouter({
  mode: 'history',
  routes
});
