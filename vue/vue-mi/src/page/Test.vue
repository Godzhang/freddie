<!--
 * @Author: 张奇
 * @Date: 2019-10-01 07:52:01
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-07 22:29:06
 * @Description: file content
 -->
<template>
  <div class="container">
    <div class="back" ref="back">
      <div class="item">
        <img src="../images/page/page-1.png" alt>
      </div>
      <div class="item">
        <img src="../images/page/page-2.png" ref="page2" alt>
      </div>
      <div class="item">
        <img src="../images/page/page-3.png" alt>
      </div>
      <div class="item">
        <img src="../images/page/page-4.png" alt>
      </div>
      <div class="item">
        <img src="../images/page/page-5.png" alt>
      </div>
    </div>
    <div class="front" ref="front">
      <div class="item">
        <div class="front-content">page-1</div>
      </div>
      <div class="item">
        <div class="front-content">page-2</div>
      </div>
      <div class="item">
        <div class="front-content">page-3</div>
      </div>
      <div class="item">
        <div class="front-content">page-4</div>
      </div>
      <div class="item">
        <div class="front-content">page-5</div>
      </div>
      <div class="item">
        <div class="front-content">page-6</div>
      </div>
      <div class="item">
        <div class="front-content">page-7</div>
      </div>
      <div class="item">
        <div class="front-content">page-8</div>
      </div>
      <div class="item">
        <div class="front-content">page-9</div>
      </div>
      <div class="item">
        <div class="front-content">page-10</div>
      </div>
      <div class="item">
        <div class="front-content">page-11</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        noSwiping: true
      },
      pageHeight: document.documentElement.offsetHeight,
      scrollTop: 0,
      move: 0,
      ratio: 0
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.$refs.page2.onload = () => {
      let height = this.$refs.page2.height;
      this.ratio =
        (height + this.pageHeight / 2) /
        (this.pageHeight * 7 + this.pageHeight / 2);
    };
    this.init();
  },
  methods: {
    init() {
      let back = this.$refs.back;
      let front = this.$refs.front;

      back.style.transform = `translateY(0px)`;

      front.addEventListener("scroll", e => {
        e.stopPropagation();
        let scrollTop = front.scrollTop;

        if (scrollTop < this.pageHeight / 2) {
          this.scrollTop = scrollTop;
        } else if (
          scrollTop >= this.pageHeight / 2 &&
          scrollTop <= this.pageHeight * 3 + this.$refs.page2.height
        ) {
          this.scrollTop =
            this.pageHeight / 2 +
            (scrollTop - this.pageHeight / 2) * this.ratio;
        } else if (scrollTop > this.pageHeight * 3 + this.$refs.page2.height) {
          console.log("----------------");
          console.log(scrollTop - this.pageHeight * 6);
          // console.log(this.pageHeight * 6);
          this.scrollTop =
            this.pageHeight / 2 +
            (this.pageHeight * 7 - this.pageHeight / 2) * this.ratio +
            scrollTop -
            this.pageHeight * 6;
          // this.scrollTop =
          //   front.scrollTop -
          //   this.pageHeight * 8 +
          //   this.pageHeight +
          //   this.$refs.page2.height * this.ratio;
        }
        console.log(this.scrollTop);
        back.style.transform = `translateY(-${this.scrollTop}px)`;
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.item {
  width: 100%;
  min-height: 100vh;
}
.front-content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #fff;
}
img {
  width: 100%;
}
.page {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
}
</style>
