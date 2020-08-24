<template>
  <div class="notification-wrapper" ref="wrapper">
    <div class="icon">
      <svg
        t="1597984668362"
        class="icon"
        viewBox="0 0 1184 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2142"
        width="200"
        height="200"
      >
        <path
          d="M670.432 1024a92.96 92.96 0 0 1-50.24-14.976l-264.672-167.904c-1.184-0.832-2.528-1.696-3.584-2.56a68.608 68.608 0 0 0-33.152-8.736H134.72C60.48 829.824 0 758.4 0 670.752v-317.376c0-87.776 60.48-159.04 134.72-159.04h184.064a69.792 69.792 0 0 0 37.536-11.424L620.992 14.976a92.064 92.064 0 0 1 98.528-1.28A124.8 124.8 0 0 1 775.744 121.6l-0.384 184.32-0.416 596.48a125.248 125.248 0 0 1-56.224 107.968 93.088 93.088 0 0 1-48.288 13.632z m357.376-180.48a45.056 45.056 0 0 1-33.024-14.56 51.936 51.936 0 0 1 0-70.144 365.312 365.312 0 0 0 0-493.664 51.936 51.936 0 0 1 0-70.144 44.8 44.8 0 0 1 65.92 0 469.024 469.024 0 0 1 0 633.952 44.576 44.576 0 0 1-32.896 14.56z m0 0l-157.12-114.592a45.056 45.056 0 0 1-33.024-14.528 51.936 51.936 0 0 1 0-70.144 195.936 195.936 0 0 0 0-264.608 51.936 51.936 0 0 1 0-70.144 44.8 44.8 0 0 1 65.92 0 299.84 299.84 0 0 1 0 404.896 44.576 44.576 0 0 1-32.896 14.528z m0 0"
          p-id="2143"
          fill="#bfbfbf"
        />
      </svg>
    </div>
    <el-carousel
      ref="carousel"
      class="carousel"
      direction="vertical"
      indicator-position="none"
      :autoplay="false"
      @change="onChange"
    >
      <el-carousel-item v-for="item in notifications" :key="item.text">
        <h3 class="medium">
          <p ref="text">{{ item.text }}</p>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
const sleep = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export default {
  props: {
    notifications: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  mounted() {
    if (this.notifications.length > 0) {
      this.$nextTick(() => {
        this.rolling();
      });
    }
  },
  computed: {
    interval() {
      return this.notifications[this.activeIndex].interval || 5000;
    },
    textWrapperWidth() {
      return this.$refs.wrapper.offsetWidth - 30 - 10;
    }
  },
  methods: {
    async rolling() {
      const text = this.$refs.text[this.activeIndex];
      // 如果文字超过容器宽度，先滚动，再等待
      if (text.offsetWidth > this.textWrapperWidth) {
        const distance = this.textWrapperWidth - text.offsetWidth;
        await sleep(1000);
        await this.move(text, 0, distance);
      }
      await sleep(this.interval);
      this.$refs.carousel.next();
    },
    move(node, startX, endX) {
      return new Promise(resolve => {
        const distance = 0.5;
        let pos = startX;
        let interval = setInterval(() => {
          pos -= distance;
          if (pos >= endX) {
            node.style.transform = `translateX(${pos}px)`;
          } else {
            node.style.transform = `translateX(${endX}px)`;
            clearInterval(interval);
            // 恢复原位
            setTimeout(() => {
              node.style.transform = `translateX(0px)`;
            }, this.interval + 500);
            resolve();
          }
        }, 16);
      });
    },
    onChange(index) {
      this.activeIndex = index;
      this.rolling();
    }
  }
};
</script>
<style lang="scss" scoped>
$wrapper-height: 30px;
$icon-margin-right: 10px;

.notification-wrapper {
  display: flex;
  width: 100%;
  height: $wrapper-height;
  overflow: hidden;
  .icon {
    width: $wrapper-height;
    height: $wrapper-height;
    margin-right: $icon-margin-right;
  }
  .carousel {
    flex: 1;
    height: $wrapper-height;
    line-height: $wrapper-height;
  }
  .medium {
    width: calc(100% - $wrapper-height - $icon-margin-right);
    height: $wrapper-height;
    white-space: nowrap;
    p {
      display: inline-block;
    }
  }
}
</style>