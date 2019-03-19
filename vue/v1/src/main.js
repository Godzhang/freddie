import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './store'

import './element/element'
import './scss/index.scss'

import Emitter from 'mixins/emitter'
Vue.mixin(Emitter)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
