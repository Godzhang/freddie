<template>
  <div class="cover" ref="cover">
    <div class="cover-bg" ref="coverBg"></div>
    <div class="lamp-box" ref="lampBox">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="color in themes" :key="color">
          <div :class="['lamp-item']" ref="lamp">
            <div class="gradient"></div>
            <div :class="['lamp', color]"></div>
            <div :class="['lamp-light', color]"></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <Slider ref="slider" :theme="theme" @slide="onSliderMove"></Slider>
    <div class="load" ref="load">
      <div class="round" ref="round"></div>
      <div class="round-mask"></div>
    </div>
    <div class="flash" ref="flash"></div>
    <!-- <div style="position: absolute;top:0;left:0;color:#fff;width: 400px;height: 200px">
      <div>width: {{documentWidth}}</div>
      <div>height:{{documentHeight}}</div>
      <div>ratio:{{documentWidth/documentHeight}}</div>
    </div>-->
  </div>
</template>
<script>
import Velocity from "velocity-animate";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {
  gradientColors,
  gradientRgbColors,
  coverBgColors
} from "@/common/global/colors.js";
import {
  colorMix,
  getMixColorRgbStr,
  actionByPercentage,
  sleep,
  clip,
  once
} from "@/common/utils/utils.js";
import Slider from "./Slider";
import { Verify } from "crypto";

const documentWidth = document.body.clientWidth;
const documentHeight = document.body.clientHeight;
const vw = documentWidth / 100;

const themes = ["red", "blue", "white", "yellow", "green"];

export default {
  name: "Cover",
  inject: ["store"],
  data() {
    return {
      documentWidth,
      documentHeight,
      initIndex: 0,
      theme: "red",
      percentage: 0,
      timer: null,
      themes,
      swiperOptions: {
        initialSlide: 0,
        touchRatio: 0.3,
        watchSlidesProgress: true,
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        on: {
          init: () => {
            this.$nextTick(() => {
              this.calcSlidePos();
            });
          },
          progress: progress => {
            this.$nextTick(() => {
              this.calcSlidePos(progress);
            });
          },
          transitionEnd: () => {
            this.$nextTick(() => {
              this.theme = themes[this.swiper.realIndex];
            });
          }
        }
      }
    };
  },
  created() {
    this.initIndex = Math.floor(Math.random() * 5);
    this.theme = themes[this.initIndex];
    this.swiperOptions.initialSlide = this.initIndex;
  },
  mounted() {
    this.init();
    this.bindAudio();
    this.$watch("store.step", step => {
      if (step === 1) {
        this.resetLamp();
        this.resetAround();
        this.$refs.slider.resetButton(true);
        this.pollLight();
      }
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    currentLamp() {
      if (this.swiper) {
        return this.swiper.slides[this.swiper.activeIndex].children[0];
      }
      return null;
    }
  },
  watch: {
    theme(theme) {
      Velocity(this.$refs.coverBg, { backgroundColor: coverBgColors[theme] });
    }
  },
  methods: {
    init() {
      this.$refs.coverBg.style.backgroundColor = coverBgColors[this.theme];
      this.load();
    },
    load() {
      const load = this.$refs.load;
      const round = this.$refs.round;
      const lampUrl = require("../assets/cover/lamp-red.png");
      const img = new Image();
      img.onload = () => {
        setTimeout(() => {
          Velocity(load, { opacity: 0 }, { duration: 300 }).then(() => {
            this.showPage();
            this.initSlide();
            Velocity(load, { translateY: "-100%" }, { duration: 0 });
          });
        }, 1000);
      };

      round.classList.add("animate");
      img.src = lampUrl;
    },
    bindAudio() {
      const slider = this.$refs.slider.$el;
      once(slider, "touchstart", () => {
        this.$audio.playMuted();
      });
      slider.addEventListener("touchend", () => {
        if (this.percentage === 1) {
          this.$audio.play("play-bg");
        }
      });
    },
    showPage() {
      Velocity(
        this.$refs.lampBox,
        { opacity: 1 },
        { duration: 800, mobileHA: false }
      );
      Velocity(
        this.$refs.slider.$el,
        { opacity: 1 },
        { duration: 800, delay: 400, mobileHA: false }
      );
      setTimeout(() => {
        this.pollLight();
      }, 2000);
    },
    onSliderMove(percentage) {
      this.percentage = percentage;
      this.switchLamp(percentage);
      this.fadeOutAround(percentage);
      if (percentage === 1) {
        clearTimeout(this.timer);
        this.animationToNext();
      }
    },
    resetLamp() {
      const { cover } = this.$refs;
      const currentLamp = this.swiper.slides[this.swiper.activeIndex]
        .children[0];
      const [gradient, lamp, lampLight] = currentLamp.childNodes;

      gradient.style.boxShadow = `0 0 0px 0px rgba(0,0,0,0)`;
      Velocity(cover, { translateY: 0 }, { duration: 0, mobileHA: false });
      Velocity(lamp, { opacity: 1 }, { duration: 0, mobileHA: false });
      Velocity(
        this.$refs.slider.$el,
        { opacity: 1 },
        { duration: 0, mobileHA: false }
      );
      Velocity(
        cover,
        { translateY: 0, opacity: 1 },
        { duration: 500, mobileHA: false }
      );
    },
    resetAround() {
      const currentSlide = this.swiper.slides[this.swiper.activeIndex];
      const parent = currentSlide.parentNode;
      const childs = Array.from(parent.childNodes);
      const index = childs.findIndex(child => child === currentSlide);

      Velocity(
        childs[index - 2],
        { opacity: 1 },
        { duration: 0, mobileHA: false }
      );
      Velocity(
        childs[index - 1],
        { opacity: 1 },
        { duration: 0, mobileHA: false }
      );
      Velocity(
        childs[index + 1],
        { opacity: 1 },
        { duration: 0, mobileHA: false }
      );
      Velocity(
        childs[index + 2],
        { opacity: 1 },
        { duration: 0, mobileHA: false }
      );
    },
    async animationToNext() {
      const cover = this.$refs.cover;
      const currentLamp = this.swiper.slides[this.swiper.activeIndex]
        .children[0];
      const [gradient, lamp, lampLight] = currentLamp.childNodes;

      Velocity(lampLight, { opacity: 0 }, { duration: 300, mobileHA: false });
      Velocity(lamp, { opacity: 0 }, { duration: 300, mobileHA: false });
      await Velocity(
        this.$refs.slider.$el,
        { opacity: 0 },
        { duration: 500, delay: 250, mobileHA: false }
      );

      this.store.nextStep();
      await Velocity(
        cover,
        { opacity: 0 },
        { duration: 1000, mobileHA: false }
      );
      Velocity(
        cover,
        { translateY: "-100%" },
        { duration: 0, mobileHA: false }
      );
    },
    initSlide() {
      const slides = this.swiper.slides;
      const activeIndex = this.swiper.activeIndex;
      const allSlides = Object.values(slides).slice(0, -1);
      for (let i = 0; i < allSlides.length; i++) {
        const slide = allSlides[i];

        if (activeIndex === i) {
          Velocity(slide, { opacity: 1 }, { duration: 1000 });
        } else if (activeIndex === i + 1 || activeIndex === i - 1) {
          Velocity(slide, { opacity: 1 }, { duration: 500, delay: 800 });
        } else {
          Velocity(slide, { opacity: 1 }, { duration: 500, delay: 1000 });
        }
      }
    },
    calcSlidePos(progress) {
      const coverBg = this.$refs.coverBg;
      const slides = this.swiper.slides;
      const activeIndex = this.swiper.activeIndex;
      const allSlides = Object.values(slides).slice(0, -1);
      for (let i = 0; i < allSlides.length; i++) {
        const slide = allSlides[i];
        const slideProgress = slide.progress;
        const lampItem = slide.children[0];
        const [gradient, lamp, lampLight] = lampItem.childNodes;

        let scale = 1 - Math.abs(slideProgress) / 5;
        let translateY = -(129.6 * vw * (1 - scale)) / 2;
        let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        let opacity = 1;

        if (activeIndex === i + 1 || activeIndex === i - 1) {
          lamp.style.filter = `brightness(0.5)`;
          opacity = 0.8;
        } else if (activeIndex === i + 2 || activeIndex === i - 2) {
          lamp.style.filter = `brightness(0.3)`;
          opacity = 0.6;
        } else {
          lamp.style.filter = `brightness(${activeIndex === i ? 1 : 0.3})`;
          opacity = activeIndex === i ? 1 : 0.3;
          // if (activeIndex === i) {
          //   coverBg.style.backgroundColor = `rgba(${colorMix()}, 1)`
          //   console.log(slideProgress);
          // }
        }

        Velocity(slide, { translateY, scale, zIndex }, { duration: 0 });
      }
    },
    switchLamp(percentage) {
      const currentLamp = this.swiper.slides[this.swiper.activeIndex]
        .children[0];
      const [gradient, lamp, lampLight] = currentLamp.childNodes;
      Velocity(
        lampLight,
        { opacity: clip(percentage + 0.5, 0, 1) },
        { duration: 0 }
      );
      Velocity(lamp, { opacity: 1 - percentage }, { duration: 0 });
      gradient.style.boxShadow = `0 0 ${120}px ${(percentage * documentHeight) /
        1.2}px rgba(${gradientRgbColors[this.theme]}, 0.5)`;
    },
    fadeOutAround(percentage) {
      const currentSlide = this.swiper.slides[this.swiper.activeIndex];
      const parent = currentSlide.parentNode;
      const childs = Array.from(parent.childNodes);
      const index = childs.findIndex(child => child === currentSlide);
      let ratio = 1;
      if (percentage <= 0.5) {
        ratio = (0.5 - percentage) / 0.5;
      } else {
        ratio = 0;
      }

      Velocity(
        childs[index - 2],
        { opacity: ratio },
        { duration: 0, mobileHA: false }
      );
      Velocity(
        childs[index - 1],
        { opacity: ratio },
        { duration: 0, mobileHA: false }
      );
      Velocity(
        childs[index + 1],
        { opacity: ratio },
        { duration: 0, mobileHA: false }
      );
      Velocity(
        childs[index + 2],
        { opacity: ratio },
        { duration: 0, mobileHA: false }
      );
    },
    pollLight(prevIndex = -1) {
      const fn = async () => {
        const { slides, activeIndex } = this.swiper;
        const arr = [
          activeIndex - 2,
          activeIndex - 1,
          activeIndex + 1,
          activeIndex + 2
        ].filter(i => i !== prevIndex);
        const random = Math.floor(Math.random() * arr.length);
        const index = arr[random];
        const slide = slides[index];
        const [gradient, lamp, lampLight] = slide.children[0].childNodes;

        await Velocity(
          lampLight,
          { opacity: 0.8 },
          { duration: 1000, mobileHA: false }
        );
        await Velocity(
          lampLight,
          { opacity: 0 },
          { duration: 1000, mobileHA: false }
        );
        this.timer = setTimeout(fn, 2000);
      };

      setTimeout(fn, 2000);
    }
  },
  components: { Slider }
};
</script>
<style lang="scss" scoped>
@import "../styles/animate.scss";

// $lamp-small-width: 44vw;
// $lamp-small-height: 115vw;
$lamp-width: 44vw;
$lamp-height: 115vw;
// $lamp-width: 47.07vw;
// $lamp-height: 129.6vw;
// @media screen and (max-height: 650px) {
//   $lamp-width: 40vw;
//   $lamp-height: 65vh;
// }

@keyframes roundExpand {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.25);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.cover {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 100;
  .cover-bg {
    width: 100%;
    height: 100%;
  }
  .lamp-box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    .swiper-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /deep/ .swiper-slide {
        width: $lamp-width;
        height: $lamp-height;
        opacity: 0;
      }
    }
    .lamp-item {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: $lamp-width;
      height: $lamp-height;
      .gradient {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-50%) scale(1);
        width: 1px;
        height: 1px;
        border-radius: 50%;
        box-shadow: none;
      }
      .lamp {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &.red {
          background: url(../assets/cover/lamp-red.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.green {
          background: url(../assets/cover/lamp-green.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.blue {
          background: url(../assets/cover/lamp-blue.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.white {
          background: url(../assets/cover/lamp-white.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.yellow {
          background: url(../assets/cover/lamp-yellow.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
      }
      .lamp-light {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        &.red {
          background: url(../assets/cover/lamp-red-light.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.green {
          background: url(../assets/cover/lamp-green-light.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.blue {
          background: url(../assets/cover/lamp-blue-light.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.white {
          background: url(../assets/cover/lamp-white-light.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
        &.yellow {
          background: url(../assets/cover/lamp-yellow-light.png) 0 0 no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
  .load {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a1c1e;
    .round {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 1px;
      height: 1px;
      background-color: rgba($color: #4e5158, $alpha: 0.5);
      border-radius: 50%;
      box-shadow: 0 0 20px 40px #4e5158;
      animation: roundExpand 1.5s linear infinite;
    }
  }
  .flash {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 10;
    background-color: #fff;
    &.animate {
      display: block;
      animation: flash 0.6s ease forwards;
    }
  }
}
</style>
