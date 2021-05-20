import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
