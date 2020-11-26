<template>
  <div class="layout">
    <div>User</div>
    <div>userId: {{ $route.params.id }}</div>
  </div>
</template>
<script>
export default {
  name: "user",
  // beforeRouteEnter(to, from, next) {
  //   console.log("user component before router enter");
  //   console.log("this: ", this);
  //   next(vm => console.log(vm));
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("user component before router update");
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log("user component before router leave");
  //   next();
  // },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped></style>
