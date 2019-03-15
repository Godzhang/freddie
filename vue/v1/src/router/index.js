import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/App'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      component: App,
      redirect: '/test',
      children: [
        {
          path: 'test',
          component: () => import('@/components/Test')
        }
      ]
    }
  ]
})
