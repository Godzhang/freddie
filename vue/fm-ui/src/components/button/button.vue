<template>
  <button :class="['fm-button', `fm-button--${type}`]">
    <span>button</span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "./button.scss";
</style>