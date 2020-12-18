<template>
  <div class="cover" ref="cover">
    <div class="cover-bg" ref="coverBg"></div>
    <!-- <div class="lamp-box" ref="lampBox">
      <div class="gradient" ref="gradient"></div>
      <div v-for="color in styles" :key="color" :class="`lamp ${color}`" ref="lamp"></div>
    </div>-->
    <div class="lamp-box" ref="lampBox">
      <template v-for="color in styles">
        <div :class="['lamp-item', ]" :key="color">
          <div class="gradient"></div>
          <div :class="['lamp', color]"></div>
        </div>
      </template>
    </div>
    <Slider ref="slider" :theme="theme" @slide="onSliderMove"></Slider>
    <div class="load" ref="load">
      <div class="round" ref="round"></div>
      <div class="round-mask"></div>
    </div>
    <div class="flash" ref="flash"></div>
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
  actionByPercentage,
  sleep
} from "@/common/utils/utils.js";

const documentWidth = document.body.clientWidth;
const documentHeight = document.body.clientHeight;

const styles = ["red", "blue", "white", "yellow", "green"];

export default {
  name: "Cover",
  inject: ["store"],
  data() {
    return {
      theme: "red",
      percentage: 0,
      styles
    };
  },
  created() {
    const index = Math.floor(Math.random() * 5);
    this.theme = styles[index];
  },
  mounted() {
    this.init();
    this.load();
  },
  methods: {
    init() {
      this.$refs.coverBg.style.backgroundColor = coverBgColors[this.theme];
      this.load();
    },
    load() {
      const load = this.$refs.load;
      const round = this.$refs.round;
      const lampUrl = require("../assets/cover/lamp.png");
      const img = new Image();
      img.onload = () => {
        setTimeout(() => {
          Velocity(load, { opacity: 0 }, { duration: 300 }).then(() => {
            this.showPage();
            load.remove();
          });
        }, 1000);
      };

      round.classList.add("animate");
      img.src = lampUrl;
    },
    showPage() {
      // Velocity(
      //   this.$refs.lampBox,
      //   { opacity: 1 },
      //   { duration: 800, mobileHA: false }
      // );
      // Velocity(
      //   this.$refs.slider.$el,
      //   { opacity: 1 },
      //   { duration: 800, delay: 400, mobileHA: false }
      // );
    },
    onSliderMove(percentage) {}
  },
  components: { Slider }
};
</script>
<style lang="scss" scoped>
@import "../styles/animate.scss";

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
    .lamp-item {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60vw;
      height: 120vw;
      .gradient {
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
    }
    // .gradient {
    //   position: absolute;
    //   top: 75%;
    //   left: 50%;
    //   transform: translateX(-50%) scale(1);
    //   width: 1px;
    //   height: 1px;
    //   border-radius: 50%;
    //   box-shadow: none;
    // }
    // .lamp {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   opacity: 0;

    //   &.default {
    //     opacity: 1;
    //     background: url(../assets/cover/lamp.png) 0 0 no-repeat;
    //     background-size: 100% 100%;
    //   }
    //   &.red {
    //     background: url(../assets/cover/lamp-red.png) 0 0 no-repeat;
    //     background-size: 100% 100%;
    //   }
    //   &.green {
    //     background: url(../assets/cover/lamp-green.png) 0 0 no-repeat;
    //     background-size: 100% 100%;
    //   }
    //   &.blue {
    //     background: url(../assets/cover/lamp-blue.png) 0 0 no-repeat;
    //     background-size: 100% 100%;
    //   }
    //   &.white {
    //     background: url(../assets/cover/lamp-white.png) 0 0 no-repeat;
    //     background-size: 100% 100%;
    //   }
    //   &.yellow {
    //     background: url(../assets/cover/lamp-yellow.png) 0 0 no-repeat;
    //     background-size: 100% 100%;
    //   }
    // }
  }
  // .lamp-box {
  //   position: absolute;
  //   top: 0;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 42.27vw;
  //   height: 91.2vw;
  //   opacity: 0;
  //   .gradient {
  //     position: absolute;
  //     top: 75%;
  //     left: 50%;
  //     transform: translateX(-50%) scale(1);
  //     width: 1px;
  //     height: 1px;
  //     border-radius: 50%;
  //     box-shadow: none;
  //   }
  //   .lamp {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     opacity: 0;

  //     &.default {
  //       opacity: 1;
  //       background: url(../assets/cover/lamp.png) 0 0 no-repeat;
  //       background-size: 100% 100%;
  //     }
  //     &.red {
  //       background: url(../assets/cover/lamp-red.png) 0 0 no-repeat;
  //       background-size: 100% 100%;
  //     }
  //     &.green {
  //       background: url(../assets/cover/lamp-green.png) 0 0 no-repeat;
  //       background-size: 100% 100%;
  //     }
  //     &.blue {
  //       background: url(../assets/cover/lamp-blue.png) 0 0 no-repeat;
  //       background-size: 100% 100%;
  //     }
  //     &.white {
  //       background: url(../assets/cover/lamp-white.png) 0 0 no-repeat;
  //       background-size: 100% 100%;
  //     }
  //     &.yellow {
  //       background: url(../assets/cover/lamp-yellow.png) 0 0 no-repeat;
  //       background-size: 100% 100%;
  //     }
  //   }
  // }
  // .slider {
  //   opacity: 0;
  // }
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
