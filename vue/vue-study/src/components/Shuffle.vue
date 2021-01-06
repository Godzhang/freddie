<template>
  <div class="shuffle" ref="shuffle">
    <div class="back">
      <div :class="['lamp', type]"></div>
      <div :class="['light', type]"></div>
    </div>
    <div class="return-btn" @click="backToPage(1)">
      <img src="../assets/shuffle/return-btn.png" alt class="btn" />
    </div>
    <!-- <div class="vote-box">
      <span class="vote-num">0</span>
      <span class="vote-done">已投票</span>
      <div :class="['vote-btn', type]">
        <span class="txt">投票</span>
      </div>
    </div>-->
    <div class="show">
      <div class="command red"></div>
      <swiper ref="mySwiper" :options="swiperOptions" @click="showDetail">
        <swiper-slide v-for="(image, index) in swiperAtlas" :key="index">
          <div class="image-box" ref="imageBox">
            <img class="image" :src="image" alt />
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
import Velocity from "velocity-animate";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { altasCover, redAtlas } from "@/common/global/atlas";
import { gradientColors, shuffleBgColors } from "@/common/global/colors";
import getCompositionUrl from "@/common/utils/composition";
import TweenMax from "gsap";

export default {
  inject: ["store"],
  data() {
    return {
      type: "red",
      images: [],
      swiperAtlas: [],
      swiperOptions: {
        loop: true,
        speed: 400,
        effect: "myCustomTransition",
        pagination: {
          el: ".swiper-pagination"
        },
        virtualTranslate: true,
        watchSlidesProgress: true,
        on: {
          setTranslate: translate => {
            if (this.$refs.mySwiper && this.$refs.mySwiper.$swiper) {
              this.setTranslate(this.$refs.mySwiper.$swiper, translate);
            }
          }
        }
      }
    };
  },
  mounted() {
    this.initType(this.store.colorType);
    this.$watch("store.step", step => {
      if (step === 3) {
        Velocity(
          this.$refs.shuffle,
          { translateY: "0", opacity: 1 },
          { duration: 0, mobileHA: false }
        );
        setTimeout(() => {
          this.swiper.slideToLoop(this.store.groupIndex, 0);
        }, 300);
      }
    });
    this.$watch("store.colorType", type => {
      this.initType(type);
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  watch: {
    async images(images) {
      this.swiperAtlas = await getCompositionUrl(images, this.type);
    }
  },
  methods: {
    initType(type) {
      this.type = type;
      this.images = altasCover[type];
      this.$refs.shuffle.style.backgroundColor = shuffleBgColors[type];
    },
    async backToPage(pageNum) {
      const shuffle = this.$refs.shuffle;
      const prevzIndex = shuffle.style.zIndex;
      shuffle.style.zIndex = 10000;
      this.store.setStep(pageNum);
      await Velocity(
        shuffle,
        { opacity: 0 },
        { duration: 1000, mobileHA: false }
      );
      shuffle.style.transform = `translateY(-100%)`;
      shuffle.style.zIndex = prevzIndex;
      if (pageNum === 2) {
        this.$audio.play("play-bg");
      }
    },
    setTranslate(swiper, translate) {
      const { activeIndex, slides } = swiper;
      const allSlides = Object.values(slides).slice(0, -1);
      allSlides.map((slide, index) => {
        const offset = slide.swiperSlideOffset;
        let x = -offset;
        if (!swiper.params.virtualTranslate) {
          x -= swiper.translate;
        }
        let y = 0;
        if (!swiper.isHorizontal()) {
          y = x;
          x = 0;
        }
        TweenMax.set(slide, {
          x,
          y
        });
        const clip = (val, min, max) => Math.max(min, Math.min(val, max));
        const ZOOM_FACTOR = 0.8; // 淡入 scale 0.4, 淡出 scale 0.4
        const clippedProgress = clip(slide.progress, -1, 1);
        const scale = 1 - Math.abs(ZOOM_FACTOR * clippedProgress);
        // slide.progress为0时，透明度从1到0；slide.progress 为正负1时，透明度从0.5到1
        const opacity = scale > 0.6 ? 1 : 0;
        TweenMax.to(slide, 0.3, { scale, opacity });
      });
    },
    showDetail() {
      const groupIndex = this.swiper.realIndex;
      this.store.setGroupIndex(groupIndex);
      this.backToPage(2);
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>
<style lang="scss" scoped>
.shuffle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 96;
  opacity: 0;
  &.red {
    background-color: #cd3020;
  }
  .return-btn {
    position: absolute;
    top: 4.25vw;
    right: 0;
    width: 20vw;
    img {
      width: 100%;
    }
  }
  .vote-box {
    $vote-box-height: 9vw;
    $vote-skew-deg: -20deg;
    box-sizing: border-box;
    position: absolute;
    top: 10vw;
    left: 50%;
    transform: translateX(-50%);
    min-width: 32vw;
    height: $vote-box-height;
    color: #fff;
    padding: 0 16vw 0 0;
    text-align: center;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      transform: skew($vote-skew-deg);
    }
    .vote-num {
      position: relative;
      display: inline-block;
      height: $vote-box-height;
      line-height: $vote-box-height;
      padding: 0 2vw;
    }
    .vote-done {
      position: absolute;
      top: 0;
      right: 0;
      height: $vote-box-height;
      line-height: $vote-box-height;
      padding-right: 2vw;
    }
    .vote-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 15vw;
      height: $vote-box-height;
      line-height: $vote-box-height;
      text-align: center;
      .txt {
        position: relative;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: skew($vote-skew-deg);
      }
      &.red {
        &::before {
          background-color: #ffa868;
        }
      }
      &.green {
        &::before {
          background-color: #ffeb68;
        }
      }
      &.blue {
        &::before {
          background-color: #68a4ff;
        }
      }
      &.white {
        &::before {
          background-color: #ffffff;
        }
      }
      &.yellow {
        &::before {
          background-color: #7eff4b;
        }
      }
    }
  }
  .back {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .lamp {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 67.87vw;
      height: 18.13vw;
      // @each $color in red, green, blue, white, yellow {
      //   &.#{$color} {
      //     background: url("~@/assets/shuffle/#{$color}-lamp.png") 0 0 no-repeat;
      //     background-size: 100% 100%;
      //   }
      // }
      &.red {
        background: url("~@/assets/shuffle/red-lamp.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.green {
        background: url("~@/assets/shuffle/green-lamp.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.blue {
        background: url("~@/assets/shuffle/blue-lamp.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.white {
        background: url("~@/assets/shuffle/white-lamp.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.yellow {
        background: url("~@/assets/shuffle/yellow-lamp.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    .light {
      position: absolute;
      left: 0;
      bottom: 7vw;
      width: 100%;
      height: 117.47vw;
      // @each $color in red, green, blue, white, yellow {
      //   &.#{$color} {
      //     background: url("~@/assets/shuffle/#{$color}-light.png")
      //       0
      //       0
      //       no-repeat;
      //     background-size: 100% 100%;
      //   }
      // }
      &.red {
        background: url("~@/assets/shuffle/red-light.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.green {
        background: url("~@/assets/shuffle/green-light.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.blue {
        background: url("~@/assets/shuffle/blue-light.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.white {
        background: url("~@/assets/shuffle/white-light.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.yellow {
        background: url("~@/assets/shuffle/yellow-light.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .show {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    width: 73.1vw;
    height: 122.67vw;
  }
  .swiper-container {
    position: absolute;
    top: 6.93vw;
    left: 0;
    width: 63.2vw;
    height: 94.4vw;
    overflow: visible;
    ::v-deep .swiper-slide {
      box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.5);
    }
  }
  .swiper-pagination {
    width: 100%;
    top: -4px;
    left: 0;
    ::v-deep .swiper-pagination-bullet {
      margin: 0 5px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
  .image-box {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }
  .command {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 65.6vw;
    height: 26vw;
    background-color: #000;
    &.red {
      background: url(../assets/shuffle/red-text.png) 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
