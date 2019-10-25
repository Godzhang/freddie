<template>
  <Panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <Slider :cname="$style.slider" :items="items" />
    </section>
  </Panel>
</template>
<script>
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";

export default {
  components: {
    Slider,
    Panel
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400"
        }
      ]
    };
  }
};
</script>
<style lang="scss" module>
@import "../../css/element.scss";

.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    .slider {
      margin-top: 120px;
      img {
        width: 100%;
      }
    }
  }
}
// .list {
//   @include list(row);
//   background-color: #fff;
//   padding: 40px 0 20px 0;
//   justify-content: space-around;
//   a {
//     text-decoration: none;
//   }
//   .item {
//     text-align: center;
//     img {
//       display: inline-block;
//       width: 90px;
//       height: 90px;
//     }
//     h4 {
//       font-size: 26px;
//       margin-top: 12px;
//       color: #666;
//     }
//   }
// }
</style>
