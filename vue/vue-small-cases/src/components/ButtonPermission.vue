<template>
  <div class="wrapper">
    <button v-permission="'edit'">编辑</button>
    <button v-permission="'add'">添加</button>
    <button v-permission="'delete'">删除</button>
  </div>
</template>
<script>
import permission from "@/directives/permission";

export default {
  data() {
    return {};
  },
  directives: {
    permission,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>