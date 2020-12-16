<template>
  <div class="moment" ref="moment">
    <div
      ref="item"
      v-for="(color, index) in colors"
      :key="color"
      :class="`item ${color}`"
      @click="showDetail(index)"
    >
      <div class="bg"></div>
      <div class="photo"></div>
      <div class="light-bg"></div>
      <div class="light"></div>
      <div class="lamp"></div>
      <div class="text"></div>
    </div>
  </div>
</template>
<script>
import Velocity from "velocity-animate";

const colors = ["red", "green", "blue", "white", "yellow"];

export default {
  inject: ["store"],
  data() {
    return {
      colors
    };
  },
  mounted() {
    const moment = this.$refs.moment;
    this.$watch("store.step", step => {
      if (step === 2) {
        this.init();
        this.animate();
      }
    });
  },
  methods: {
    init() {},
    animate() {
      const total = 5;
      const duration = 400;
      for (let i = 0; i < total; i++) {
        const item = this.$refs.item[i];
        const lightBg = item.querySelector(".light-bg");
        const light = item.querySelector(".light");
        const text = item.querySelector(".text");
        const itemDelay = (i * duration) / 2;
        const lightDelay = itemDelay + 100;

        Velocity(item, { opacity: 1 }, { duration, delay: itemDelay });
        Velocity(light, { opacity: 1 }, { duration: 200, delay: lightDelay });
        Velocity(lightBg, { opacity: 1 }, { duration: 200, delay: lightDelay });
      }
    },
    async showDetail(index) {
      const items = this.$refs.item;
      const currentItem = items[index];
      const moment = this.$refs.moment;
      const bg = currentItem.querySelector(".bg");
      const lamp = currentItem.querySelector(".lamp");
      const lightBg = currentItem.querySelector(".light-bg");
      const light = currentItem.querySelector(".light");
      const text = currentItem.querySelector(".text");

      this.store.setType(colors[index]);

      Velocity(bg, { scaleY: 20 }, { duration: 0 });
      items.forEach((item, i) => {
        if (i !== index) {
          Velocity(item, { opacity: 0 }, { duration: 300 });
        }
      });
      Velocity(lamp, { opacity: 0 }, { duration: 300 });
      Velocity(lightBg, { opacity: 0 }, { duration: 300 });
      Velocity(light, { opacity: 0 }, { duration: 300 });
      Velocity(text, { opacity: 0 }, { duration: 300 });
      this.store.nextStep();
      await Velocity(bg, { opacity: 0 }, { duration: 500, delay: 500 });
      Velocity(moment, { translateY: "-100%" }, { duration: 0 });
      // reset
      Velocity(bg, { scaleY: 1 }, { duration: 0 });
      Velocity(currentItem, { opacity: 0 }, { duration: 0 });
      Velocity(lamp, { opacity: 1 }, { duration: 0 });
      Velocity(text, { opacity: 1 }, { duration: 0 });
    }
  }
};
</script>
<style lang="scss" scoped>
.moment {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  .item {
    position: absolute;
    left: 0;
    width: 100%;
    // overflow: hidden;
    opacity: 0;
    .photo {
      width: 100%;
      height: 100%;
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .lamp {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) !important;
      width: 25px;
      height: 80px;
    }
    .light-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    .light {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) !important;
      width: 347px;
      height: 103px;
      opacity: 0;
    }
    .text {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) !important;
      width: 100px;
      height: 30px;
    }

    &.red {
      height: 20.85vh;
      top: 0;
      & .bg {
        background: url(../assets/moment/red-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .lamp {
        left: 0;
        background: url(../assets/moment/red-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../assets/moment/red-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        left: 10px;
        background: url(../assets/moment/red-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        right: 15%;
        background: url(../assets/moment/red-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.green {
      height: 22vh;
      top: 19vh;
      & .bg {
        background: url(../assets/moment/green-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .lamp {
        right: 0;
        background: url(../assets/moment/green-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../assets/moment/green-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        right: 10px;
        background: url(../assets/moment/green-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        left: 15%;
        background: url(../assets/moment/green-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.blue {
      height: 22vh;
      top: 39.25vh;
      & .bg {
        background: url(../assets/moment/blue-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .lamp {
        left: 0;
        background: url(../assets/moment/blue-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../assets/moment/blue-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        left: 10px;
        background: url(../assets/moment/blue-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        right: 15%;
        background: url(../assets/moment/blue-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.white {
      height: 22vh;
      top: 59.25vh;
      & .bg {
        background: url(../assets/moment/white-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .lamp {
        right: 0;
        background: url(../assets/moment/white-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../assets/moment/white-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        right: 10px;
        background: url(../assets/moment/white-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        left: 15%;
        background: url(../assets/moment/white-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.yellow {
      height: 20.85vh;
      bottom: 0;
      & .bg {
        background: url(../assets/moment/yellow-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .lamp {
        left: 0;
        background: url(../assets/moment/yellow-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../assets/moment/yellow-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        left: 10px;
        background: url(../assets/moment/yellow-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        right: 15%;
        background: url(../assets/moment/yellow-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
