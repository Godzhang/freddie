<template>
  <div class="detail">
    <div class="return-btn"><span>返回</span></div>
    <div class="show">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { redAtlas } from "@/common/global/atlas";

export default {
  inject: ["store"],
  data() {
    return {
      red: redAtlas,
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
    this.init();
    this.$watch("store.detailType", type => {});
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    init() {
      // this.swiper = new Swiper(".swiper-container", {
      //   loop: true,
      //   pagination: {
      //     el: ".swiper-pagination"
      //   }
      // });
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>
<style lang="scss" scoped>
.detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f00;
  .return-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 100vw;
      height: 100vw;
      background-color: #000;
      border-radius: 50%;
    }
    span {
      position: relative;
      display: inline-block;
      font-size: 20px;
      line-height: 40px;
      color: #fff;
    }
  }
  .show {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%);
    width: 80vw;
    height: 430px;
  }
  .swiper-container {
    // --swiper-pagination-color: #00ff33;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 400px;
    background-color: #08c;
    overflow-y: visible;
  }
  .swiper-pagination {
    $pagination-height: 16px;
    width: 100%;
    top: 7px;
    left: 50%;
    transform: translate(-50%);
    /deep/ .swiper-pagination-bullet {
      margin: 0 4px;
    }
  }
}
</style>
