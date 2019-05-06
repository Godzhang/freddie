<template>
  <div class="home">
    <div>姓名</div>
    <div>手机号码</div>
    <div>账号</div>
    <div>密码</div>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
.home {
  div {
    width: 100px;
    margin: 10px 0;
    border: 1px solid #f00;
    text-align: justify;
    text-align-last: justify;
  }
}
</style>
