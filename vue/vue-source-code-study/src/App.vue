<template>
  <div id="app">
    <!-- <div>
      <router-link to="/home">
        <button>home / main</button>
      </router-link>
      <router-link :to="{ name: 'layout' }">
        <button>use name link to layout</button>
      </router-link>
      <router-link :to="{ path: '/layout' }">
        <button>layout</button>
      </router-link>
      <router-link :to="{ path: '/layout#anchor' }">
        <button>layout#anchor</button>
      </router-link>
      <router-link :to="{ path: '/layout#abc' }">
        <button>layout#abc</button>
      </router-link>
      <router-link :to="{ path: '/layout#1number' }">
        <button>layout#1number</button>
      </router-link>
      <router-link to="/user/100">
        <button>user / 100</button>
      </router-link>
      <router-link to="/user/50">
        <button>user / 50</button>
      </router-link>
    </div> -->
    <router-view></router-view>
    <!-- <div style="padding: 20px;border: 1px solid #08c;">
      <router-view />
    </div> -->
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
