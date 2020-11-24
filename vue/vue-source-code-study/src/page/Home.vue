<template>
  <div id="app">
    <List :menuList="menuList" />
  </div>
</template>
<script>
import List from "../components/List";

export default {
  name: "home",
  data() {
    return {
      menuList: [
        { dataList: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }] }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.menuListTemp = {};
    }, 2000);
  },
  computed: {
    menuListTemp: {
      get() {
        return this.menuList;
      },
      set(obj) {
        console.log("set");
        return obj;
      }
    }
  },
  watch: {},
  methods: {},
  components: { List }
};
</script>
<style lang="scss" scoped>
#app {
  position: relative;
}
.page {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
