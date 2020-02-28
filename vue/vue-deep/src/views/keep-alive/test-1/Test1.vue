<template>
  <div class="container">
    <ul class="nav">
      <li @click="setName('Child1')" :class="{actived: name === 'Child1'}">Child1</li>
      <li @click="setName('Child2')" :class="{actived: name === 'Child12'}">Child2</li>
    </ul>
    <div class="box">
      <keep-alive>
        <component :is="name"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  components: {
    Child1,
    Child2
  },
  data() {
    return {
      name: "Child1"
    };
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    setName(name) {
      this.name = name;
    }
  }
};
</script>
<style lang='scss' scoped>
.nav {
  display: flex;
  li {
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ddd;
    cursor: pointer;
    &:hover,
    &.actived {
      background: #eee;
    }
  }
}
.box {
  display: flex;
  width: 500px;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
</style>