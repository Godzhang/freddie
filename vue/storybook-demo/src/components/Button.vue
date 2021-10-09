<template>
  <button class="xh-btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type ButtonType = "default" | "primary" | "error";

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: "default" }) private btnType?: ButtonType;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.xh-btn {
  background-color: #e1e1e1;
  border: none;
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
