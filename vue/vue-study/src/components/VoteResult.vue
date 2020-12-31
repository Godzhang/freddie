<template>
  <div class="vote-result">
    <div class="container">
      <ul class="list">
        <li v-for="theme in themes" :key="theme" :class="['item', theme]">
          <div class="image-box">
            <div class="image" v-for="(url, i) in altasCover.red" :key="i">
              <img :src="url" alt />
            </div>
          </div>
          <div class="text-box">
            <div class="title">
              <span class="color-name">颜色名称</span>
              <span class="vote-number">140564票</span>
            </div>
            <div class="desc">
              中国队以38秒01的成绩摘得银牌。在预赛
              中中国队以37.92秒创造了新的亚洲纪录。
              37.92秒也是世界历史第八的好成绩。
            </div>
          </div>
        </li>
      </ul>
    </div>
    <a class="return-btn" @click="hideVoteResult"></a>
  </div>
</template>
<script>
import { altasCover } from "@/common/global/atlas";

const themes = ["red", "yellow", "blue", "white", "green"];

export default {
  inject: ["store"],
  data() {
    return { themes, altasCover };
  },
  methods: {
    hideVoteResult() {}
  }
};
</script>
<style lang="scss" scoped>
.vote-result {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 105;
  .container {
    box-sizing: border-box;
    position: absolute;
    top: 3vh;
    left: 0;
    width: 100%;
    height: 97vh;
    padding: 9vw 3vw;
    background: #e2e4e9;
    overflow: auto;
    .list {
      .item {
        position: relative;
        width: 100%;
        height: 36vw;
        @each $color in red, green, blue, white, yellow {
          &.#{$color} {
            background: url("~@/assets/vote-result/bg-#{$color}.png")
              0
              center
              no-repeat;
            background-size: 100% 75%;
          }
        }
        .image-box {
          position: absolute;
          top: 0;
          // left: 10vw;
          width: 25vw;
          height: 100%;
          .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1vw solid #fff;
            transform-origin: left center;
            transform: skew(10deg);
            overflow: hidden;
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
            &:first-child {
              transform: translateX(-20px) scale(0.9) skew(10deg);
            }
            &:nth-child(2) {
              transform: translateX(-10px) scale(0.95) skew(10deg);
            }
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              // width: 100%;
              transform: translate(-50%, -50%);
              height: 100%;
            }
          }
        }
        .text-box {
          position: absolute;
          top: 8vw;
          width: 50%;
          color: #fff;
          .title {
            display: flex;
            align-items: flex-end;
            margin-bottom: 10px;
            font-weight: bold;
            .color-name {
              font-size: 4.25vw;
              margin-right: 15px;
              text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            }
            .vote-number {
              font-size: 4vw;
              text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            }
          }
          .desc {
            margin-left: 5px;
            font-size: 12px;
            line-height: 1.25;
            transform: scale(0.9);
          }
        }

        &:nth-child(2n) {
          .image-box {
            right: 8vw;
          }
          .text-box {
            left: 8vw;
          }
        }
        &:nth-child(2n + 1) {
          .image-box {
            left: 10vw;
          }
          .text-box {
            left: 40vw;
          }
        }
      }
      .item + .item {
        margin-top: 9vw;
      }
    }
  }
  .return-btn {
    position: absolute;
    top: 1.5vh;
    right: 0;
    width: 20vw;
    height: 10vw;
    background: url(../assets/vote-result/return-btn.png) 0 0 no-repeat;
    background-size: 100% 100%;
  }
}
</style>
