<template>
  <div class="color-picker-wrapper">
    <div class="picker-select-box" @click="onTogglePop()">
      <div class="picker-select" :style="showStyle">
        <i class="iconfont icon-down" v-show="hasSelectColor"></i>
        <i class="iconfont icon-close" v-show="!hasSelectColor"></i>
      </div>
    </div>
    <div class="picker-pop" v-show="isShowPicker">
      <div class="color-select-wrapper">
        <div class="color-box" ref="colorBox" :style="{backgroundColor: background}">
          <div class="bg-white"></div>
          <div class="bg-black"></div>
        </div>
        <div class="color-bar" ref="colorBar"></div>
      </div>
      <div class="handle-area">
        <iInput />
        <div class="handle-btn">
          <a>清空</a>
          <button>确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import iInput from "../input/Input";

export default {
  components: {
    iInput
  },
  name: "colorPicker",
  props: {
    value: { type: String, default: "" }
  },
  data() {
    return {
      currentColor: this.value,
      isShowPicker: true,
      detailCanvas: null,
      typeCanvas: null,
      barColor: "rgba(255, 0, 0)",
      background: "hsl(0, 100%, 50%)"
    };
  },
  computed: {
    hasSelectColor() {
      return !!this.currentColor;
    },
    showStyle() {
      return { background: this.currentColor };
    }
  },
  watch: {
    isShowPicker(v) {
      if (v) {
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
};
</script>
<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-picker-wrapper {
  position: relative;
}
.picker-select-box {
  @include flex-center;
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  background: #fff;
}
.picker-select {
  @include flex-center;
  width: 30px;
  height: 30px;
  border: 1px solid #aaa;
  i {
    display: block;
    &.icon-down {
      color: #fff;
    }
  }
}
.picker-pop {
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  background: #fff;
}
.color-select-wrapper {
  display: flex;
  justify-content: space-between;
  height: 200px;
  .color-box {
    position: relative;
    width: 280px;
    height: 100%;
    background-color: hsl(0, 100%, 50%);
    .bg-white,
    .bg-black {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .bg-white {
      background: linear-gradient(90deg, #fff, hsla(0%, 0%, 100%, 0%));
    }
    .bg-black {
      background: linear-gradient(0deg, #000, transparent);
    }
  }
  .color-bar {
    position: relative;
    width: 20px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #f00 0%,
      #ff0 17%,
      #0f0 33%,
      #0ff 50%,
      #00f 67%,
      #f0f 83%,
      #f00 100%
    );
  }
}
.handle-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.handle-btn {
  a {
    font-size: 12px;
    color: #08c;
    cursor: pointer;
  }
  button {
    width: 50px;
    height: 30px;
    outline: none;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      border-color: #08c;
      color: #08c;
    }
  }
}
</style>
