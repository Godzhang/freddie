<template>
  <div class="layout" :style="layoutStyle">
    <div class="layout__header">
      <slot name="header"></slot>
    </div>
    <div class="layout__content">
      <div class="layout__content--wrapper">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class JLayout extends Vue {
  get layoutStyle() {
    // vuex，待改进
    return {
      backgroundColor: "#f4f5f5"
    };
  }
}
</script>
<style lang="less">
.layout {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  .layout__content {
    max-width: @layout--width-normal;
    margin: 15px auto;
  }
}
</style>
