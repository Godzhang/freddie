<template>
  <div class="cover" ref="cover">
    <div class="cover-bg" ref="coverBg"></div>
    <div class="lamp-box" ref="lampBox">
      <!-- <div class="gradient-box">
        <div
          v-for="color in styles"
          :key="color"
          :class="`gradient ${color}`"
          ref="gradient"
        ></div>
      </div>-->
      <div class="gradient" ref="gradient"></div>
      <div v-for="color in styles" :key="color" :class="`lamp ${color}`" ref="lamp"></div>
    </div>
    <Slider ref="slider" @slide="onSliderMove"></Slider>
    <div class="load" ref="load">
      <div class="round" ref="round"></div>
      <div class="round-mask"></div>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider";
import Velocity from "velocity-animate";
import {
  gradientColors,
  gradientRgbColors,
  coverBgColors
} from "@/common/global/colors.js";
import {
  colorMix,
  getMixColorRgbStr,
  actionByPercentage
} from "@/common/utils/utils.js";

const documentWidth = document.body.clientWidth;
const documentHeight = document.body.clientHeight;

const styles = ["default", "red", "green", "blue", "white", "yellow"];

export default {
  name: "Cover",
  inject: ["store"],
  data() {
    return {
      percentage: 0,
      styles
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const load = this.$refs.load;
      const round = this.$refs.round;
      const lampUrl = require("../../assets/cover/lamp.png");
      const img = new Image();
      img.onload = () => {
        // Velocity(load, { opacity: 0 }, { duration: 300 }).then(() => {
        //   load.remove();
        // });
        setTimeout(() => {
          Velocity(load, { opacity: 0 }, { duration: 300 }).then(() => {
            load.remove();
          });
        }, 1000);
      };

      round.classList.add("animate");
      img.src = lampUrl;
    },
    onSliderMove(percentage) {
      this.changeCoverBg(percentage);
      this.changLamp(percentage);
      this.changeGradient(percentage);
      this.percentage = percentage;
      if (percentage === 1) {
        // this.animateToEnd();
      }
    },
    changeCoverBg(percentage) {
      const { red, green, blue, white, yellow, black } = coverBgColors;
      let color_1 = black;
      let color_2 = black;
      let colorRatio = 1;
      actionByPercentage(percentage, [
        (value, ratio) => {
          color_1 = black;
          color_2 = black;
          colorRatio = 1;
        },
        (value, ratio) => {
          color_1 = black;
          color_2 = red;
          colorRatio = ratio;
        },
        (value, ratio) => {
          color_1 = red;
          color_2 = green;
          colorRatio = ratio;
        },
        (value, ratio) => {
          color_1 = green;
          color_2 = blue;
          colorRatio = ratio;
        },
        (value, ratio) => {
          color_1 = blue;
          color_2 = white;
          colorRatio = ratio;
        },
        (value, ratio) => {
          color_1 = white;
          color_2 = yellow;
          colorRatio = ratio;
        }
      ]);
      this.$refs.coverBg.style.backgroundColor = `${colorMix(
        color_1,
        color_2,
        colorRatio
      )}`;
    },
    changLamp(percentage) {
      const lamp = this.$refs.lamp;
      actionByPercentage(percentage, [
        (value, ratio) => (lamp[0].style.opacity = 1),
        (value, ratio, contrastRatio) => {
          lamp[0].style.opacity = contrastRatio;
          lamp[1].style.opacity = ratio;
        },
        (value, ratio, contrastRatio) => {
          lamp[1].style.opacity = contrastRatio;
          lamp[2].style.opacity = ratio;
        },
        (value, ratio, contrastRatio) => {
          lamp[2].style.opacity = contrastRatio;
          lamp[3].style.opacity = ratio;
        },
        (value, ratio, contrastRatio) => {
          lamp[3].style.opacity = contrastRatio;
          lamp[4].style.opacity = ratio;
        },
        (value, ratio, contrastRatio) => {
          lamp[4].style.opacity = contrastRatio;
          lamp[5].style.opacity = ratio;
        }
      ]);
    },
    changeGradient(percentage) {
      const gradient = this.$refs.gradient;
      const { red, green, blue, white, yellow } = gradientColors;
      actionByPercentage(percentage, [
        (value, ratio) => {},
        (value, ratio, contrastRatio) => {
          gradient.style.boxShadow = `0 0 ${(value + 0.2) * 100}px ${(value +
            0.2) *
            200}px rgba(${getMixColorRgbStr(red, "#fff", ratio)}, ${Math.max(
            0.5,
            value
          )})`;
        },
        (value, ratio, contrastRatio) => {
          gradient.style.boxShadow = `0 0 ${(value + 0.2) * 100}px ${(value +
            0.2) *
            200}px rgba(${getMixColorRgbStr(red, green, ratio)}, ${Math.max(
            0.5,
            value
          )})`;
        },
        (value, ratio, contrastRatio) => {
          gradient.style.boxShadow = `0 0 ${(value + 0.2) * 100}px ${(value +
            0.2) *
            200}px rgba(${getMixColorRgbStr(green, blue, ratio)}, ${Math.max(
            0.5,
            value
          )})`;
        },
        (value, ratio, contrastRatio) => {
          gradient.style.boxShadow = `0 0 ${(value + 0.2) * 100}px ${(value +
            0.2) *
            200}px rgba(${getMixColorRgbStr(white, blue, ratio)}, ${Math.max(
            0.5,
            value
          )})`;
        },
        (value, ratio, contrastRatio) => {
          gradient.style.boxShadow = `0 0 ${(value + 0.2) * 100}px ${(value +
            0.2) *
            200}px rgba(${getMixColorRgbStr(white, yellow, ratio)}, ${Math.max(
            0.5,
            value
          )})`;
        }
      ]);
    },
    // changeGradient(percentage) {
    //   const gradient = this.$refs.gradient;
    //   const { red, green, blue, white, yellow } = gradientColors;
    //   actionByPercentage(percentage, [
    //     (value, ratio) => {},
    //     (value, ratio, contrastRatio) => {
    //       gradient.style.boxShadow = `0 0 ${Math.max(0.2, value) *
    //         200}px ${Math.max(0.2, value) * 200}px rgba(${getMixColorRgbStr(
    //         red,
    //         "#fff",
    //         ratio
    //       )}, ${Math.max(0.5, value)})`;
    //     },
    //     (value, ratio, contrastRatio) => {
    //       gradient.style.boxShadow = `0 0 ${value * 200}px ${value *
    //         200}px rgba(${getMixColorRgbStr(green, red, ratio)}, ${Math.max(
    //         0.5,
    //         value
    //       )})`;
    //     },
    //     (value, ratio, contrastRatio) => {
    //       gradient.style.boxShadow = `0 0 ${value * 200}px ${value *
    //         200}px rgba(${getMixColorRgbStr(blue, green, ratio)}, ${Math.max(
    //         0.5,
    //         value
    //       )})`;
    //     },
    //     (value, ratio, contrastRatio) => {
    //       gradient.style.boxShadow = `0 0 ${value * 200}px ${value *
    //         200}px rgba(${getMixColorRgbStr(blue, white, ratio)}, ${Math.max(
    //         0.5,
    //         value
    //       )})`;
    //     },
    //     (value, ratio, contrastRatio) => {
    //       gradient.style.boxShadow = `0 0 ${value * 200}px ${value *
    //         200}px rgba(${getMixColorRgbStr(yellow, white, ratio)}, ${Math.max(
    //         0.5,
    //         value
    //       )})`;
    //     }
    //   ]);
    // },
    animateToEnd() {
      Velocity(this.$refs.lampBox, "fadeOut", { duration: 1500 });
      Velocity(this.$refs.slider.$el, "fadeOut", { duration: 1500 });
      Velocity(this.$refs.coverBg, "fadeOut", {
        duration: 1200,
        delay: 500
      }).then(() => {
        this.$refs.cover.remove();
        this.store.nextStep();
      });
    }
  },
  components: { Slider }
};
</script>
<style lang="scss" scoped>
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
  // 25% {
  //   transform: translate(-50%, -50%) scale(1.3);
  // }
  // 50% {
  //   transform: translate(-50%, -50%) scale(1);
  // }
  // 75% {
  //   transform: translate(-50%, -50%) scale(1.8);
  //   opacity: 1;
  // }
  // 100% {
  //   transform: translate(-50%, -50%) scale(15);
  //   opacity: 0;
  // }
}

.cover {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 100;
  .cover-bg {
    width: 100%;
    height: 100%;
    background-color: #1a1c1e;
  }
  .lamp-box {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -79.25px;
    width: 158.5px;
    height: 342px;
    .gradient {
      position: absolute;
      top: 75%;
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
      opacity: 0;

      &.default {
        opacity: 1;
        background: url(../../assets/cover/lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.red {
        background: url(../../assets/cover/lamp-red.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.green {
        background: url(../../assets/cover/lamp-green.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.blue {
        background: url(../../assets/cover/lamp-blue.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.white {
        background: url(../../assets/cover/lamp-white.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      &.yellow {
        background: url(../../assets/cover/lamp-yellow.png) 0 0 no-repeat;
        background-size: 100% 100%;
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
      // animation: roundExpand 3s linear forwards;
      // width: 140px;
      // height: 160px;
      // border-radius: 50%;
      // border: 9999px solid #1a1c1e;
      // box-shadow: inset 0 0 10px 30px #1a1c1e;
      // &.animate {
      //   animation: roundExpand 3s linear forwards;
      // }
    }
    // .round-mask {
    //   position: absolute;
    //   top: 35%;
    //   left: 50%;
    //   transform: translate(-50%, -50%) scale(1);
    //   width: 130px;
    //   height: 150px;
    //   border-radius: 50%;
    //   border: 9999px solid #1a1c1e;
    //   overflow: hidden;
    //   &.animate {
    //     animation: roundExpand 3s linear forwards;
    //   }
    // }
  }
}
</style>
