<template>
  <button @click="$router.push('/keep-alive/test5/child2')">go to chid2</button>
</template>
<script>
import mixins from "./mixins";

export default {
  mixins: [mixins],
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  },
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