<template>
  <div id="rotary-child-1">
    <swiper v-if="isShowSwiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../../images/bg1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../images/bg2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../images/bg3.jpg" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: ".swiper-pagination", //分页器挂载到swiper-pagination类对应的元素上
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        loop: true, //开启轮播图前后循环模式
        autoplay: {
          delay: 1000,
          speed: 1000,
          disableOnInteraction: false
        }
      },
      isShowSwiper: true
    };
  },
  created() {
    window.addEventListener("message", e => {
      // console.log(e.data);
      if (typeof e.data === "string") {
        console.log(e);
        // this.swiper.update();
        this.isShowSwiper = false;
        setTimeout(() => {
          this.isShowSwiper = true;
        }, 100);
      }
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="scss">
.swiper-container {
  width: 500px;
  height: 300px;
  margin: 20px auto;
}
img {
  width: 100%;
}
</style>
