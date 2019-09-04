<template>
  <div class="queen">
    <QueenChild></QueenChild>
    <button @click="onClick()">click</button>
  </div>
</template>
<script>
import QueenChild from "./QueenChild";
import TempVar from "./TempVar";
import Vue from "vue";

export default {
  name: "",
  data() {
    return {
      color: "#f00"
    };
  },
  mounted() {},
  methods: {
    onClick() {}
  },
  components: {
    QueenChild,
    TempVar
  }
};
</script>
<style lang="scss" scoped>
</style>
