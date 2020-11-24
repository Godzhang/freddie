<template>
  <div
    :class="['item', { isSelected: item.isSelected }]"
    @click="handleClick()"
  >
    {{ item.value }}
  </div>
</template>
<script>
export default {
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    item: {
      type: Object,
      default: () => {
        value: "";
      }
    },
    index: Number
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    handleClick() {}
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 80px;
  border-radius: 80px;
  background-color: #d3d3d3;
  &.isSelected {
    color: #fff;
    background-color: #08c;
  }
}
</style>
