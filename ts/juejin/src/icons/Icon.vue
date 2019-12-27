<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({ name: "svg-icon" })
export default class Icon extends Vue {
  @Prop({ type: String, required: true })
  iconClass!: string;
  @Prop(String)
  className!: string;

  get iconName() {
    return `#icon-${this.iconClass}`;
  }
  get svgClass() {
    return this.className ? `svg-icon ${this.className}` : `svg-icon`;
  }
}
</script>
<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
}
</style>
