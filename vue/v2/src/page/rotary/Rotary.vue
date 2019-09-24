<template>
  <div class="rotary-page">
    <div class="iframe-page">
      <template v-for="(page, pageIndex) in pageData">
        <div class="iframe-item" :key="page.url" v-show="currentIndex === pageIndex">
          <!--这里需要懒加载-->
          <iframe
            ref="page"
            :id="`iframe-${pageIndex}`"
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
      <ul>
        <li
          v-for="(page, pageIndex) in pageData"
          :key="page.url"
          :class="{isSelected: currentIndex === pageIndex, isReport: currentIndex === 2}"
          @click="onChangeIframe(pageIndex)"
        >
          <img :src="page.icon" alt />
          <span>{{ page.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import localPageData from "./pageData";

export default {
  data() {
    return {
      pageData: [],
      currentIndex: 0,
      timerId: null,
      isAlternate: false,
      firstPageIntervalTime: 30000,
      intervalTime: 15000
    };
  },
  created() {
    this.pageData = localPageData;
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.showIframe(this.currentIndex);

      if (this.pageData.length === 1) {
        this.isAlternate = false;
        return;
      }

      // this.startRatory();
    },
    showIframe(index) {
      return new Promise((resolve, reject) => {
        const cur = this.$refs.page[index];
        const src = cur.getAttribute("src");
        if (!src) {
          cur.setAttribute("src", this.pageData[index].url);
          cur.onload = resolve;
          cur.onerror = reject;
        } else {
          resolve();
        }
      });
    },
    // 点击切换 iframe
    async onChangeIframe(index) {
      await this.showIframe(index);
      this.currentIndex = index;
      if (this.isAlternate) {
        // 点击切换后，如果处于轮播状态，重新开始计时
        clearTimeout(this.timerId);
        this.startRatory();
      }
      if (this.currentIndex === 0) {
        let iFrame = document.getElementById(`iframe-0`);
        iFrame.contentWindow.postMessage("messagefrom Rotary", "*");
      }
    },
    // 切换轮播状态
    onChangeRatoryStatus() {
      this.isAlternate = !this.isAlternate;
      clearTimeout(this.timerId);
      if (this.isAlternate) {
        this.showNextIframe();
      }
    },
    // 开始轮播
    startRatory() {
      const intervalTime = this.pageData[this.currentIndex].pollTime;
      this.timerId = setTimeout(
        this.showNextIframe.bind(this),
        intervalTime * 1000
      );
    },
    // 切换到下一个 iframe
    showNextIframe() {
      this.currentIndex =
        this.currentIndex === this.pageData.length - 1
          ? 0
          : this.currentIndex + 1;
      this.showIframe(this.currentIndex).then(res => {
        this.startRatory();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.rotary-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  bottom: 15%;
  width: 60px;
  color: #fff;
  .control-btn,
  .config-btn {
    display: flex;
    align-items: center;
    width: 60px;
    height: 50px;
    margin-bottom: 50px;
    padding-left: 15px;
    background: url(../../images/rotary/bg.png) 0 0 no-repeat;
    background-size: 201px 50px;
    cursor: pointer;
    img {
      width: 80%;
    }
  }
  .config-btn {
    margin-bottom: 10px;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      width: 201px;
      height: 50px;
      background: url(../../images/rotary/bg.png) 0 0 no-repeat;
      padding: 0 20px;
      background-size: 100% 100%;
      transition: all 0.5s;
      cursor: pointer;

      img {
        width: 25px;
      }
      span {
        height: 50px;
        margin-left: 15px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: #38e2fb;
      }
    }
    li.isSelected {
      cursor: inherit;
      transform: translateX(-110px);
    }
    // li.isReport span {
    //   color: #fff;
    // }
    li + li {
      margin-top: 10px;
    }
  }
}
</style>
