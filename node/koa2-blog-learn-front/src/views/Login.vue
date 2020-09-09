<template>
  <div class="login">
    <h1>登录</h1>
    <div class="login-item">
      <span>用户名：</span><el-input v-model="username"></el-input>
    </div>
    <div class="login-item">
      <span>密码：</span
      ><el-input type="password" v-model="password"></el-input>
    </div>
    <el-button type="primary" @click="onSubmit" style="margin-top: 20px;"
      >登录</el-button
    >
    <router-link style="margin-left: 30px;" to="/register">注册</router-link>
  </div>
</template>
<script>
import { login } from "@/service/user.service.js";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async onSubmit() {
      if (!this.username.trim()) {
        alert("用户名不能为空");
        return;
      }
      if (!this.password.trim()) {
        alert("密码不能为空");
        return;
      }
      login({
        username: this.username,
        password: this.password
      }).then(res => {
        this.$message.success("登录成功");
        this.$router.push("/");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  padding: 30px;
  .login-item {
    display: flex;
    align-items: center;
    span {
      width: 120px;
    }
  }
  .login-item + .login-item {
    margin-top: 20px;
  }
}
</style>
