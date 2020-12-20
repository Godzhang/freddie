<template>
  <div class="slider">
    <div class="trail" ref="trail"></div>
    <div class="core-box">
      <div
        class="core-bg"
        ref="coreBg"
        :style="{ width: `${coreBgWidth}px` }"
      ></div>
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
import Velocity from "velocity-animate";
import { sliderIntervalColors } from "@/common/global/colors.js";
import { colorMix, hexToRgba } from "@/common/utils/utils.js";

const vw = document.body.clientWidth / 100;
const CORE_BOX_WIDTH = 61.87 * vw;
const CORE_WIDTH = 12 * vw;
const CORE_MOST_LEFT = CORE_BOX_WIDTH - CORE_WIDTH;

export default {
  name: "Slider",
  props: {
    theme: String
  },
  data() {
    return {
      isMoving: false,
      startX: 0,
      endX: 0
    };
  },
  mounted() {
    this.initStyle();
  },
  computed: {
    coreBgWidth() {
      return this.endX + CORE_WIDTH / 2;
    },
    colors() {
      return sliderIntervalColors[this.theme];
    }
  },
  watch: {
    endX(x) {
      const percentage = x / CORE_MOST_LEFT;
      this.$emit("slide", percentage);
      this.changeColor(percentage);
      if (percentage === 1) {
        this.disableCore();
      }
    },
    colors() {
      this.initStyle();
    }
  },
  methods: {
    initStyle() {
      Velocity(this.$refs.trail, { borderColor: this.colors[0] });
      Velocity(this.$refs.core, { backgroundColor: this.colors[0] });
    },
    onTouchStart(e) {
      this.isMoving = true;
      this.startX = e.touches[0].clientX;
    },
    onTouchMove(e) {
      if (!this.isMoving) return;
      let moveX = e.touches[0].clientX - this.startX;
      this.endX = Math.max(0, Math.min(moveX, CORE_MOST_LEFT));
      this.$refs.core.style.left = this.endX + "px";
    },
    onTouchEnd() {
      this.isMoving = false;
      if (this.endX < CORE_MOST_LEFT) {
        this.resetButton();
      }
    },
    resetButton() {
      let timer = null;
      const fn = () => {
        if (this.endX > 1) {
          this.endX -= this.endX / 5;
        } else {
          this.endX = 0;
          cancelAnimationFrame(timer);
          return;
        }
        this.$refs.core.style.left = this.endX + "px";
        timer = requestAnimationFrame(fn);
      };
      fn();
    },
    changeColor(percentage) {
      const resultColor = colorMix(this.colors[0], this.colors[1], percentage);
      this.$refs.trail.style.borderColor = resultColor;
      this.$refs.core.style.backgroundColor = resultColor;
      this.$refs.coreBg.style.backgroundColor = hexToRgba(resultColor, 50).rgba;
    },
    disableCore() {
      this.$refs.core.style.pointerEvents = "none";
    }
  }
};
</script>
<style lang="scss" scoped>
$slider-width: 66.67vw;
$slider-height: 16vw;
$trail-border-width: 1.2vw;
$trail-width: $slider-width - $trail-border-width * 2;
$trail-height: $slider-height - $trail-border-width * 2;
$core-box-width: 61.87vw;
$core-box-height: 12vw;
$core-size: $core-box-height;
$core-point-size: 9.8vw;

.slider {
  position: absolute;
  bottom: 24vw;
  left: 50%;
  transform: translateX(-50%);
  width: $slider-width;
  height: $slider-height;
  .trail {
    position: absolute;
    top: 0;
    left: 0;
    width: $trail-width;
    height: $trail-height;
    border-width: 1.2vw;
    border-style: solid;
    border-color: #7a8284;
    border-radius: $trail-height;
    overflow: hidden;
  }
  .core-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: $core-box-width;
    height: $core-box-height;
    border-radius: $core-box-height;
    overflow: hidden;
    .core-bg {
      width: 0;
      height: 100%;
    }
    .core {
      position: absolute;
      top: 0;
      left: 0;
      width: $core-size;
      height: $core-size;
      background-color: #7a8284;
      border-radius: $core-size;
      .core-point {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: $core-point-size;
        height: $core-point-size;
        border-radius: $core-point-size;
        box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
