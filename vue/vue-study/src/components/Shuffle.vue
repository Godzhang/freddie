<template>
  <div class="shuffle" ref="shuffle">
    <div class="return-btn" @click="backToMoment">
      <img src="../assets/shuffle/return-btn.png" alt class="btn" />
    </div>
    <div class="back">
      <div class="lamp red"></div>
      <div class="light red"></div>
    </div>
    <div class="show">
      <div class="command red"></div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(image, index) in red" :key="index">
          <div class="image-box" ref="imageBox">
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
      currentTransitionSpeed: 0,
      red: redAtlasCovers,
      imageStyles: [],
      swiperOptions: {
        loop: true,
        speed: 400,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination"
        },
        virtualTranslate: true,
        watchSlidesProgress: true,
        on: {
          progress: progress => {
            if (this.$refs.mySwiper && this.$refs.mySwiper.$swiper) {
              const swiper = this.$refs.mySwiper.$swiper;
              this.onProgress(swiper, progress);
            }
          },
          setTransition: transition => {
            if (this.$refs.mySwiper && this.$refs.mySwiper.$swiper) {
              const swiper = this.$refs.mySwiper.$swiper;
              this.onSetTransition(swiper, transition);
            }
          },
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
      if (step === 4) {
        this.$refs.shuffle.style.opacity = 1;
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
    backToMoment() {},
    onProgress(swiper, progress) {
      // console.log(swiper, progress);
    },
    onSetTransition(swiper, transition) {
      this.currentTransitionSpeed = transition;
    },
    // setTranslate(swiper, translate) {
    //   const { activeIndex, slides } = swiper;
    //   const swiperWidth = swiper.width;
    //   let distance = Math.abs(translate);
    //   let merchant = Math.floor(distance / swiperWidth);
    //   let moveX = distance - swiperWidth * merchant;
    //   let percentage = moveX / swiperWidth;
    //   console.log('percentage', percentage)
    //   slides[activeIndex].style.transform = `scale(${1 - percentage})`;
    //   slides[activeIndex + 1].style.transform = `scale(${percentage})`;
    // }
    setTranslate(swiper, translate) {
      const { activeIndex, slides } = swiper;
      const allSlides = Object.values(slides).slice(0, -1);
      allSlides.forEach((slide, index) => {
        /**
         * watchSlidesProgress: true, 活动块slide的progress为0, 其他依次减1
         * 例：如果一共有6个slide, 则progress属性分别是：2、1、0、-1、-2、-3
         **/
        const clip = (val, min, max) => Math.max(min, Math.min(val, max));
        const ZOOM_FACTOR = 0.4;
        const clippedProgress = clip(slide.progress, -1, 1);
        const scale = 1 - Math.abs(ZOOM_FACTOR * clippedProgress);
        // slide.progress为0时，透明度从1到0；slide.progress 为正负1时，透明度从0.5到1
        TweenMax.to(slide, 0.3, { scale, delay: 0.3 });
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
    // overflow-y: visible;
    // overflow: visible;
    overflow: hidden;
    /deep/ .swiper-slide {
      // box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.5);
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
