<template>
  <!-- <div class="container">
    <button class="btn" @click="$router.push('/keep-alive/test4/child2')">go to child2</button>
  </div>-->
  <div class="wrap">
    <div class="container">
      <button class="btn" @click="$router.push('/keep-alive/test4/child2')">go to child2</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  activated() {
    console.log("child1 activated");
  },
  deactivated() {
    console.log("child1 deactivated");
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.wrap {
  height: 100%;
  overflow: auto;
}
.container {
  position: relative;
  width: 100%;
  height: 3000px;
  .btn {
    position: absolute;
    top: 1500px;
  }
}
</style>