<template>
  <div class="container">
    <button @click="$router.push('/keep-alive/test3/child3')">go to chid3</button>
    <button @click="$router.back()">back</button>
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
    console.log("child2 activated");
  },
  deactivated() {
    console.log("child2 deactivated");
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>