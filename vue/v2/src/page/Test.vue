<template>
  <div class="container">
    <div class="content" style="height: 2024px;">
      <div class="item item-1">
        <img src="../images/history.png" style="width: 100%;" alt />
      </div>
    </div>
    <div class="content">
      <div class="item item-2">item-2</div>
    </div>
    <div class="content">
      <div class="item item-3">item-3</div>
    </div>
    <!-- <div class="swiper-container">
      <div class="swiper-bg"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">swiper-1</div>
        <div class="swiper-slide">swiper-2</div>
        <div class="swiper-slide">swiper-3</div>
      </div>
    </div>-->
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Swiper from "swiper";

export default {
  data() {
    return {
      swiper: null
    };
  },
  mounted() {
    // this.swiper = new Swiper(".swiper-container", {
    //   direction: "vertical",
    //   freeMode: true,
    //   nested: true,
    //   parallax: true
    // });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
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
