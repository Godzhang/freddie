<template>
  <div class="cover">
    <canvas ref="canvas"></canvas>
    <div class="lamp"></div>
    <Slider @slide="onSliceMove"></Slider>
  </div>
</template>
<script>
import Slider from "./Slider";

const documentWidth = document.body.clientWidth;
const documentHeight = document.body.clientHeight;

export default {
  name: "Cover",
  data() {
    return {
      trailStyle: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initCanvas();
    },
    initCanvas() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      canvas.width = documentWidth;
      canvas.height = documentHeight;
      ctx.beginPath();
      ctx.fillStyle = "#1a1c1e";
      ctx.fillRect(0, 0, documentWidth, documentHeight);
    },
    onSliceMove(percentage) {
      console.log(percentage);
    }
  },
  components: { Slider }
};
</script>
<style lang="scss" scoped>
.cover {
  position: relative;
  width: 100%;
  height: 100%;
  .lamp {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 129px;
    height: 327px;
    background: url(../../assets/cover/lamp.png) 0 0 no-repeat;
    background-size: 100% 100%;
  }
}
</style>
