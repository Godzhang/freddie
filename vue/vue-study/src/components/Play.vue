<template>
  <div class="play" ref="play">
    <div class="image-box" ref="imageBox">
      <img
        v-for="(img, i) in images"
        :key="i"
        :style="{ 'z-index': 10 - i }"
        :src="img"
        class="img"
        ref="img"
        alt
      />
    </div>
    <div class="skip" ref="skip" @click="flash(false)"></div>
    <div class="mask" ref="mask"></div>
  </div>
</template>
<script>
import Velocity from "velocity-animate";
import { atlas } from "@/common/global/atlas";
import { sleep } from "@/common/utils/utils";
import { coverBgColors, shuffleBgColors } from "@/common/global/colors";

export default {
  inject: ["store"],
  data() {
    return {
      images: [],
      isCurrentPage: false
    };
  },
  mounted() {
    this.init();
    this.$watch("store.step", async (step, prevStep) => {
      if (prevStep === 1) {
        this.images = atlas[this.store.colorType].reduce(
          (res, curr) => [...res, ...curr],
          []
        ); // 展示所有图集
        // this.images = atlas[this.store.colorType][0];
      } else {
        this.images = atlas[this.store.colorType][this.store.groupIndex];
      }
      this.$nextTick(async () => {
        if (step === 2) {
          this.isCurrentPage = true;
          await this.initSize();
          this.show();
          await this.play();
          this.store.nextStep();
        }
      });
    });
    // this.$watch("store.colorType", async (type, prev) => {
    //   this.$refs.play.style.backgroundColor = shuffleBgColors[type];
    // });
  },
  computed: {
    firstImageAnimateClass() {
      if (this.store.groupIndex === 0) {
        return `${this.store.colorType}-${this.store.groupIndex}-animate`;
      } else {
        return "public-animate";
      }
    }
  },
  methods: {
    init() {
      this.images = atlas[this.store.colorType][this.store.groupIndex];
    },
    show() {
      Velocity(
        this.$refs.play,
        { opacity: 1, translateY: "0" },
        { duration: 0 }
      );
    },
    initSize() {
      const documentWidth = document.body.clientWidth;
      const imgs = this.$refs.img;
      const reqs = imgs.map((img, i) => {
        return new Promise(resolve => {
          img.onload = () => {
            const newWidth = documentWidth * 1.2;
            const newHeight = (newWidth * img.height) / img.width;
            img.style.width = newWidth + "px";
            img.style.height = newHeight + "px";
            resolve();
          };
          img.onerror = resolve;
          img.src = this.images[i];
        });
      });
      return Promise.all(reqs);
    },
    // initSize() {
    //   const documentWidth = document.body.clientWidth;
    //   const documentHeight = document.body.clientHeight;
    //   const ratio = documentWidth / documentHeight;
    //   const imgs = this.$refs.img;
    //   const reqs = imgs.map((img, i) => {
    //     return new Promise(resolve => {
    //       img.onload = () => {
    //         const width = img.width;
    //         const height = img.height;
    //         if (ratio < width / height) {
    //           // img.height = documentHeight;
    //           img.style.height = "100%";
    //         } else {
    //           // img.width = documentWidth;
    //           img.style.width = "100%";
    //         }
    //         resolve();
    //       };
    //       img.onerror = resolve;
    //       img.src = this.images[i];
    //     });
    //   });
    //   return Promise.all(reqs);
    // },
    async play() {
      const imgs = this.$refs.img;
      const imageBox = this.$refs.imageBox;
      const play = this.$refs.play;
      const skip = this.$refs.skip;
      const mask = this.$refs.mask;
      const wait = 3000;
      const walk = async (i = 0) => {
        if (!this.isCurrentPage) return Promise.reject(new Error("stop"));
        const curr = imgs[i];
        const next = imgs[i + 1];
        Velocity(
          next,
          {
            translateX: ["-50%", (i + 1) % 2 === 0 ? "-52%" : "-48%"],
            translateY: ["-50%", "-50%"],
            opacity: [1, 1]
          },
          { mobileHA: false, duration: wait, easing: "linear" }
        );
        Velocity(
          curr,
          { opacity: 0 },
          { mobileHA: false, duration: 1000, easing: "ease-out" }
        );
        await sleep(wait);
        if (i === imgs.length - 2) {
          return Promise.resolve();
        } else {
          await walk(i + 1);
        }
      };

      imgs[0].classList.add(this.firstImageAnimateClass); // 首张图片缩放动画
      await sleep(3000);
      Velocity(skip, { opacity: 1 }, { duration: 500 });
      await sleep(3000);
      await walk();

      imageBox.classList.add("animate");
      await sleep(550);
      this.flash();
    },
    async flash(playAudio = true) {
      const play = this.$refs.play;
      const mask = this.$refs.mask;

      if (playAudio) {
        this.$audio.play("flash");
        await sleep(300); // 相机声音预留的时间
      } else {
        this.store.nextStep();
      }
      mask.classList.add("animate");
      await sleep(350);
      play.style.opacity = 0;
      play.style.transform = `translateY(-100%)`;
      this.isCurrentPage = false;
      this.resetStyles();
    },
    resetStyles() {
      const mask = this.$refs.mask;
      const imgs = this.$refs.img;
      const imageBox = this.$refs.imageBox;
      imageBox.classList.remove("animate");
      imgs[0].classList.remove(this.firstImageAnimateClass);
      imgs.forEach((img, i) => {
        img.style.transform = "";
        img.style.opacity = i > 0 ? 0 : 1;
      });
      mask.classList.remove("animate");
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
  background-color: #000;
  .image-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: 27vw 13.47vw;
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
        // &.yellow-0-animate {
        //   transform: translate(-50%, -50%) scale(1);
        // }
        // @each $color in red, green, blue, white, yellow {
        //   @for $i from 0 to 4 {
        //     &.#{$color}-#{$i}-animate {
        //       animation: #{$color}#{$i}Clarity 6s ease-in-out forwards;
        //     }
        //   }
        // }
        &.red-0-animate {
          animation: Red0Clarity 6s ease-in-out forwards;
        }
        &.green-0-animate {
          animation: Green0Clarity 6s ease-in-out forwards;
        }
        &.blue-0-animate {
          animation: Blue0Clarity 6s ease-in-out forwards;
        }
        &.white-0-animate {
          animation: White0Clarity 6s ease-in-out forwards;
        }
        &.yellow-0-animate {
          animation: Yellow0Clarity 6s ease-in-out forwards;
        }
        &.public-animate {
          animation: publicClarity 6s ease-in-out forwards;
        }
      }
      &:last-child {
        &.red-animate {
          animation: RedFirstNarrow 1s ease-in-out forwards;
        }
      }
    }
  }
  .skip {
    position: absolute;
    top: 12vw;
    right: 0;
    width: 20vw;
    height: 10vw;
    z-index: 10;
    opacity: 0;
    background: url(../assets/skip.png) 0 0 no-repeat;
    background-size: 100% 100%;
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
      animation: flash 1s ease forwards;
    }
  }
}
</style>
