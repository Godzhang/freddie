<template>
  <div class="queen">
    <h1>老语法</h1>
    <QueenChild slot="title">slot-title</QueenChild>
    <QueenChild>
      <p slot="item" slot-scope="props">item {{ props.value }}</p>
    </QueenChild>
    <h1>新语法</h1>
    <QueenChild v-slot:title>slot-title</QueenChild>
    <QueenChild v-slot:item="props">{{ props.value }}</QueenChild>
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
