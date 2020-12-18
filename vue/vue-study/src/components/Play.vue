<template>
  <div class="play" ref="play">
    <div class="image-box" ref="imageBox">
      <img
        v-for="i in 3"
        :key="i"
        :style="{ 'z-index': 10 - i }"
        :src="red[i - 1]"
        class="img"
        ref="img"
        alt
      />
    </div>
    <div class="skip" ref="skip">
      <button class="btn" @click="flash(false)">跳过</button>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>
<script>
import Velocity from "velocity-animate";
import { redAtlas } from "@/common/global/atlas";
import { sleep } from "@/common/utils/utils";

export default {
  inject: ["store"],
  data() {
    return {
      red: redAtlas[0],
      type: "red"
    };
  },
  mounted() {
    this.$watch("store.step", async step => {
      if (step === 3) {
        await this.initSize();
        this.show();
        this.$audio.play("play-bg");
        this.play();
        this.store.nextStep();
      }
    });
    // this.$watch("store.detailType", async (type, prev) => {
    //   this.type = type;
    //   if (prev === "") {
    //     await this.initSize();
    //     this.show();
    //     this.play();
    //   }
    // });
  },
  computed: {
    atlas() {
      return this[this.type];
    }
  },
  methods: {
    show() {
      Velocity(this.$refs.play, { opacity: 1 }, { duration: 0 });
    },
    initSize() {
      const documentWidth = document.body.clientWidth;
      const documentHeight = document.body.clientHeight;
      const ratio = documentWidth / documentHeight;
      const imgs = this.$refs.img;
      const reqs = imgs.map((img, i) => {
        return new Promise(resolve => {
          img.onload = () => {
            const width = img.width;
            const height = img.height;
            if (ratio < width / height) {
              img.height = documentHeight;
            } else {
              img.width = documentWidth;
            }
            resolve();
          };
          img.onerror = resolve;
          img.src = this.red[i];
        });
      });
      return Promise.all(reqs);
    },
    async play() {
      const imgs = this.$refs.img;
      const imageBox = this.$refs.imageBox;
      const play = this.$refs.play;
      const skip = this.$refs.skip;
      const mask = this.$refs.mask;
      const wait = 3000;

      const walk = async (i = 0) => {
        if (i === imgs.length - 1) {
          return Promise.resolve();
        }
        const curr = imgs[i];
        const next = imgs[i + 1];
        Velocity(
          next,
          { translateX: "-50%", translateY: "-50%", opacity: 1 },
          { mobileHA: false, duration: 0 }
        );
        Velocity(
          curr,
          { opacity: 0 },
          { mobileHA: false, duration: 1000, easing: "ease-out" }
        );
        Velocity(
          next,
          {
            translateX: (i + 1) % 2 === 0 ? "-48%" : "-52%",
            translateY: "-50%"
          },
          { mobileHA: false, duration: wait + 500, easing: "linear" }
        );
        await sleep(wait);
        walk(i + 1);
      };

      imgs[0].classList.add("red-animate"); // 首张图片缩放动画
      await sleep(3000);
      Velocity(skip, { opacity: 1 }, { duration: 500 });
      await sleep(3000);
      await walk();
      await sleep(wait);

      imageBox.classList.add("animate");
      imgs[imgs.length - 1].classList.add("red-animate");
      await sleep(450);
      this.flash();
    },
    async flash(playAudio = true) {
      const play = this.$refs.play;
      const mask = this.$refs.mask;

      if (playAudio) {
        this.$audio.play("flash");
        await sleep(300); // 相机声音预留的时间
      }
      mask.classList.add("animate");
      await sleep(100);
      Velocity(play, { opacity: 0 }, { duration: 0 }).then(() => {
        Velocity(play, { translateY: "-100%" }, { duration: 0 });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/animate.scss";

.play {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 97;
  background-color: #cd3020;
  .image-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &.animate {
      animation: boxNarrow 1s ease-in-out forwards;
    }
    .img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      opacity: 0;
      &:first-child {
        opacity: 1;
        transform-origin: 50% 50%;
        &.red-animate {
          animation: redFirstClarity 6s ease-in-out forwards;
        }
      }
      &:last-child {
        &.red-animate {
          animation: redFirstNarrow 1s ease-in-out forwards;
        }
      }
    }
  }
  .skip {
    position: absolute;
    top: 3vw;
    right: 3vw;
    width: 15vw;
    height: 8vw;
    z-index: 10;
    opacity: 0;
    .btn {
      width: 100%;
      height: 100%;
      outline: none;
      border: 1px solid #ddd;
      border-radius: 1vw;
      background-color: rgba(255, 255, 255, 0.5);
      color: #fff;
      &:active {
        // background-color: mix(#000, #fff, 10%);
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .mask {
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
