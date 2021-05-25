import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router';
import store from '../src/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
