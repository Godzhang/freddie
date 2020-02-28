<template>
  <button @click="$router.push('/keep-alive/test3/child2')">go to chid2</button>
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
</style>