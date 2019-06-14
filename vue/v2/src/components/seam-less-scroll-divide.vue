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
    dir: { type: Number, default: 0 }
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
      step: 3,
      scrollMethods: {
        0: "initScrollToTop",
        1: "initScrollToBottom",
        2: "initScrollToLeft",
        3: "initScrollToRight"
      },
      method: "initScrollToTop",
      requestId: null,
      hoverStop: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.init();
      });
    });
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
        this.method = this.scrollMethods[this.dir];
        this[this.method]();
        this.hoverStop && this.initEvent();
      }, 0);
    },
    // 向右滚动
    initScrollToRight() {
      let currentPos = this.getTranslatePosition(this.scrollBox);
      if (currentPos >= 0) {
        this.scrollBox.style.transform = `translate(${-this.origindata
          .offsetWidth}px, 0)`;
        // 每滚动完一次就触发一次
        this.$emit("every-scroll-end");
      } else {
        this.scrollBox.style.transform = `translate(${currentPos +
          this.step}px, 0)`;
      }

      this.requestId = window.requestAnimationFrame(
        this.initScrollToRight.bind(this)
      );
    },
    // 向左滚动
    initScrollToLeft() {
      let currentPos = this.getTranslatePosition(this.scrollBox);
      if (currentPos <= -this.origindata.offsetWidth) {
        this.scrollBox.style.transform = `translate(0,0)`;
        // 每滚动完一次就触发一次
        this.$emit("every-scroll-end");
      } else {
        this.scrollBox.style.transform = `translate(${currentPos -
          this.step}px, 0)`;
      }

      this.requestId = window.requestAnimationFrame(
        this.initScrollToLeft.bind(this)
      );
    },
    // 向下滚动
    initScrollToBottom() {
      let currentPos = this.getTranslatePosition(this.scrollBox);
      if (currentPos >= 0) {
        this.scrollBox.style.transform = `translate(0,${-this.origindata
          .offsetHeight}px)`;
        // 每滚动完一次就触发一次
        this.$emit("every-scroll-end");
      } else {
        this.scrollBox.style.transform = `translate(0, ${currentPos +
          this.step}px)`;
      }

      this.requestId = window.requestAnimationFrame(
        this.initScrollToBottom.bind(this)
      );
    },
    // 向上滚动
    initScrollToTop() {
      let currentPos = this.getTranslatePosition(this.scrollBox);
      if (currentPos <= -this.origindata.offsetHeight) {
        this.scrollBox.style.transform = `translate(0,0)`;
        // 每滚动完一次就触发一次
        this.$emit("every-scroll-end");
      } else {
        this.scrollBox.style.transform = `translate(0, ${currentPos -
          this.step}px)`;
      }

      this.requestId = window.requestAnimationFrame(
        this.initScrollToTop.bind(this)
      );
    },
    initEvent() {
      this.wrapBox.addEventListener("mouseover", e => {
        window.cancelAnimationFrame(this.requestId);
      });
      this.wrapBox.addEventListener("mouseout", e => {
        this.requestId = window.requestAnimationFrame(
          this[this.method].bind(this)
        );
      });
    },
    getTranslatePosition(el) {
      let styles = window.getComputedStyle(el);
      let matrix = styles.getPropertyValue("transform");
      let pos = matrix.slice(7, -1).split(", ");
      return this.dir === 0 || this.dir === 1 ? Number(pos[5]) : Number(pos[4]);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
