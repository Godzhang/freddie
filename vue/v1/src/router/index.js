import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../views/App'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      component: App,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home')
        },
        {
          path: 'a',
          component: () => import('@/views/A')
        }
      ]
    }
  ]
})
