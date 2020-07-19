<template>
  <div id="wrap">
    <button @click="onClick">click</button>
  </div>
</template>
<script>
// import Vue from "vue";
// import SeamLessScroll from "../components/seam-less-scroll.vue";
import obj from "../utils/util";
console.log(obj);
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onClick() {
      // this.$toast.show("abc", 2000);
      this.$msgBox
        .showMsgBox({
          title: "提示",
          content: "确定要删除吗？"
        })
        .then(async val => {
          console.log("确认");
        })
        .catch(err => {
          console.log("取消");
        });
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
