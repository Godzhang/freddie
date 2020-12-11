<template>
  <div class="detail"></div>
</template>
<script>
export default {
  inject: ["store"],
  data() {
    return {};
  },
  mounted() {
    this.$watch("store.detailType", type => {});
  }
};
</script>
<style lang="scss" scoped></style>
