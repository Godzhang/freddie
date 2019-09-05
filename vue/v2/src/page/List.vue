<template>
  <div class="list">
    <div class="item" v-for="link in links" :key="link.value">
      <slot
        name="link"
        :link="link"
        :bookmark="bookmark"
        :bookmarkButtonAttrs="
      {style: [link.bookmarked ? {display: 'none'} : {}]}"
        :bookmarkButtonEvents="{click: () => bookmark(link)}"
      ></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    bookmark(link) {
      link.bookmarked = !link.bookmarked;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
</style>
