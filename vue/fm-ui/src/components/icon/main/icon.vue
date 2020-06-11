<template>
  <i :class="`fm-icon_${name}`" :style="{color: color, fontSize: size}"></i>
</template>
<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#000"
    },
    fontSize: {
      type: [String, Number],
      default: 16
    }
  },
  data() {
    return {};
  },
  computed: {
    size() {
      const fontSize = this.fontSize;
      return typeof fontSize === "number" ? `${fontSize}px` : fontSize;
    }
  }
};
</script>
<style lang="scss">
@import url("../../../styles/iconfont.scss");
</style>
