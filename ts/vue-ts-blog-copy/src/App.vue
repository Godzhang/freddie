<template>
  <div id="app" class="container">
    <Nav v-if="isShowNav"></Nav>
    <div class="layout">
      <router-view></router-view>
      <Slider v-if="isShowSlider"></Slider>
    </div>
    <ArrowUp></ArrowUp>
    <Footer v-if="isShowNav"></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Slider from "@/components/Slider.vue";
import Footer from "@/components/Footer.vue";
import ArrowUp from "@/components/ArrowUp.vue";

// https://www.jianshu.com/p/fea615354d10
@Component({
  components: {
    Nav,
    Slider,
    Footer,
    ArrowUp
  }
})
export default class App extends Vue {
  private isShowNav: boolean = false;
  private isShowSlider: boolean = false;

  private mounted() {
    this.$http({
      baseURL: "http://localhost:3001",
      url: `/cart/getCartList`
    }).then(res => {
      console.log(res);
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
