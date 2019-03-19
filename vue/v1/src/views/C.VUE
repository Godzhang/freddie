<template>
  <div>
    C
    <button @click="handleClick()">click C</button>
  </div>
</template>
<script>
export default {
  name: 'C',
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
    },
    handleClick () {
      this.dispatch('A', 'dispatch', 'haha')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
