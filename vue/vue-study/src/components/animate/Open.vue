<template>
  <div class="open">
    <div class="handle">
      <div class="button-box">
        <template v-if="showWave">
          <div class="wave wave-1"></div>
          <div class="wave wave-2"></div>
          <div class="wave wave-3"></div>
        </template>
        <div class="button animate" v-if="showButton" @click="next"></div>
      </div>
      <div class="title animate" v-if="showTitle"></div>
      <span v-for="i in 4" :key="i" :class="`square square-${i}`"></span>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["store"],
  data() {
    return {
      showButton: false,
      showWave: false,
      showTitle: false
    };
  },
  mounted() {
    this.$watch("store.step", step => {
      if (step === 2) {
        this.animate();
      }
    });
  },
  methods: {
    animate() {
      this.showButton = true;
      this.showTitle = true;
      setTimeout(() => {
        this.showWave = true;
      }, 900);
    },
    next() {}
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/mixin.scss";

@keyframes wave {
  0% {
    transform: translate(-50%, -50%) scale(1);
    -webkit-transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, -50%) scale(2);
    -webkit-transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

@keyframes showButton {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes showTitle {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.open {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/open/background.jpg) 0 0 no-repeat;
  background-size: 100% 100%;
  .handle {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 125px;
    height: 190px;
    .button-box {
      position: relative;
      width: 125px;
      height: 125px;
      .button {
        width: 100%;
        height: 100%;
        background: url(../../assets/open/button.png) 0 0 no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        transform-origin: center center;
        &.animate {
          animation: showButton 0.5s ease-out forwards;
        }
      }
      .wave {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 90%;
        border: 2px solid #fff;
        border-radius: 50%;
        &.wave-1 {
          animation: wave 1.5s ease-out infinite;
        }
        &.wave-2 {
          animation: wave 1.5s 0.5s ease-out infinite;
        }
        &.wave-3 {
          animation: wave 1.5s 1s ease-out infinite;
        }
      }
    }
    .title {
      margin: 25px auto 0;
      width: 71px;
      height: 40px;
      background: url(../../assets/open/title.png) 0 0 no-repeat;
      background-size: 100% 100%;
      transform: scale(0.3) translateY(50px);
      opacity: 0;
      &.animate {
        animation: showTitle 0.3s 0.5s linear forwards;
      }
    }
    .square {
      position: absolute;
      &.square-1 {
        top: 0;
        left: 7.5px;
        @include squareStyle(14px, 14px, "square-1");
      }
      &.square-2 {
        bottom: 51px;
        right: -6.5px;
        @include squareStyle(20px, 20px, "square-2");
      }
      &.square-3 {
        bottom: 55px;
        left: -63.5px;
        @include squareStyle(28px, 28px, "square-3");
      }
      &.square-4 {
        top: -51.5px;
        right: -40.5px;
        @include squareStyle(35px, 35px, "square-4");
      }
    }
  }
}
</style>
