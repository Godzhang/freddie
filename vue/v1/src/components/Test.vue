<template>
  <div class="test">
    <el-input v-model="msg"></el-input>
    <el-button type="primary" @click="onSave()">保存</el-button>
  </div>
</template>
<script>
export default {
  name: "Test",
  data () {
    return {
      msg: 'zhangqi'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {},
    onSave () {}
  }
}
</script>
<style lang="scss" scoped>
.test {
  color: #08c;
}
</style>
