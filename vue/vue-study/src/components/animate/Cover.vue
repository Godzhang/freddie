<template>
  <div class="cover">
    <div class="cover-bg" ref="cover"></div>
    <div class="lamp-box">
      <div class="gradient-box">
        <div
          v-for="color in styles"
          :key="color"
          :class="`gradient ${color}`"
          ref="gradient"
        ></div>
      </div>
      <div
        v-for="color in styles"
        :key="color"
        :class="`lamp ${color}`"
        ref="lamp"
      ></div>
    </div>
    <Slider @slide="onSliderMove" :percentage="percentage"></Slider>
    <div class="load" ref="load" v-if="showLoad">
      <div class="round" ref="round"></div>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider";
import { gradientRgbColors, coverBgColors } from "@/common/global/colors.js";
import { colorMix, actionByPercentage } from "@/common/utils/utils.js";

const documentWidth = document.body.clientWidth;
const documentHeight = document.body.clientHeight;

const styles = ["default", "red", "green", "blue", "white", "yellow"];

export default {
  name: "Cover",
  data() {
    return {
      percentage: 0,
      styles,
      showLoad: true
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    onSliderMove(percentage) {
      this.changeCoverBg(percentage);
      this.changLamp(percentage);
      this.changeGradient(percentage);

      this.percentage = percentage;
    },
    changeCoverBg(percentage) {
      const { red, green, blue, white, yellow, black } = coverBgColors;
      let color_1 = black;
      let color_2 = black;
      let ratio = 1;
      actionByPercentage(percentage, [
        () => {
          color_1 = black;
          color_2 = black;
          ratio = 1;
        },
        () => {
          color_1 = black;
          color_2 = red;
          ratio = percentage / 0.2;
        },
        () => {
          color_1 = red;
          color_2 = green;
          ratio = (percentage - 0.2) / 0.2;
        },
        () => {
          color_1 = green;
          color_2 = blue;
          ratio = (percentage - 0.4) / 0.2;
        },
        () => {
          color_1 = blue;
          color_2 = white;
          ratio = (percentage - 0.6) / 0.2;
        },
        () => {
          color_1 = white;
          color_2 = yellow;
          ratio = (percentage - 0.8) / 0.2;
        }
      ]);
      this.$refs.cover.style.backgroundColor = `${colorMix(
        color_1,
        color_2,
        ratio
      )}`;
    },
    changLamp(percentage) {
      const lamp = this.$refs.lamp;
      actionByPercentage(percentage, [
        (value, ratio) => (lamp[0].style.opacity = 1),
        (value, ratio) => {
          lamp[0].style.opacity = 1 - ratio;
          lamp[1].style.opacity = ratio;
        },
        (value, ratio) => {
          lamp[1].style.opacity = 1 - ratio;
          lamp[2].style.opacity = ratio;
        },
        (value, ratio) => {
          lamp[2].style.opacity = 1 - ratio;
          lamp[3].style.opacity = ratio;
        },
        (value, ratio) => {
          lamp[3].style.opacity = 1 - ratio;
          lamp[4].style.opacity = ratio;
        },
        (value, ratio) => {
          lamp[4].style.opacity = 1 - ratio;
          lamp[5].style.opacity = ratio;
        }
      ]);
    },
    changeGradient(percentage) {
      const gradient = this.$refs.gradient;
      actionByPercentage(percentage, [
        (value, ratio) => {},
        (value, ratio) => {
          gradient[1].style.boxShadow = `0 0 ${ratio * 120}px ${ratio *
            120}px rgba(${gradientRgbColors.red}, 0.5)`;
        },
        (value, ratio) => {
          gradient[2].style.boxShadow = `0 0 ${ratio * 120}px ${ratio *
            120}px rgba(${gradientRgbColors.green}, 0.5)`;
        },
        (value, ratio) => {
          gradient[3].style.boxShadow = `0 0 ${ratio * 120}px ${ratio *
            120}px rgba(${gradientRgbColors.blue}, 0.5)`;
        },
        (value, ratio) => {
          gradient[4].style.boxShadow = `0 0 ${ratio * 120}px ${ratio *
            120}px rgba(${gradientRgbColors.white}, 0.5)`;
        },
        (value, ratio) => {
          gradient[5].style.boxShadow = `0 0 ${ratio * 120}px ${ratio *
            120}px rgba(${gradientRgbColors.yellow}, 0.5)`;
        }
      ]);
    }
  },
  components: { Slider }
};
</script>
<style lang="scss" scoped>
// 考虑使用clip
@keyframes roundExpand {
  0% {
  }
  25% {
  }
  50% {
  }
  75% {
  }
  100% {
  }
}

.cover {
  position: relative;
  width: 100%;
  height: 100%;
  .cover-bg {
    width: 100%;
    height: 100%;
    background-color: #1a1c1e;
  }
  .lamp-box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 158.5px;
    height: 342px;
    .gradient {
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translateX(-50%);
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
    background-color: #646869;
    background-image: radial-gradient(circle, #fff 5%, #646869 15%);
    // .round {
    //   position: absolute;
    //   top: 30%;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   width: 120px;
    //   height: 150px;
    //   border-radius: 50%;
    //   // animation: roundExpand 5s linear forwards;
    //   background-image: radial-gradient(#fff 30%, #646869 70%);
    // }
  }
}
</style>
