<template>
  <div class="wrapper">
    <div class="headline">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in headlines" :key="index">
          <div class="image-box" ref="imageBox">
            <img class="image" :src="item.url" alt />
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="command">
        <h3 class="title">{{headlines[realIndex].title}}</h3>
        <div class="pub-time">{{headlines[realIndex].pubTime}}</div>
      </div>
    </div>
    <div class="projects">
      <ul class="list">
        <li class="item" v-for="i in 5" :key="i">
          <img src="http://iph.href.lu/120x70?fg=666666&bg=cccccc" alt />
        </li>
      </ul>
    </div>
    <div class="menus">
      <ul class="list">
        <li class="item" v-for="item in menus" :key="item.title">
          <div class="icon">
            <img :src="item.icon" alt />
          </div>
          <span class="title">{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { menus } from "@/common/global/global";

export default {
  data() {
    return {
      realIndex: 0,
      headlines: [
        {
          url: require("../assets/country/1.jpg"),
          title: "中国人民志愿军抗美援朝出国作战70周年纪念新华社颁发仪式",
          pubTime: "2020-10-13"
        },
        {
          url: require("../assets/country/1.jpg"),
          title: "中国人民志愿军抗美援朝出国作战70周年纪念新华社颁发仪式",
          pubTime: "2020-10-13"
        },
        {
          url: require("../assets/country/1.jpg"),
          title: "中国人民志愿军抗美援朝出国作战70周年纪念新华社颁发仪式",
          pubTime: "2020-10-13"
        }
      ],
      projects: [{ url: "", href: "" }],
      menus,
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          transitionEnd: () => {
            this.$nextTick(() => {
              this.realIndex = this.swiper.realIndex;
            });
          }
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>
<style lang="scss" scoped>
.headline {
  position: relative;
  height: 200px;
  .image-box,
  .image {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    /deep/ .swiper-pagination-bullet {
      margin: 0 5px;
      opacity: 0.3;
    }
    /deep/ .swiper-pagination-bullet-active {
      background-color: #fff;
      opacity: 1;
    }
  }
  .command {
    box-sizing: border-box;
    position: absolute;
    bottom: -50px;
    left: 5%;
    width: 90%;
    height: 85px;
    background-color: #fff;
    border-radius: 5px;
    padding: 12px;
    z-index: 10;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45px;
      height: 30px;
      background: url(../assets/icons/title-bg.png) bottom right no-repeat;
      background-size: 100% 100%;
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      font-weight: bold;
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .pub-time {
      margin-top: 8px;
      color: #999;
    }
  }
}
.projects {
  margin: 80px auto 0;
  width: 90%;
  height: 70px;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  .list {
    height: 100%;
    white-space: nowrap;
    .item {
      display: inline-block;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
    .item + .item {
      margin-left: 10px;
    }
  }
}
.menus {
  width: 90%;
  margin: 20px auto 0;
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 25%;
      text-align: center;
      margin-bottom: 20px;
      .icon {
        width: 30%;
        margin: 0 auto 5px;
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 12px;
        color: #000;
      }
    }
  }
}
</style>
