import Vue from 'vue'

import {
  Input,
  Button,
  Loading,
  MessageBox,
  Message
} from 'element-ui'
import './element-style.scss'

Vue.use(Input)
Vue.use(Button)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message



