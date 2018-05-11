import Vue from 'vue'
import App from './App.vue'
import Leftmenu from './Leftmenu.vue'

Vue.component('my-component', {
  props: ['passedData'],
  template: '<p>props {{passedData}}</p>'
}); 

new Vue({
  el: '#app',
  render: h => h(App)
  
})

new Vue({
  el: '#leftmenu',
  render: h => h(Leftmenu)

})
