<!--
 * @Author: 张奇
 * @Date: 2019-10-01 07:52:01
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-06 09:23:26
 * @Description: file content
 -->
<template>
  <swiper class="container" :options="swiperOption" ref="mySwiper">
    <swiper-slide class="item">
      <div class="page">
        <img src="../images/page/page-1.png" alt>
      </div>
    </swiper-slide>
    <swiper-slide class="item" :class="{'swiper-no-swiping': true}">
      <div class="page">
        <img src="../images/page/page-2.png" alt>
      </div>
    </swiper-slide>
    <!-- <swiper-slide class="item swiper-no-swiping">
      <PageB></PageB>
    </swiper-slide>-->
    <!-- <swiper-slide class="item">I'm Slide 1</swiper-slide>
    <swiper-slide class="item">I'm Slide 2</swiper-slide>
    <swiper-slide class="item">I'm Slide 3</swiper-slide>
    <swiper-slide class="item">I'm Slide 4</swiper-slide>
    <swiper-slide class="item">I'm Slide 5</swiper-slide>
    <swiper-slide class="item">I'm Slide 6</swiper-slide>
    <swiper-slide class="item">I'm Slide 7</swiper-slide>-->
  </swiper>
</template>
<script>
import PageA from "./PageA";
import PageB from "./PageB";

export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        noSwiping: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {},
  components: {
    PageA,
    PageB
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.item {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.page {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
}
</style>
