<!--
 * @Author: 张奇
 * @Date: 2019-10-14 23:21:48
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-17 15:06:47
 * @Description: file content
 -->
<template>
  <div ref="scroll" id="wrapper"></div>
</template>
<script>
import BScroll from "better-scroll";
import Swiper from "swiper";
import IScroll from "iscroll/build/iscroll-probe";
import enableSticky from "../common/iscroll-sticky";
enableSticky(IScroll);

export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
#wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
