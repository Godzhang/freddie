<template>
  <div id="app">
    <div v-if="flag">{{ msg }}</div>
    <button @click="change">change</button>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      flag: true,
      msg: "hello world"
    };
  },
  mounted() {},
  watch: {
    flag: "showFlag",
    $route() {
      console.log("route change");
    }
  },
  methods: {
    change() {
      this.flag = !this.flag;
    },
    showFlag(v) {
      console.log(v);
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped></style>
