<template>
  <div>
    <button @click="$emit('handle')">queenchild</button>
    <!-- <div>zhangqi</div> -->
    <!-- <slot></slot>
    <slot name="title"></slot>
    <slot name="item" v-bind="{value: 'vue'}"></slot>-->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this);
    // console.log(this.color);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
