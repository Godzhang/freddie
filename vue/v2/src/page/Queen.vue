<template>
  <div class="queen">
    <TempVar var1="var1" var2="var2">
      <template v-slot="{var1, var2}">
        <div>{{var1}}</div>
        <div>{{var2}}</div>
      </template>
    </TempVar>
    <!-- <h1>老语法</h1>
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
    </QueenChild>-->
  </div>
</template>
<script>
import QueenChild from "./QueenChild";
import TempVar from "./TempVar";

export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  components: {
    QueenChild,
    TempVar
  }
};
</script>
<style lang="scss" scoped>
</style>
