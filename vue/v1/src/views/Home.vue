<template>
  <div>
    home
    <button @click="handleClick()">click</button>
  </div>
</template>
<script>
import Form from '../components/form/Form'
import FormItem from '../components/form/FormItem'

export default {
  name: 'Home',
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$on('freddie', str => {
        console.log(str)
      })
    },
    handleClick () {
      this.$emit('freddie', 'zhangqi')
    }
  },
  components: {
    Form,
    FormItem
  }
}
</script>
<style lang="scss" scoped>

</style>
