<!--
 * @Author: 张奇
 * @Date: 2019-10-14 23:21:48
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-15 00:13:41
 * @Description: file content
 -->
<template>
  <div id="wrapper">
    <ul>
      <li style="height: 100px;" v-for="i in 30" :key="i">{{ i }}</li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Swiper from "swiper";
import IScroll from "iscroll";

export default {
  data() {
    return {
      swiper: null,
      myScroll: null
    };
  },
  mounted() {
    this.myScroll = new IScroll("#wrapper");
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-perspective: 300px;
  perspective: 300px;
}
.content {
  position: relative;
  width: 100vw;
  height: 100vh;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // height: 50vh;
  background: linear-gradient(#f00, #08c);
  color: #fff;
  font-size: 30px;
}
.item-1 {
  transform: translateY(150px) translateZ(-300px) scale(2);
  // transform: translateZ(-900px) scale(4);
}
.item-2,
.item-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  // transform: translateZ(-300px) scale(2);
  // transform: translateZ(-1500px) scale(6);
  background: none;
}
// .swiper-container,
// .swiper-slide {
//   position: relative;
//   width: 100vw;
//   height: 100vh;
// }
// .swiper-slide {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .swiper-bg {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 5000px;
//   background: linear-gradient(#f00, #08c);
// }
</style>
