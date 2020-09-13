<template>
  <div>
    <el-radio-group v-model="kind">
      <el-radio-button label="all">全部</el-radio-button>
      <el-radio-button label="technology">技术</el-radio-button>
      <el-radio-button label="sport">体育</el-radio-button>
      <el-radio-button label="entertainment">娱乐</el-radio-button>
    </el-radio-group>
    <el-button
      type="primary"
      @click="$router.push('/edit')"
      style="margin-left: 10px;"
      >新建文章</el-button
    >
    <el-button @click="onExit">退出登录</el-button>
    <div class="home">
      <ul class="article-list">
        <li v-for="article in articles" :key="article.id">
          <el-row class="article-item">
            <el-col :span="12">
              <router-link :to="`/show/${article.id}`">{{
                article.title
              }}</router-link>
            </el-col>
            <el-col :span="3">浏览量: {{ article.clickCount }}</el-col>
            <el-col :span="3">{{ article.createTime | dateFormatter }}</el-col>
            <el-col :span="6">
              <router-link :to="`/edit/${article.id}`">
                <el-button type="primary" size="small">编辑</el-button>
              </router-link>
              <el-button
                type="danger"
                size="small"
                @click="onDelete(article.id)"
                >删除</el-button
              >
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
    <el-pagination
      v-if="totalCount"
      background
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="onCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getBlogList, deleteBlog } from "@/service/blog.service.js";
import { exit } from "@/service/user.service.js";
// 分页功能交给后端
export default {
  name: "Home",
  data() {
    return {
      articles: [],
      kind: "all",
      currentPage: 1,
      pageSize: 10,
      totalCount: 0
    };
  },
  mounted() {
    this.getBlogList();
  },
  computed: {},
  watch: {
    kind(k) {
      this.getBlogList();
    },
    currentPage(curr) {
      this.getBlogList();
    }
  },
  methods: {
    async getBlogList() {
      const params = { pageSize: this.pageSize, currentPage: this.currentPage };
      if (this.kind !== "all") params.kind = this.kind;

      await getBlogList(params).then(res => {
        if (res.code === 0) {
          this.articles = res.data.data;
          this.totalCount = res.data.totalCount;
          return res.data;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    onCurrentChange(curr) {
      this.currentPage = curr;
    },
    onDelete(id) {
      deleteBlog({ id }).then(res => {
        if (res.code === 0) {
          this.$message.success("删除成功");
          this.getBlogList();
        } else {
          this.$message.error("删除失败，请重试");
        }
      });
    },
    onExit() {
      exit().then(res => {
        if (res.code === 0) {
          this.$router.push("/login");
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
.home {
  display: flex;
  padding: 10px;
  .article-list {
    width: 100%;
    .article-item {
      height: 36px;
      line-height: 36px;
      > div {
        height: 100%;
      }
    }
  }
}
</style>
