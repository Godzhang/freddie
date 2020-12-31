<template>
  <div class="test">
    <img :src="src" alt />
  </div>
  <!-- <div class="test" ref="test">
    <img src="../assets/atlas/red/1/4-1.jpg" alt />
  </div>-->
</template>
<script>
import { atlas, redAtlasCover } from "@/common/global/atlas";
import getCompositionUrl from "@/common/utils/composition";

const vw = document.body.clientWidth / 100;
const imageWidth = 63.2 * vw * 2; // 261.648
const imageHeight = 94.4 * vw * 2; // 390.816

export default {
  data() {
    return {
      src: "",
      iframe: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      // const pics = atlas.red.reduce((res, curr) => [...res, ...curr], []);
      let color = "yellow";
      const pics = atlas[color][0];
      const result = await getCompositionUrl(pics, color);
      this.src = result[2];
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes narrow {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(13.47vw, 20vw, 0);
    width: 63.2vw;
    height: 94.4vw;
  }
}

@keyframes move {
  0% {
    transform: translate3d(-50%, -50%, 0);
  }
  100% {
    transform: translate3d(-48%, -50%, 0);
  }
}
@keyframes move-delay {
  0% {
    height: 100%;
  }
  100% {
    height: 94.4vw;
  }
}

.test {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // animation: narrow 1s 2s ease-in-out forwards;
  // img {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   height: 100%;
  //   transform: translate3d(-50%, -50%, 0);
  //   animation: move 2s linear forwards, move-delay 1s 2s ease-in-out forwards;
  // }
  img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 63.2vw;
    height: 94.4vw;
    box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.5);
  }
  .audio {
    // position: absolute;
    // top: 0;
    // left: -9999px;
    // visibility: hidden;
  }
}
</style>
