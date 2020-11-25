<template>
  <div id="app">
    <div>
      <router-link to="/home">
        <button>home / main</button>
      </router-link>
      <router-link :to="{name: 'layout'}">
        <button>use name link to layout</button>
      </router-link>
      <router-link :to="{path: '/layout', query: {layout: 'hahaha'}}">
        <button>layout with query</button>
      </router-link>
      <router-link to="/user/100">
        <button>user / 100</button>
      </router-link>
      <router-link to="/user/50">
        <button>user / 50</button>
      </router-link>
      <!-- <router-link to="animate">
        <button>animate</button>
      </router-link>
      <router-link to="filter">
        <button>filter</button>
      </router-link>-->
    </div>
    <div style="padding: 20px;border: 1px solid #08c;">
      <router-view />
      <!-- <router-view name="a" />
      <router-view name="b" />-->
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
