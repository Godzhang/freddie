<template>
  <div class="list">
    <div v-for="(menu, mIndex) in menuList" :key="mIndex">
      <Item
        v-for="(item, index) in menu.dataList"
        :menuList.sync="menuList"
        :item="item"
        :index="index"
        :key="index"
      ></Item>
    </div>
  </div>
</template>
<script>
import Item from "./Item";

export default {
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
  components: { Item }
};
</script>
