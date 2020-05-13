<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from "../../mixins/emitter.js";

export default {
  name: "iFormItem",
  mixins: [Emitter],
  props: {
    label: { type: String, default: "" }, // 标签文本
    prop: { type: String }, // 表单对应字段
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
    }
  },
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
