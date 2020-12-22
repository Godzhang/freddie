<template>
  <div class="animate">
    <Shuffle />
    <Play />
    <!-- <Moment /> -->
    <!-- <Open /> -->
    <Cover />
  </div>
</template>
<script>
import Cover from "../components/Cover";
import Open from "../components/Open";
import Moment from "../components/Moment";
import Play from "../components/Play";
import Shuffle from "../components/Shuffle";

export default {
  name: "Home",
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
    setStep(s) {
      this.step = s;
    },
    setType(type) {
      this.detailType = type;
    }
  },
  components: {
    Cover,
    // Open,
    // Moment,
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
