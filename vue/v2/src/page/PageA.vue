<template>
  <div class="pagea">
    <PageB></PageB>
    <PageC></PageC>
    <PageD></PageD>
  </div>
</template>
<script>
import PageB from "./PageB";
import PageC from "./PageC";
import PageD from "./PageD";

export default {
  name: "",
  data() {
    return {};
  },
  provide() {
    return {
      setChildrenRef: (name, ref) => {
        this[name] = ref;
      },
      getChildRef: name => {
        this[name];
      },
      getRef: () => {
        return this;
      }
    };
  },
  mounted() {},
  methods: {},
  components: {
    PageB,
    PageC,
    PageD
  }
};
</script>
<style lang="scss" scoped>
</style>
