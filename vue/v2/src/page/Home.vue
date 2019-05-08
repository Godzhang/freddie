<template>
  <div class="wrap">
    <div class="title">
      <h3>甘肃省热点突发舆情事件</h3>
      <div class="sub-title">Hot Spot Emergency Public Opinion Events</div>
    </div>
    <div class="top-bar">
      <div class="side-bar left-bar"></div>
      <div class="center-bar">
        <div class="side-bar center-left-bar"></div>
        <div class="side-bar center-right-bar"></div>
        <div class="cc-container">
          <div class="cc-left"></div>
          <div class="cc-right"></div>
          <div class="cc-center"></div>
        </div>
      </div>
      <div class="side-bar right-bar"></div>
    </div>
    <div class="container">
      <div class="channel-hot corner-box">
        各渠道热点
        <div class="right-border"></div>
      </div>
      <div class="unchannel-box"></div>
      <!-- <el-row>
        <el-col :span="6">
          <div class="channel-hot"></div>
        </el-col>
        <el-col :span="18"></el-col>
      </el-row>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
$color-normal: #45deff;

.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  // padding: 0 30px;
  background-color: #0c1d40;
  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 864px;
    height: 80px;
    padding-top: 15px;
    text-align: center;
    color: $color-normal;
    h3 {
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 6px;
    }
    .sub-title {
      font-size: 12px;
      line-height: 20px;
    }
  }
  .top-bar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 85px;
    width: calc(100% - 24px - 60px);
    min-width: 800px;
    margin: 0 auto;
    // background-color: #08c;
    .side-bar {
      height: 3px;
    }
    .left-bar {
      position: absolute;
      top: 31px;
      left: 0;
      width: 24.3%;
      background-image: url(../assets/images/para-side.jpg);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 3px;
        background-image: url(../assets/images/para-45-left.jpg);
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 6px;
        height: 3px;
        background-image: url(../assets/images/para-45-right.jpg);
      }
    }
    .right-bar {
      position: absolute;
      top: 31px;
      right: 0;
      width: 24.3%;
      background-image: url(../assets/images/para-side.jpg);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 3px;
        background-image: url(../assets/images/para-135-left.jpg);
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 6px;
        height: 3px;
        background-image: url(../assets/images/para-135-right.jpg);
      }
    }
    .center-bar {
      position: absolute;
      top: 18px;
      left: 50%;
      transform: translateX(-50%);
      width: 75.16%;
      height: 66px;
      .center-left-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 19.57%;
        background-image: url(../assets/images/para-side.jpg);
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 3px;
          background-image: url(../assets/images/para-45-left.jpg);
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 10px;
          height: 3px;
          background-image: url(../assets/images/para-45-right-green.jpg);
        }
      }
      .center-right-bar {
        position: absolute;
        top: 0;
        right: 0;
        width: 19.57%;
        background-image: url(../assets/images/para-side.jpg);
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 3px;
          background-image: url(../assets/images/para-135-left-green.jpg);
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 6px;
          height: 3px;
          background-image: url(../assets/images/para-135-right.jpg);
        }
      }
      .cc-container {
        position: absolute;
        bottom: 0;
        left: 19.57%;
        width: 60.86%;
        height: 5px;
        .cc-left {
          position: absolute;
          top: -61px;
          left: 0;
          width: 116px;
          height: 66px;
          background-image: url(../assets/images/center-left.png);
        }
        .cc-right {
          position: absolute;
          top: -61px;
          right: 0;
          width: 116px;
          height: 66px;
          background-image: url(../assets/images/center-right.png);
        }
        .cc-center {
          width: calc(100% - 200px);
          height: 5px;
          margin: 0 auto;
          background-image: url(../assets/images/center-side.jpg);
        }
      }
    }
    // .side-bar {
    //   height: 3px;
    //   border: 1px solid $color-normal;
    // }
    // .left-bar {
    //   position: absolute;
    //   top: 31px;
    //   left: 0;
    //   width: 24.3%;
    //   border-bottom-left-radius: 6px;
    //   border-top-right-radius: 6px;
    // }
    // .right-bar {
    //   position: absolute;
    //   top: 31px;
    //   right: 0;
    //   width: 24.3%;
    //   border-bottom-right-radius: 6px;
    //   border-top-left-radius: 6px;
    // }
    // .center-bar {
    //   position: absolute;
    //   top: 18px;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   width: 75.16%;
    //   height: 66px;
    //   .center-left-bar {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 19.57%;
    //     border-bottom-left-radius: 6px;
    //     border-top-right-radius: 6px;
    //   }
    //   .center-right-bar {
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     width: 19.57%;
    //     border-bottom-right-radius: 6px;
    //     border-top-left-radius: 6px;
    //   }
    // }
  }
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 30px 20px 30px;
    background-color: #08c;
    .channel-hot {
      position: relative;
      width: 31.8%;
      height: 300px;
      border: 3px solid #1baef3;
    }
    .unchannel-box {
      height: 100px;
      background-color: #f00;
    }
  }
}
// .corner-box {
//   position: relative;
//   &::after {
//     position: absolute;
//     top: -1px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 50%;
//     height: ;
//   }
// }
</style>
