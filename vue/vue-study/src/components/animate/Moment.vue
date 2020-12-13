<template>
  <div class="moment" ref="moment">
    <div
      ref="item"
      v-for="(color, index) in colors"
      :key="color"
      :class="`item ${color}`"
      @click="showDetail(index)"
    >
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
    this.init();
    this.animate();
  },
  methods: {
    init() {
      for (let i = 0; i < 5; i++) {
        let initPos = i % 2 === 0 ? "100%" : "-100%";
        Velocity(this.$refs.item[i], { translateX: initPos }, { duration: 0 });
      }
    },
    animate() {
      const total = 5;
      const duration = 300;
      for (let i = 0; i < total; i++) {
        const item = this.$refs.item[i];
        const lightBg = item.querySelector(".light-bg");
        const light = item.querySelector(".light");
        const text = item.querySelector(".text");
        const itemDelay = i * duration;
        const otherDelay = itemDelay + total * duration;

        Velocity(item, { translateX: 0 }, { duration, delay: itemDelay });
        Velocity(light, { opacity: 1 }, { duration: 0, delay: otherDelay });
        Velocity(lightBg, { opacity: 1 }, { duration: 0, delay: otherDelay });
        Velocity(text, { opacity: 1 }, { duration: 0, delay: otherDelay });
      }
    },
    async showDetail(index) {
      const item = this.$refs.item[index];
      const moment = this.$refs.moment;
      const lamp = item.querySelector(".lamp");
      const lightBg = item.querySelector(".light-bg");
      const light = item.querySelector(".light");
      const text = item.querySelector(".text");

      this.store.setType(colors[index]);

      item.style.zIndex = 999;
      Velocity(lamp, { opacity: 0 }, { duration: 500 });
      Velocity(lightBg, { opacity: 0 }, { duration: 500 });
      Velocity(light, { opacity: 0 }, { duration: 500 });
      Velocity(text, { opacity: 0 }, { duration: 500 });
      await Velocity(item, { scale: 10 }, { duration: 1000, delay: 500 });
      Velocity(moment, { opacity: 0 }, { duration: 500 }).then(() => {
        moment.remove();
      });
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
  .item {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    .photo {
      width: 100%;
      height: 100%;
    }
    & .lamp {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) !important;
      width: 25px;
      height: 80px;
    }
    & .light-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    & .light {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) !important;
      width: 347px;
      height: 103px;
      opacity: 0;
    }
    & .text {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) !important;
      width: 100px;
      height: 30px;
      opacity: 0;
    }

    &.red {
      height: 20.85vh;
      top: 0;
      background: url(../../assets/moment/red-bg.png) 0 0 no-repeat;
      background-size: 100% 100%;
      & .lamp {
        left: 0;
        background: url(../../assets/moment/red-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../../assets/moment/red-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        left: 10px;
        background: url(../../assets/moment/red-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        right: 15%;
        background: url(../../assets/moment/red-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.green {
      height: 22vh;
      top: 19.22vh;
      background: url(../../assets/moment/green-bg.png) 0 0 no-repeat;
      background-size: 100% 100%;
      & .lamp {
        right: 0;
        background: url(../../assets/moment/green-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../../assets/moment/green-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        right: 10px;
        background: url(../../assets/moment/green-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        left: 15%;
        background: url(../../assets/moment/green-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.blue {
      height: 22vh;
      top: 39.45vh;
      background: url(../../assets/moment/blue-bg.png) 0 0 no-repeat;
      background-size: 100% 100%;
      & .lamp {
        left: 0;
        background: url(../../assets/moment/blue-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../../assets/moment/blue-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        left: 10px;
        background: url(../../assets/moment/blue-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        right: 15%;
        background: url(../../assets/moment/blue-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.white {
      height: 22vh;
      top: 59.25vh;
      background: url(../../assets/moment/white-bg.png) 0 0 no-repeat;
      background-size: 100% 100%;
      & .lamp {
        right: 0;
        background: url(../../assets/moment/white-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../../assets/moment/white-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        right: 10px;
        background: url(../../assets/moment/white-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        left: 15%;
        background: url(../../assets/moment/white-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
    &.yellow {
      height: 20.85vh;
      bottom: 0;
      background: url(../../assets/moment/yellow-bg.png) 0 0 no-repeat;
      background-size: 100% 100%;
      & .lamp {
        left: 0;
        background: url(../../assets/moment/yellow-lamp.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light-bg {
        background: url(../../assets/moment/yellow-light-bg.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .light {
        left: 10px;
        background: url(../../assets/moment/yellow-light.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
      & .text {
        right: 15%;
        background: url(../../assets/moment/yellow-text.png) 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
