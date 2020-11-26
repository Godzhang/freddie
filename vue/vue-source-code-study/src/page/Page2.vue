<template>
  <div class="page2">
    <h1>page-2</h1>
    <p id="abc">
      定位到这里
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.page2 {
  position: relative;
  height: 3000px;
  #abc {
    position: absolute;
    top: 2000px;
  }
}
</style>
