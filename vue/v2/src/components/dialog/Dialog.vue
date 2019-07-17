<template>
  <transition name="fade-up">
    <div class="dialog" v-if="visible">
      <div class="dialog-mask" @click="$emit('update:visible', false)"></div>
      <div class="dialog-container" :style="dialogStyle">
        <div class="header">
          <div class="title">{{ title }}</div>
          <i class="close-btn">关闭</i>
        </div>
        <!-- <div class="content">
          <slot></slot>
        </div>-->
        <!-- <div class="footer">
          <slot name="footer"></slot>
        </div>-->
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    width: { type: String, default: "500px" },
    height: { type: String, default: "300px" },
    title: { type: String, default: "Dialog" },
    visible: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  computed: {
    dialogStyle() {
      return {
        width: this.width,
        height: this.height
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .dialog-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .dialog-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    .header {
      padding: 10px 20px;
      .title {
        font-size: 18px;
      }
      .close-btn {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
      }
    }
    .content {
      padding: 20px;
    }
    .footer {
      padding: 10px 20px;
    }
  }
}
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.5s;
}
.fade-up-enter,
.fade-up-leave-to {
  opacity: 0;
}
</style>
