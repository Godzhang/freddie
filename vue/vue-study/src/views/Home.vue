<template>
  <div class="animate">
    <Shuffle />
    <Play />
    <!-- <Moment /> -->
    <!-- <Open /> -->
    <Cover />
    <!--<VoteResult />-->
  </div>
</template>
<script>
import Cover from "../components/Cover";
// import Open from "../components/Open";
// import Moment from "../components/Moment";
import Play from "../components/Play";
import Shuffle from "../components/Shuffle";
// import VoteResult from "../components/VoteResult";

export default {
  name: "Home",
  provide() {
    return {
      store: this
    };
  },
  data() {
    return {
      step: 1, // 页面索引，从 1 开始
      colorType: "red", // 主题
      groupIndex: 0 // 表示当前主题图集的第几组索引
    };
  },
  mounted() {},
  methods: {
    nextStep() {
      this.step++;
    },
    setStep(s) {
      this.step = s;
    },
    setType(type) {
      this.colorType = type;
    },
    setGroupIndex(index) {
      this.groupIndex = index;
    }
  },
  components: {
    Cover,
    // Open,
    // Moment,
    Play,
    Shuffle
    // VoteResult
  }
};
</script>
<style lang="scss" scoped>
.animate {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
