import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/App'
import Test from '../components/Test'

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
          component: Test
        }
      ]
    }
  ]
})
