<template>
  <div class="register">
    <h1>注册</h1>
    <div class="register-item">
      <span>用户名：</span><el-input v-model="username"></el-input>
    </div>
    <div class="register-item">
      <span>密码：</span
      ><el-input type="password" v-model="password"></el-input>
    </div>
    <div style="margin-top: 20px;">
      <el-button type="primary" @click="onRegister">注册</el-button>
      <el-button type="info" @click="onCheckIsExist"
        >验证用户名是否已存在</el-button
      >
      <router-link style="margin-left: 30px;" to="/login">登录</router-link>
    </div>
  </div>
</template>
<script>
import { checkIsExist, register } from "@/service/user.service.js";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async onRegister() {
      if (!this.username.trim()) {
        alert("用户名不能为空");
        return;
      }
      if (!this.password.trim()) {
        alert("密码不能为空");
        return;
      }
      register({ username: this.username, password: this.password }).then(
        res => {
          this.$message.success("注册成功");
          this.$router.push("/login");
        }
      );
    },
    async onCheckIsExist() {
      if (!this.username.trim()) {
        alert("用户名不能为空");
        return;
      }
      const isExist = await checkIsExist({ username: this.username });
      if (isExist) {
        this.$message.warning("用户名已存在");
      } else {
        this.$message.success("用户名可用");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.register {
  padding: 30px;
  .register-item {
    display: flex;
    align-items: center;
    span {
      width: 120px;
    }
  }
  .register-item + .register-item {
    margin-top: 20px;
  }
}
</style>
