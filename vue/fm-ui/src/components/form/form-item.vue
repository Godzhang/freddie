<template>
  <div>
    <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "iFormItem",
  props: {
    label: { type: String, default: "" }, // 标签文本
    prop: { type: String } // 表单对应字段
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
