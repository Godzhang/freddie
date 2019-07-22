<template>
  <div class="rotary-page">
    <div class="iframe-page">
      <template v-for="(page, pageIndex) in pageData">
        <div class="iframe-item" :key="page.url" v-show="currentIndex === pageIndex">
          <iframe
            ref="page"
            src
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </template>
    </div>
    <div class="right-tab">
      <div class="all-stop">
        <img src alt />
      </div>
      <ul>
        <li v-for="(page, pageIndex) in pageData" :key="page.url">
          <img
            v-show="currentIndex !== pageIndex"
            :src="page.icon"
            @click="onChangeIframe(pageIndex)"
            alt
          />
          <span v-show="currentIndex === pageIndex">{{ page.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import pageData from "./pageData";

export default {
  data() {
    return {
      pageData,
      currentIndex: 0,
      intervalId: null,
      isAlternate: true,
      intervalTime: 4000
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.showIframe(this.currentIndex);
      // this.startRatory();
    },
    showIframe(index) {
      let cur = this.$refs.page[index];
      let src = cur.getAttribute("src");
      if (!src) {
        cur.setAttribute("src", this.pageData[index].url);
      }
    },
    // 点击切换 iframe
    onChangeIframe(index) {
      this.showIframe(index);
      this.currentIndex = index;
      if (this.isAlternate) {
        this.resetRatory();
      }
    },
    // 切换轮播状态
    onChangeRatoryStatus() {
      this.isAlternate = !this.isAlternate;
      if (!this.isAlternate) {
        clearInterval(this.intervalId);
      } else {
        this.showNextIframe();
        this.startRatory();
      }
    },
    // 开始轮播
    startRatory() {
      this.intervalId = setInterval(
        this.showNextIframe.bind(this),
        this.intervalTime
      );
    },
    // 切换到下一个 iframe
    showNextIframe() {
      this.currentIndex =
        this.currentIndex === this.pageData.length - 1
          ? 0
          : this.currentIndex + 1;
      this.showIframe(this.currentIndex);
    },
    // 点击切换后，重新开始计时
    resetRatory() {
      clearInterval(this.intervalId);
      this.startRatory();
    }
  }
};
</script>
<style lang="scss" scoped>
.rotary-page {
  position: relative;
  width: 100%;
  height: 100%;
}
.iframe-page {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.iframe-item {
  width: 100%;
  height: 100%;
}
.right-tab {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  // height: 350px;
  color: #fff;
  .all-stop {
    width: 40px;
    height: 52px;
    margin-bottom: 50px;
    cursor: pointer;
  }
  ul {
    li {
      width: 40px;
      height: 50px;
      position: relative;
      cursor: pointer;
      img {
        width: 40px;
        height: 50px;
      }
      span {
        width: 120px;
        height: 50px;
        display: inline-block !important;
        position: absolute;
        right: 0px;
        top: -3px;
        text-align: center;
        line-height: 57px;
        color: #38e2fb;
      }
    }
  }
}
</style>
