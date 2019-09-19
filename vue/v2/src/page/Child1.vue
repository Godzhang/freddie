<template>
  <div>child1</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch("incrementAAction");
    }, 3000);
  }
};
</script>
