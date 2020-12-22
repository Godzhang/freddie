<template>
  <div class="shuffle" ref="shuffle">
    <div class="back">
      <div class="lamp red"></div>
      <div class="light red"></div>
    </div>
    <div class="return-btn" @click="backToCover">
      <img src="../assets/shuffle/return-btn.png" alt class="btn" />
    </div>
    <div class="show">
      <div class="command red"></div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(image, index) in red" :key="index">
          <div
            class="image-box"
            ref="imageBox"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.3s"
          >
            <img class="image" :src="image" :style="imageStyles[index]" alt />
            <div class="mask red"></div>
            <!-- <div class="text">许昕</div> -->
            <div class="erweima"></div>
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
import { redAtlas } from "@/common/global/atlas";
import getCompositionUrl from "@/common/utils/composition";
import TweenMax from "gsap";

const redAtlasCovers = redAtlas.map(item => item[item.length - 1]);

export default {
  inject: ["store"],
  data() {
    return {
      red: redAtlasCovers,
      imageStyles: [],
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
    this.init();
    this.$watch("store.step", step => {
      if (step === 3) {
        Velocity(
          this.$refs.shuffle,
          { translateY: 0, opacity: 1 },
          { duration: 0, mobileHA: false }
        );
        setTimeout(() => {
          this.$refs.mySwiper.$el.classList.add("shake");
        }, 300);
      }
    });
    this.$watch("store.detailType", type => {});
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    init() {
      this.initStyles();
    },
    initStyles() {
      const imageBox = this.$refs.imageBox[0];
      const boxWidth = window.getComputedStyle(imageBox).width.slice(0, -2);
      const boxHeight = window.getComputedStyle(imageBox).height.slice(0, -2);
      const boxRatio = boxWidth / boxHeight;
      const reqs = this.red.map(src => {
        return new Promise(resolve => {
          const img = new Image();
          img.onload = () => {
            const width = img.width;
            const height = img.height;
            const ratio = width / height;
            if (boxRatio < ratio) {
              resolve({
                width: (boxHeight * width) / height + "px",
                height: boxHeight + "px"
              });
            } else {
              resolve({
                width: boxWidth + "px",
                height: (boxWidth * height) / width + "px"
              });
            }
          };
          img.onerror = resolve;
          img.src = src;
        });
      });
      Promise.all(reqs).then(res => {
        this.imageStyles = res;
      });
    },
    async backToCover() {
      this.store.setStep(1);
      await Velocity(this.$refs.shuffle, { opacity: 0 }, { duration: 1000 });
      Velocity(this.$refs.shuffle, { translateY: "-100%" }, { duration: 0 });
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
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>
<style lang="scss" scoped>
@keyframes shake {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.shuffle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #cd3020;
  z-index: 96;
  opacity: 0;
  &.red {
    background-color: #cd3020;
  }
  .return-btn {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 88.3vw;
    img {
      width: 100%;
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
      &.red {
        background: url(../assets/shuffle/red-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    .light {
      position: absolute;
      left: 0;
      bottom: 7vw;
      width: 100%;
      height: 117.47vw;
      &.red {
        background: url(../assets/shuffle/red-light.png) 0 0 no-repeat;
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
    /deep/ .swiper-slide {
      box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.5);
    }
    &.shake {
      animation: shake 5s ease-in-out infinite;
    }
  }
  .swiper-pagination {
    width: 100%;
    top: -4px;
    left: 0;
    /deep/ .swiper-pagination-bullet {
      margin: 0 5px;
    }
    /deep/ .swiper-pagination-bullet-active {
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
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      &.red {
        background: url(../assets/shuffle/red-box.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    .text {
      position: absolute;
      top: 10%;
      right: 15%;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      letter-spacing: 4px;
      text-shadow: 2px 3px 2px rgba($color: #000000, $alpha: 0.5);
    }
    .erweima {
      position: absolute;
      bottom: 3%;
      right: 5%;
      width: 12.53vw;
      height: 16.27vw;
      background: url(../assets/shuffle/erweima.png) 0 0 no-repeat;
      background-size: 100% 100%;
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
