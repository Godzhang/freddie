<template>
  <div class="container" ref="container">
    <div class="wrapper" ref="wrapper">
      <ul class="list" v-for="n in count" :key="n" ref="list">
        <li :class="['item', `item-${n}`].join(' ')" v-for="i in 10" :key="`${n}-${i}`">{{i}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from '@better-scroll/core';

export default {
  data() {
    return {
      bs: null,
      itemWidth: 0,
      count: 10,
      isTouch: false,
      isAutoSlide: true,
      timer: null
    }
  },
  mounted() {
    this.itemWidth = this.$refs.list[0].offsetWidth;

    this.bs = new BetterScroll(this.$refs.container, {
      scrollX: true,
      startX: -this.itemWidth * ~~(this.count / 2),
      probeType: 3
    });
    this.bs.on('scroll', this.onScroll);
    this.$refs.container.addEventListener('touchstart', () => {
      this.stopSlide();
      this.isTouch = true;
      this.isAutoSlide = false;
    })
    this.bs.on('scrollEnd', () => {
      if (this.isTouch) {
        this.isTouch = false;
        this.startSlide();
        this.isAutoSlide = true;
      }
    })
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.bs.scrollBy(-0.5, 0, 16, 'linear');
      this.timer = requestAnimationFrame(this.startSlide);
    },
    stopSlide() {
      cancelAnimationFrame(this.timer);
    },
    onScroll(pos) {
      const x = pos.x;
      if (this.isAutoSlide && x <= Math.floor(this.count * 2 / 3) * -this.itemWidth) {
        this.bs.scrollTo(x + Math.floor(this.count * 1 / 3) * this.itemWidth, pos.y, 0);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 500px;
  white-space: nowrap;
  overflow: hidden;
}
.wrapper {
  display: inline-block;
  height: 500px;
}
.list {
  display: inline-block;
  height: 500px;
}
.item {
  display: inline-block;
  width: 150px;
  height: 500px;
  background-color: #08c;
  text-align: center;
  line-height: 500px;
  font-size: 50px;
  color: #fff;
  /* margin: 0 2px; */
}
.item-2 {
  background-color: aqua;
}
.item-3 {
  background-color: orange;
}
</style>