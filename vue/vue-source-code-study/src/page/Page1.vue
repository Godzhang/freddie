<template>
  <div class="page1">
    <h1>page-1</h1>
    <div style="margin-top: 1200px"></div>
    <router-link to="/page2#abc">
      page2#abc
    </router-link>
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
.page1 {
  height: 3000px;
}
</style>
