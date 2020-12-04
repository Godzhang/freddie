<template>
  <div class="scroll-demo">
    <div class="left-menu">
      <ul>
        <li
          v-for="(item, index) in menuList"
          :key="index"
          :class="{active: currentIndex === index}"
          @click="changeIndex(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="container">
      <div class="content" id="scroll">
        <div class="list" ref="list">
          <div ref="item" class="item" v-for="(item, index) in currentContent" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

const menuList = new Array(10).fill(0).map((item, i) => `title-${i + 1}`);
const contentList = new Array(10).fill(0).map((item, index) => {
  const res = [];
  const len = ~~(Math.random() * 10 + 20);
  for (let i = 0; i < len; i++) {
    res.push(`content-${index + 1}`);
  }
  return res;
});

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  data() {
    return {
      menuList,
      contentList,
      currentIndex: 0,
      scroll: null
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    currentContent() {
      return this.contentList[this.currentIndex];
    }
  },
  watch: {
    currentIndex() {
      this.$nextTick(() => {
        this.resetScroll();
        this.startScroll();
      });
    }
  },
  methods: {
    init() {
      this.setListWidth();
      this.initScroll();
    },
    initScroll() {
      this.scroll = new BScroll("#scroll", {
        scrollX: true
      });
      this.startScroll();
    },
    async startScroll() {
      await sleep(1000);
      this.scroll.scrollTo(this.scroll.maxScrollX, 0, 5000, "linear");
      this.scroll.once("scrollEnd", this.checkNext);
    },
    async checkNext() {
      await sleep(1000);
      if (this.currentIndex === menuList.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    resetScroll() {
      this.setListWidth();
      this.scroll.refresh();
      this.scroll.scrollTo(0, 0, 0);
    },
    setListWidth() {
      const len = this.currentContent.length;
      const item = this.$refs.item[0];
      const computedStyle = window.getComputedStyle(item);
      const width = +computedStyle.width.slice(0, -2);
      const marginRight = parseInt(computedStyle.marginRight);
      const listWidth = len * (width + marginRight);
      this.$refs.list.style.width = listWidth + "px";
    },
    changeIndex(index) {
      if (this.currentIndex === index) return;
      this.scroll.off("scrollEnd", this.checkNext);
      this.scroll.stop();
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.scroll-demo {
  display: flex;
  width: 100%;
  height: 100%;
  .left-menu {
    width: 150px;
    height: 100%;
    border-right: 1px solid #ddd;
    li {
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      text-align: center;
      cursor: pointer;
      &.active {
        color: #08c;
      }
    }
  }
  .container {
    width: calc(100% - 150px);
    height: 100%;
    .content {
      overflow-x: hidden;
      .list {
        display: flex;
        flex-wrap: nowrap;
        .item {
          padding: 10px;
          white-space: nowrap;
          margin-right: 20px;
          border: 1px solid #ddd;
        }
      }
    }
  }
}
</style>
