import Vue from 'vue'
import Router from 'vue-router'

import Introduce from '@/components/1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Introduce
    }
  ]
})