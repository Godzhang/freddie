<template>
  <div class="animate">
    <Shuffle />
    <Play />
    <Moment />
    <Open />
    <Cover />
  </div>
</template>
<script>
import Cover from "../components/animate/Cover";
import Open from "../components/animate/Open";
import Moment from "../components/animate/Moment";
import Play from "../components/animate/Play";
import Shuffle from "../components/animate/Shuffle";

export default {
  name: "AnimatePage",
  provide() {
    return {
      store: this
    };
  },
  data() {
    return {
      step: 1,
      detailType: ""
    };
  },
  mounted() {},
  methods: {
    nextStep() {
      this.step++;
    },
    setType(type) {
      this.detailType = type;
    }
  },
  components: {
    Cover,
    Open,
    Moment,
    Play,
    Shuffle
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
