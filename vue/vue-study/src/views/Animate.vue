<template>
  <div class="animate">
    <component :is="componentName"></component>
  </div>
</template>
<script>
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
