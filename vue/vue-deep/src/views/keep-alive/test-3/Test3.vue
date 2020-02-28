<template>
  <div class="container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>