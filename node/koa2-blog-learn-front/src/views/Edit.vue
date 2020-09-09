<template>
  <div class="edit">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="kind">
        <el-select v-model="ruleForm.kind" placeholder="请选择文章分类">
          <el-option label="技术" value="technology"></el-option>
          <el-option label="体育" value="sport"></el-option>
          <el-option label="娱乐" value="entertainment"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="正文" prop="content">
        <el-input
          type="textarea"
          v-model="ruleForm.content"
          placeholder="请输入正文"
        ></el-input>
      </el-form-item>
      <el-button v-if="isCreate" type="primary" @click="submitForm('ruleForm')"
        >创建</el-button
      >
      <el-button v-else type="primary" @click="changeForm('ruleForm')"
        >修改</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form>
  </div>
</template>
<script>
import {
  createBlog,
  getBlogDetail,
  updateBlog
} from "@/service/blog.service.js";

export default {
  name: "Edit",
  data() {
    return {
      ruleForm: {
        title: "",
        content: "",
        kind: "technology"
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        kind: [
          { required: true, message: "请选择文章分类", trigger: "change" }
        ],
        content: [{ required: true, message: "请填写内容", trigger: "blur" }]
      }
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.getArticleDetail();
    }
  },
  computed: {
    isCreate() {
      return !this.$route.params.id;
    }
  },
  watch: {},
  methods: {
    getArticleDetail() {
      const id = +this.$route.params.id;
      getBlogDetail({ id }).then(res => {
        if (res.code === 0) {
          this.ruleForm.title = res.data.title;
          this.ruleForm.kind = res.data.kind;
          this.ruleForm.content = res.data.content;
        } else {
          this.$message.error(res.message);
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          await createBlog(this.ruleForm);
          this.$message.success("创建成功");
          this.resetForm("ruleForm");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          await updateBlog(this.ruleForm);
          this.$message.success("修改成功");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.edit {
  padding: 30px;
}
</style>
