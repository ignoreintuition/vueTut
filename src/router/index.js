import Vue from 'vue'
import Router from 'vue-router'
import tut from '@/components/tut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tut',
      component: tut
    }
  ]
})
