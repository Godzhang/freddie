<template>
  <div ref="wrap">
    <div ref="scrollbox" class="scroll-box">
      <div ref="origindata">
        <slot></slot>
      </div>
      <div ref="copydata" v-html="copyhtml"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wrapHeight: 0,
      wrapBox: null,
      scrollBox: null,
      origindata: null,
      copydata: null,
      copyhtml: "",
      threshold: 30,
      step: 3,
      dir: 0, // 0 默认向上, 1 向右, 2 向下, 3 向左
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
  methods: {
    init() {
      this.wrapBox = this.$refs.wrap;
      this.scrollBox = this.$refs.scrollbox;
      this.origindata = this.$refs.origindata;
      this.copydata = this.$refs.copydata;
      // 获取外层容器高度
      this.wrapHeight = this.wrapBox.offsetHeight;
      // 滚动容器设置transform属性
      this.scrollBox.style.transform = "translate(0, 0)";

      this.initScroll();
      this.hoverStop && this.initEvent();
    },
    // 向上滚动
    initScroll() {
      let currentPos = this.getTranslatePosition(this.scrollBox);
      let limitPos = 0;

      if (currentPos >= limitPos) {
        if (!this.copyhtml) {
          this.copyhtml = this.origindata.innerHTML;
        }
        this.scrollBox.insertBefore(
          this.scrollBox.removeChild(this.scrollBox.childNodes[1]),
          this.scrollBox.childNodes[0]
        );
        this.scrollBox.style.transform = `translate(0, ${-this.origindata
          .offsetHeight}px)`;
        // 每滚动完一次就触发一次
        this.$emit("every-scroll-end");
      } else {
        this.scrollBox.style.transform = `translate(0, ${currentPos +
          this.step}px)`;
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
    // initScroll() { // 向下滚动
    //   let currentPos = this.getTranslatePosition(this.scrollBox);
    //   let limitPos = this.wrapHeight - this.scrollBox.offsetHeight;

    //   if (currentPos <= limitPos) {
    //     if (!this.copyhtml) {
    //       this.copyhtml = this.origindata.innerHTML;
    //     } else {
    //       this.scrollBox.appendChild(
    //         this.scrollBox.removeChild(this.scrollBox.childNodes[0])
    //       );
    //       this.scrollBox.style.transform = `translate(0, ${this.wrapHeight -
    //         this.origindata.offsetHeight}px)`;
    //     }
    //     // 每滚动完一次就触发一次
    //     this.$emit("every-scroll-end");
    //   } else {
    //     this.scrollBox.style.transform = `translate(0, ${currentPos -
    //       this.step}px)`;
    //   }

    //   this.requestId = window.requestAnimationFrame(this.initScroll.bind(this));
    // },
    // initEvent() {
    //   this.wrapBox.addEventListener("mouseover", e => {
    //     window.cancelAnimationFrame(this.requestId);
    //   });
    //   this.wrapBox.addEventListener("mouseout", e => {
    //     this.requestId = window.requestAnimationFrame(
    //       this.initScroll.bind(this)
    //     );
    //   });
    // },
    getTranslatePosition(el, dir = 0) {
      let styles = window.getComputedStyle(el);
      let matrix = styles.getPropertyValue("transform");
      let pos = matrix.slice(7, -1).split(", ");
      return dir === 0 || dir === 2 ? Number(pos[5]) : Number(pos[4]);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
