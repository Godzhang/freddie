<template>
  <button
    :class="[
      'fm-button',
      type ? `fm-button--${type}` : '',
      size ? `fm-button--${size}` : '',
      disabled ? 'is-disabled' : ''
    ]"
    :disabled="disabled"
  >
    <!-- <span>{{ $slots.default.text || "button" }}</span> -->
    <span>button</span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$slots);
  }
};
</script>
<style lang="scss">
@import "./button.scss";
</style>
