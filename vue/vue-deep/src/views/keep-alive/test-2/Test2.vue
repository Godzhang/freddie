<!--  -->
<template>
  <div class="keep-alive-test-2">
    <ul class="list">
      <li @click="goto('child1')">child-1</li>
      <li @click="goto('child2')">child-2</li>
      <li @click="goto('child3')">child-3</li>
    </ul>
    <hr />
    <div class="router-view-box">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    goto(path) {
      path = `/keep-alive/test2/${path}`;
      if (path !== this.$route.path) {
        this.$router.push(path);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.list {
  display: flex;
  li {
    width: 150px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
}
</style>