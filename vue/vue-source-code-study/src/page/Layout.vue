<template>
  <div class="layout">
    <div class="scrollbar">
      layout
      <p id="abc">
        定位到这里
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {}
  // beforeRouteEnter(to, from, next) {
  //   console.log("layout component before router enter");
  //   next(vm => console.log("layout: ", vm));
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("layout component before router update");
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log("layout component before router leave");
  //   next();
  // }
};
</script>
<style lang="scss" scoped>
.layout {
  height: 800px;
  border: 1px solid #08c;
  overflow: scroll;
  .scrollbar {
    position: relative;
    height: 3000px;
    padding: 20px;
    #abc {
      position: absolute;
      top: 1000px;
    }
  }
}
</style>
