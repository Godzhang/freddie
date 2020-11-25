<template>
  <div id="home">
    <div>router home</div>
    <div>
      <router-link to="/home/chaoyang">
        <button>home / chaoyang</button>
      </router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import List from "../components/List";

export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
  components: {}
};
</script>
<style lang="scss" scoped>
#home {
  position: relative;
}
.page {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
