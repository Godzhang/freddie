<template>
  <div class="play" ref="play">
    <img
      v-for="i in 3"
      :key="i"
      :style="{ 'z-index': 100 - i }"
      :src="atlas[0][i - 1]"
      class="img"
      ref="img"
      alt=""
    />
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
      red: redAtlas,
      type: "red"
    };
  },
  async mounted() {
    await this.initSize();
    this.play();
    this.$watch("store.detailType", type => {
      this.type = type;
    });
  },
  computed: {
    atlas() {
      return this[this.type];
    }
  },
  methods: {
    initSize() {
      const documentWidth = document.body.clientWidth;
      const documentHeight = document.body.clientHeight;
      const ratio = documentWidth / documentHeight;
      const imgs = this.$refs.img;
      const reqs = imgs.map(img => {
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
        });
      });
      return Promise.all(reqs);
    },
    async play() {
      const imgs = this.$refs.img;
      const play = this.$refs.play;
      const wait = 3000;
      const walk = async (i = 0) => {
        if (i === imgs.length - 1) {
          return Promise.resolve();
        }
        Velocity(
          imgs[i],
          { opacity: 0 },
          { mobileHA: false, duration: 1000, easing: "ease-out" }
        );
        await Velocity(
          imgs[i + 1],
          { opacity: 1 },
          { mobileHA: false, duration: 1000, easing: "ease-in" }
        );
        await sleep(wait);
        walk(i + 1);
      };
      imgs[0].classList.add("animate");
      await sleep(7000);
      await walk();
      await sleep(3000);
      imgs[imgs.length - 1].classList.add("animate");
      await sleep(1500);
      Velocity(play, { opacity: 0 }, { duration: 10 }).then(() => {
        play.remove();
      });
      // Velocity(this.$refs.play, { opacity: 1 }, { duration: 10 });
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes clarity {
  0% {
    transform: translate(-50%, -50%) scale(5);
    transform-origin: 29% 70%;
    filter: blur(0);
  }
  24% {
    transform: translate(-50%, -50%) scale(5);
    transform-origin: 29% 70%;
    filter: blur(0);
  }
  25% {
    transform: translate(-50%, -50%) scale(5);
    transform-origin: 29% 70%;
    filter: blur(5px);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    transform-origin: 50% 50%;
    filter: blur(0);
  }
}
@keyframes narrow {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(0.7);
  }
}
.play {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    &:first-child {
      opacity: 1;
      transform-origin: 29% 70%;
      &.animate {
        animation: clarity 5s linear forwards;
      }
    }
    &:last-child {
      &.animate {
        animation: narrow 1s ease forwards;
      }
    }
  }
}
</style>
