<template>
  <div class="test">
    A
    <button @click="handleClick()">触发事件</button>
    <B></B>
  </div>
</template>
<script>
import { findBrothersComponents } from 'utils/assist'

import B from './B'

export default {
  name: 'A',
  data () {
    return {}
  },
  mounted () {
    // console.log(findBrothersComponents(this, 'B'))
    this.init()
  },
  methods: {
    init () {
      this.$on('dispatch', str => console.log(str))
    },
    handleClick () {
      this.broadcast('B', 'on-message', 'hello, B')
      this.broadcast('C', 'on-message', 'hello, C')
    }
  },
  components: {
    B
  }
}
</script>
<style lang="scss" scoped>
.test {
  color: #08c;
}
</style>
