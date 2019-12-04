<template>
  <div id="app">
    <div v-if="flag">{{ msg }}</div>
    <div v-else>{{ msg1 }}</div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      flag: true,
      msg: "hello world",
      msg1: "hello vue"
    };
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    change(f) {
      this.msg = Math.random();
    },
    toggle() {
      this.flag = !this.flag;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped></style>
