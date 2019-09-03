<template>
  <div class="queen">
    <h1>老语法</h1>
    <QueenChild slot="title">slot-title</QueenChild>
    <QueenChild>
      <p slot="item" slot-scope="props">item {{ props.value }}</p>
    </QueenChild>
    <h1>新语法</h1>
    <QueenChild>
      <template v-slot:title>slot-title</template>
    </QueenChild>
    <QueenChild>
      <template v-slot:item="props">{{ props.value }}</template>
    </QueenChild>
  </div>
</template>
<script>
import QueenChild from "./QueenChild";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    QueenChild
  }
};
</script>
<style lang="scss" scoped>
</style>
