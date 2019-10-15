<!--
 * @Author: 张奇
 * @Date: 2019-10-14 23:21:48
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-15 15:34:18
 * @Description: file content
 -->
<template>
  <div ref="scroll" id="wrapper">
    <ul>
      <li
        class="item"
        style="height: 150px;"
        v-for="i in 20"
        :key="i"
        @click="onClick()"
        @tap="onTap()"
      >{{ i }}</li>
      <li ref="sticky" class="item" style="height: 150px;background: #f00;" :top="20">21</li>
      <li
        class="item"
        style="height: 150px;"
        v-for="i in 20"
        :key="i + 21"
        @click="onClick()"
        @tap="onTap()"
      >{{ i + 21 }}</li>
    </ul>
  </div>
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
  mounted() {
    const el = this.$refs.scroll;
    this.scroll = new IScroll("#wrapper", {
      mouseWheel: true,
      probeType: 3,
      snap: ".item",
      scrollbars: true,
      shrinkScrollbars: "scale",
      tap: true,
      click: true
    });
    this.scroll.on("scroll", e => {
      console.log(this.scroll.y);
    });
    const stickyEl = this.$refs.sticky;
    this.scroll.enableStickyHeaders([
      {
        el: stickyEl,
        top: 400
      }
    ]);
  },
  methods: {
    onTap() {
      console.log("tap");
    },
    onClick() {
      console.log("click");
    }
  }
};
</script>
<style lang="scss" scoped>
#wrapper {
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>
