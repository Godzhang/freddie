<template>
  <div>
    <span>child</span>
    <!-- <button @click="$emit('handle')">queenchild</button> -->
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
  created() {
    // console.log("child created");
  },
  mounted() {
    // console.log(this);
    // console.log("child mounted");
    // console.log(this.color);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
