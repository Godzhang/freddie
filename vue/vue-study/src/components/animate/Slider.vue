<template>
  <div class="slider">
    <div class="trail" ref="trail"></div>
    <div class="core-box">
      <div class="core-bg" ref="coreBg" :style="{ width: `${coreBgWidth}px` }"></div>
      <div
        class="core"
        ref="core"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <div class="core-point"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { sliderColors } from "@/common/global/colors.js";
import {
  colorMix,
  hexToRgba,
  actionByPercentage
} from "@/common/utils/utils.js";

const CORE_BOX_WIDTH = 232;
const CORE_WIDTH = 45;
const CORE_MOST_LEFT = CORE_BOX_WIDTH - CORE_WIDTH;

export default {
  name: "Slider",
  props: {
    percentage: Number
  },
  data() {
    return {
      isMoving: false,
      startX: 0,
      endX: 0,
      posX: 0
    };
  },
  mounted() {},
  computed: {
    coreBgWidth() {
      return this.endX + CORE_WIDTH / 2;
    }
  },
  watch: {
    endX(x) {
      this.$emit("slide", x / CORE_MOST_LEFT);
    },
    percentage: "changeColor"
  },
  methods: {
    onTouchStart(e) {
      this.isMoving = true;
      this.startX = e.touches[0].clientX;
    },
    onTouchMove(e) {
      if (!this.isMoving) return;
      let moveX = e.touches[0].clientX - this.startX;
      this.endX = Math.max(0, Math.min(this.posX + moveX, CORE_MOST_LEFT));
      this.$refs.core.style.left = this.endX + "px";
    },
    onTouchEnd() {
      this.isMoving = false;
      this.startX = this.endX;
      this.posX = this.endX;
    },
    changeColor(percentage) {
      const { init, red, green, blue, white, yellow } = sliderColors;
      let color_1 = init;
      let color_2 = init;
      let colorRatio = 1;
      actionByPercentage(percentage, [
        (value, ratio) => {
          color_1 = init;
          color_2 = init;
          colorRatio = 1;
        },
        (value, ratio) => {
          color_1 = init;
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
      const resultColor = colorMix(color_1, color_2, colorRatio);
      this.$refs.trail.style.borderColor = resultColor;
      this.$refs.core.style.backgroundColor = resultColor;
      this.$refs.coreBg.style.backgroundColor = hexToRgba(resultColor, 50).rgba;
    }
  }
};
</script>
<style lang="scss" scoped>
.slider {
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 60px;
  .trail {
    width: 240px;
    height: 50px;
    border-width: 5px;
    border-style: solid;
    border-color: #7a8284;
    border-radius: 50px;
    overflow: hidden;
  }
  .core-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 232px;
    height: 45px;
    border-radius: 45px;
    overflow: hidden;
    .core-bg {
      width: 0;
      height: 100%;
      background-color: #0d0b07;
    }
    .core {
      position: absolute;
      top: 0;
      left: 0;
      width: 45px;
      height: 45px;
      background-color: #7a8284;
      border-radius: 45px;
      .core-point {
        width: 37px;
        height: 37px;
        margin: 4px;
        border-radius: 37px;
        box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
