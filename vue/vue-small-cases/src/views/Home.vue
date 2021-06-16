<template>
  <div class="home">
    <div class="sidebar">
      <ul class="router-list">
        <router-link
          v-for="item in navList"
          :key="item.router"
          class="router-item"
          tag="li"
          :to="item.router"
          >{{ item.title }}</router-link
        >
      </ul>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { navList } from "@/common/nav";

export default {
  name: "Home",
  data() {
    return {
      navList,
    };
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.home * {
  box-sizing: border-box;
}
.home {
  display: flex;
  width: 100%;
  height: 100%;
}
.sidebar {
  width: 200px;
  height: 100%;
  padding: 10px;
  flex-shrink: 0;
  border-right: 1px solid #aaa;
  overflow-x: hidden;
  overflow-y: auto;
  .router-list {
    .router-item {
      cursor: pointer;
      &:hover,
      &.active {
        color: orange;
      }
    }
  }
}
.container {
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>