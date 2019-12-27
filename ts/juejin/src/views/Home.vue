<template>
  <JLayout>
    <JHeader slot="header"></JHeader>
  </JLayout>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JLayout from "@/components/common/layout/index.vue";
import JHeader from "@/components/common/header/index.vue";

@Component({
  components: { JLayout, JHeader }
})
export default class Header extends Vue {}
</script>
<style lang="less"></style>
