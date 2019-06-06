<template>
  <div class="wrap">
    <SeamLessScroll class="seam-wrap">
      <div class="list">
        <div class="item" v-for="(item, index) in list" :key="index">{{ item }}</div>
      </div>
    </SeamLessScroll>
  </div>
</template>
<script>
import SeamLessScroll from "../components/seam-less-scroll";

export default {
  name: "home",
  data() {
    return {
      list: [
        "及东方均为女粉丝都及时假如我放假施蒂利克1",
        "及东方均为女粉丝都及时假如我放假施蒂利克2",
        "及东方均为女粉丝都及时假如我放假施蒂利克3",
        "及东方均为女粉丝都及时假如我放假施蒂利克4",
        "及东方均为女粉丝都及时假如我放假施蒂利克5",
        "及东方均为女粉丝都及时假如我放假施蒂利克6",
        "及东方均为女粉丝都及时假如我放假施蒂利克7",
        "及东方均为女粉丝都及时假如我放假施蒂利克8",
        "及东方均为女粉丝都及时假如我放假施蒂利克9",
        "及东方均为女粉丝都及时假如我放假施蒂利克10",
        "及东方均为女粉丝都及时假如我放假施蒂利克11",
        "及东方均为女粉丝都及时假如我放假施蒂利克12",
        "及东方均为女粉丝都及时假如我放假施蒂利克13",
        "及东方均为女粉丝都及时假如我放假施蒂利克14",
        "及东方均为女粉丝都及时假如我放假施蒂利克15",
        "及东方均为女粉丝都及时假如我放假施蒂利克16",
        "及东方均为女粉丝都及时假如我放假施蒂利克17",
        "及东方均为女粉丝都及时假如我放假施蒂利克18",
        "及东方均为女粉丝都及时假如我放假施蒂利克19",
        "及东方均为女粉丝都及时假如我放假施蒂利克20",
        "及东方均为女粉丝都及时假如我放假施蒂利克21"
      ]
    };
  },
  components: {
    SeamLessScroll
  }
};
</script>
<style lang="scss" scoped>
.seam-wrap {
  width: 500px;
  height: 300px;
  border: 1px solid #08c;
  overflow: hidden;
}
.list {
  margin-left: 20px;
  // margin: 20px;
}
.item {
  line-height: 30px;
  font-size: 20px;
}
</style>
