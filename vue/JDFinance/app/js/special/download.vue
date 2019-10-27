<template>
  <Panel title="下载APP" :class="$style.panel">
    <section :class="$style.content">
      <div class></div>
      <p>下载APP</p>
      <span>copyright</span>
    </section>
  </Panel>
</template>
<script>
import Panel from "../core/panel.vue";

export default {
  data() {
    return {};
  },
  components: {
    Panel
  }
};
</script>
<style lang="scss" module>
@import "../../css/element.scss";

html,
body {
  background: #fff;
}
.panel {
  @include panel;
  margin: 0;
  > h4 {
    display: none;
  }
  .content {
    @include flex;
    align-items: center;
    justify-content: center;
    height: 1136px;
    width: 100%;
    > div {
      background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?)
        center center no-repeat;
      width: 600px;
      height: 800px;
      background-size: 100% 100%;
      margin-top: -400px;
    }
    > p {
      @include btn($size: 32px, $bgcolor: #f1443e);
      height: 100px;
      line-height: 100px;
      width: 471px;
      background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
      box-shadow: 0 12px 32px 0 rgba(255, 159, 135, 0.6);
      position: fixed;
      bottom: 130px;
    }
    > span {
      position: fixed;
      bottom: 16px;
      font-size: 24px;
      color: #eee;
    }
  }
}
</style>