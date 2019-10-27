<template>
  <div>
    <Heador />
    <Slider />
    <Welfare />
    <Service />
    <Footor />
    <NavBar />
  </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import NavBar from "../public/navbar.vue";
import Slider from "./islider.vue";
import Welfare from "./welfare.vue";
import Service from "./service.vue";

export default {
  components: {
    Heador,
    Footor,
    NavBar,
    Slider,
    Welfare,
    Service
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
