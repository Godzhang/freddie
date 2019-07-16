<template>
  <div class="wrap">
    <el-select v-model="active" :placeholder="getName()">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      active: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  methods: {
    getName() {
      this.$alert("sdf", "2", action => {
        console.log(action);
      });
      return "dsfsdf";
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
