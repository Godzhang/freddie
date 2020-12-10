<template>
  <div class="animate">
    <component :is="componentName"></component>
    <Load />
  </div>
</template>
<script>
import Load from "../components/animate/Load";
import Cover from "../components/animate/Cover";

export default {
  name: "AnimatePage",
  data() {
    return {
      componentName: "Cover"
    };
  },
  mounted() {},
  methods: {},
  components: {
    Load,
    Cover
  }
};
</script>
<style lang="scss" scoped>
.animate {
  width: 100%;
  height: 100%;
}
</style>
