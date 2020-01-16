<template>
  <div class="wrap">
    <div :class="['sidebar-container', {hide: isHide}]">
      <div class="sidebar">
        <ul>
          <li>111111111111111111111</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div class="arrow" @click="toggleSide()"></div>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHide: false
    };
  },
  mounted() {},
  methods: {
    toggleSide() {
      this.isHide = !this.isHide;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  width: 100%;
  height: 100%;
  .sidebar-container {
    position: relative;
    width: 200px;
    flex: 0 0 200px;
    height: 100%;
    transition: all 0.3s ease;
    .sidebar {
      width: 100%;
      height: 100%;
      background: #08c;
      overflow: hidden;
    }
    .arrow {
      position: absolute;
      top: 50%;
      right: 0;
      width: 10px;
      height: 50px;
      transform: translateY(-50%);
      background: #f00;
    }
    &.hide {
      width: 0px;
      flex: 0 0 0px;
      .arrow {
        right: -10px;
      }
    }
  }
  .content {
    height: 100%;
    background: #ff0;
    flex: auto;
  }
}
</style>
