<template>
  <div>
    <h1 style="margin-bottom: 30px">test2 - child3</h1>
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
  </div>
</template>
<script>
export default {
  name: "test2-child3",
  components: {},
  data() {
    return {
      articles: [
        {
          title: "child1-title-1",
          content: "content-1"
        },
        {
          title: "child1-title-2",
          content: "content-2"
        },
        {
          title: "child1-title-3",
          content: "content-3"
        }
      ],
      content: ""
    };
  },
  mounted() {},
  activated() {
    console.log("child3 activated");
  },
  deactivated() {
    console.log("child3 deactivated");
  },
  // beforeRouteLeave(to, from, next) {
  //   to.meta.keepAlive = false;
  //   next();
  // },
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