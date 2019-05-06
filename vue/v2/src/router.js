import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './page/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: Home
        }
      ]
    }
  ]
})
