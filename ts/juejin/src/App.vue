<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  mounted() {}
}
</script>
<style lang="less">
@import "./styles/global.less";
</style>
