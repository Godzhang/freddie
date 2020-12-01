<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" @hook:mounted="childMounted" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  mounted() {
    console.log("parent mounted");
  },
  methods: {
    childMounted() {
      console.log("child mounted");
    }
  },
  components: {
    HelloWorld
  }
};
</script>
