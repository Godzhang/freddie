<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";

export default {
  data() {
    return {
      locale: enUS
    };
  },
  watch: {
    "$route.query.locale"(val) {
      this.locale = val === "enUS" ? zhCN : enUS;
    }
  }
};
</script>
<style lang="less">
</style>
