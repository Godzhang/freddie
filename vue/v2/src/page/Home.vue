<template>
  <div class="wrap">
    <div>code: {{ $code }}</div>
    <button @click="$router.push('/queen')">queen</button>
    <!-- <button @click="visible = true">show</button>
    <Dialog width="75%" height="50%" :visible.sync="visible"></Dialog>-->
  </div>
</template>
<script>
import { getTestData } from "../services/moduleA";
import Dialog from "../components/dialog/Dialog";
require("../components/dialog/index.js");

export default {
  name: "home",
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    // console.log(this);
    // console.log("env ", process.env);
    // getTestData().then(res => {
    //   console.log(res);
    // });
  },
  methods: {},
  components: {
    Dialog
  }
};
</script>
<style lang="scss" scoped>
</style>
