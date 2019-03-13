import Vue from 'vue'

import './scss/index.scss'

Vue.component('myComponent', {
  name: 'myComponent',
  template: '<div><img :src="require(`./assets/images/queen-2.jpg`)"><img :src="url" /></div>',
  data () {
    return {
      url: require('./assets/images/queen-1.jpg')
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    message: 'hello freddiedf'
  }
})
