<template>
  <div class="test">
    <img :src="src" alt />
    <!-- <canvas ref="canvas" style="box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.5);"></canvas> -->
  </div>
</template>
<script>
import { redAtlasCover } from "@/common/global/atlas";

const vw = document.body.clientWidth / 100;
const imageWidth = 63.2 * vw * 2; // 261.648
const imageHeight = 94.4 * vw * 2; // 390.816

export default {
  data() {
    return {
      src: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = imageWidth;
      canvas.height = imageHeight;

      const loadImage = this.loadImage(redAtlasCover[0]);
      const loadBox = this.loadBox();

      Promise.all([loadImage, loadBox]).then(
        ([{ img, width, height }, box]) => {
          if (imageWidth === width) {
            context.drawImage(
              img,
              0,
              (imageHeight - height) / 2,
              width,
              height
            );
          } else if (imageHeight === height) {
            context.drawImage(img, (imageWidth - width) / 2, 0, width, height);
          }
          context.drawImage(box, 0, 0, imageWidth, imageHeight);

          this.src = canvas.toDataURL();
        }
      );
    },
    loadImage(src) {
      const boxRatio = imageWidth / imageHeight;
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          const width = img.width;
          const height = img.height;
          const ratio = width / height;
          if (boxRatio < ratio) {
            resolve({
              img,
              width: (imageHeight * width) / height,
              height: imageHeight
            });
          } else {
            resolve({
              img,
              width: imageWidth,
              height: (imageWidth * height) / width
            });
          }
        };
        img.onerror = resolve;
        img.src = src;
      });
    },
    loadBox() {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.src = require("../assets/shuffle/red-box.png");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.test {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 63.2vw;
    height: 94.4vw;
    box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
