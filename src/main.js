import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { fabric } from 'fabric'

Vue.config.productionTip = false
Vue.prototype.fabric = fabric

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
