<template>
  <div>
    B
    <C></C>
  </div>
</template>
<script>
import C from './C'

export default {
  name: 'B',
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$on('on-message', str => {
        console.log(str)
      })
    }
  },
  components: {
    C
  }
}
</script>
<style lang="scss" scoped>

</style>
