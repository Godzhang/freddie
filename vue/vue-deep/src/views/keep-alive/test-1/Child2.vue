<template>
  <div class="wrap">
    <ul class="nav">
      <li
        v-for="article in articles"
        :key="article.title"
        @click="setContent(article.content)"
        :class="{actived: article.content === content}"
      >{{article.title}}</li>
    </ul>
    <div class="content">
      <div v-text="content"></div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      articles: [
        {
          title: "child2-title-1",
          content: "content-1"
        },
        {
          title: "child2-title-2",
          content: "content-2"
        },
        {
          title: "child2-title-3",
          content: "content-3"
        }
      ],
      content: ""
    };
  },
  mounted() {},
  activated() {
    console.log("child2 activated");
  },
  deactivated() {
    console.log("child2 deactivated");
  },
  computed: {},
  watch: {},
  methods: {
    setContent(content) {
      this.content = content;
    }
  }
};
</script>
<style lang='scss' scoped>
.wrap {
  display: flex;
  width: 100%;
  .nav {
    width: 150px;
    height: 100%;
    border-right: 1px solid #ddd;
    li {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      &:hover,
      &.actived {
        background: #eee;
      }
    }
  }
}
</style>