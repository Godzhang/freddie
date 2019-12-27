<template>
  <div class="main-header">
    <div class="main-header__container">
      <div class="main-header__container__logo">
        <router-link to="/timeline">
          <!-- <Icon icon-class="logo"></Icon> -->
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
<style lang="less">
@header-height: 60px;
@header-bg: #fff;

.main-header {
  height: @header-height;
  background-color: @header-bg;
  border-bottom: 1px solid #f1f1f1;
  box-sizing: content-box;
  .main-header__container {
    display: flex;
    align-content: center;
    max-width: @layout--width-normal;
    height: 100%;
    margin: 0 auto;
    // .main-header__container__logo {}
  }
}
</style>
