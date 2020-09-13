<template>
  <div class="show">
    <template v-if="article">
      <h1 class="title">{{ article.title }}</h1>
      <div class="info">
        <span class="click-count">阅读次数: {{ article.clickCount || 0 }}</span>
        <p class="create-time">
          日期: {{ article.createTime | dateFormatter }}
        </p>
      </div>
      <p class="content">{{ article.content }}</p>
    </template>
  </div>
</template>
<script>
import { getBlogDetail } from "@/service/blog.service.js";

export default {
  name: "show",
  data() {
    return {
      article: null
    };
  },
  mounted() {
    this.init();
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      const id = +this.$route.params.id;
      getBlogDetail({ id }).then(res => {
        if (res.code === 0) {
          this.article = res.data;
        } else {
          this.$message.error(res.message);
        }
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.show {
  padding: 30px;
  .title {
    text-align: center;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    .create-time {
      color: #888;
      font-size: 12px;
    }
  }

  .content {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
