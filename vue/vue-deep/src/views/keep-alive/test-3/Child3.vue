<template>
  <button @click="$router.back()">back</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  activated() {
    console.log("child3 activated");
  },
  deactivated() {
    console.log("child3 deactivated");
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>