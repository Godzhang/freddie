<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
// 核心功能：数据校验
export default {
  name: "iForm",
  props: {
    model: { type: Object }, // 表单数据
    rules: { type: Object } // 验证规则
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
