<template>
  <button
    :class="[
      'fm-button',
      type ? `fm-button--${type}` : '',
      size ? `fm-button--${size}` : '',
      disabled ? 'is-disabled' : '',
      round ? 'is-round' : ''
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>button</slot>
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
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
@import "./button.scss";
</style>
