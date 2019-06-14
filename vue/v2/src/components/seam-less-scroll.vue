<template>
  <div ref="wrap">
    <div ref="scrollbox" :style="wrapStyle" class="scroll-box">
      <div class="origin" ref="origindata">
        <slot></slot>
      </div>
      <div class="copy" ref="copydata" v-html="copyhtml"></div>
    </div>
  </div>
</template>
<script>
// 问题1: 到判断边界切换位置时，有卡顿感
export default {
  props: {
    // 0 默认向上, 1 向下, 2 向左, 3 向右
    dir: { type: Number, default: 0 },
    step: { type: Number, default: 1 },
    threshold: { type: Number, default: 0 }
  },
  data() {
    return {
      wrapWidth: 0,
      wrapHeight: 0,
      wrapBox: null,
      scrollBox: null,
      origindata: null,
      copydata: null,
      copyhtml: "",
      step: 0.5,
      requestId: null,
      hoverStop: true
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   setTimeout(() => {
    //     this.init();
    //   });
    // });
  },
  computed: {
    wrapStyle() {
      if (this.dir === 2 || this.dir === 3) {
        return {
          display: "flex"
        };
      }
      return {};
    }
  },
  methods: {
    init() {
      this.wrapBox = this.$refs.wrap;
      this.scrollBox = this.$refs.scrollbox;
      this.origindata = this.$refs.origindata;
      this.copydata = this.$refs.copydata;
      // 获取外层容器高度
      this.wrapHeight = this.wrapBox.offsetHeight;
      this.wrapWidth = this.wrapBox.offsetWidth;
      // 滚动容器设置transform属性
      this.scrollBox.style.transform = "translate(0, 0)";

      if (!this.isCanScroll()) return false;
      this.copyData();
    },
    isCanScroll() {
      if (this.dir === 0 || this.dir === 1) {
        return this.origindata.offsetHeight >= this.wrapBox.offsetHeight;
      } else {
        return this.origindata.offsetWidth >= this.wrapBox.offsetWidth;
      }
    },
    copyData() {
      setTimeout(() => {
        this.copyhtml = this.origindata.innerHTML;

        if (this.dir === 1 || this.dir === 3) {
          this.scrollBox.insertBefore(
            this.scrollBox.removeChild(this.copydata),
            this.origindata
          );
          if (this.dir === 1) {
            this.scrollBox.style.transform = `translate(0, ${-this.origindata
              .offsetHeight}px)`;
          } else if (this.dir === 3) {
            this.scrollBox.style.transform = `translate(${-this.origindata
              .offsetWidth}px, 0)`;
          }
        }
        this.initScroll();
        this.hoverStop && this.initEvent();
      }, 0);
    },
    initScroll() {
      const currentPos = this.getTranslatePosition(this.scrollBox);
      const dir = this.dir;

      const limitCondition =
        dir === 1 || dir === 3
          ? currentPos > 0
          : dir === 0
          ? currentPos <= -this.origindata.offsetHeight - this.threshold
          : currentPos <= -this.origindata.offsetWidth;
      console.log(this.wrapHeight);
      console.log(this.origindata.offsetHeight);
      if (
        dir === 0 &&
        currentPos <= this.wrapHeight - this.origindata.offsetHeight
      ) {
        this.$emit("scroll-to-end");
      }

      if (limitCondition) {
        if (dir === 0 || dir === 2) {
          this.scrollBox.style.transform = `translate(0,0)`;
        } else if (dir === 1) {
          this.scrollBox.style.transform = `translate(0,${-this.origindata
            .offsetHeight}px)`;
        } else if (dir === 3) {
          this.scrollBox.style.transform = `translate(${-this.origindata
            .offsetWidth}px, 0)`;
        }
        // 每滚动完一屏就触发一次
        this.$emit("every-scroll-frame");
      } else {
        if (dir === 0) {
          this.scrollBox.style.transform = `translate(0, ${currentPos -
            this.step}px)`;
        } else if (dir === 1) {
          this.scrollBox.style.transform = `translate(0, ${currentPos +
            this.step}px)`;
        } else if (dir === 2) {
          this.scrollBox.style.transform = `translate(${currentPos -
            this.step}px, 0)`;
        } else if (dir === 3) {
          this.scrollBox.style.transform = `translate(${currentPos +
            this.step}px, 0)`;
        }
      }

      this.requestId = window.requestAnimationFrame(this.initScroll.bind(this));
    },
    initEvent() {
      this.wrapBox.addEventListener("mouseover", e => {
        window.cancelAnimationFrame(this.requestId);
      });
      this.wrapBox.addEventListener("mouseout", e => {
        this.requestId = window.requestAnimationFrame(
          this.initScroll.bind(this)
        );
      });
    },
    getTranslatePosition(el) {
      const styles = window.getComputedStyle(el);
      const matrix = styles.getPropertyValue("transform");
      const pos = matrix.slice(7, -1).split(", ");
      return this.dir === 0 || this.dir === 1 ? Number(pos[5]) : Number(pos[4]);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
