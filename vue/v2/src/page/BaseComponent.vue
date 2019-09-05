<template>
  <div>
    <span @click="handleClick">props: {{test}}</span>
    <slot name="slot1"></slot>
    <p>=============</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseComponent",
  props: {
    test: Number
  },
  methods: {
    handleClick() {
      this.$emit("customize-click");
    }
  }
};
</script>
