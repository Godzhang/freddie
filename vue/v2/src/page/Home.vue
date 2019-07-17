<template>
  <div class="wrap">
    <button @click="visible = true">show</button>
    <Dialog width="75%" height="50%" :visible.sync="visible"></Dialog>
  </div>
</template>
<script>
import Dialog from "../components/dialog/Dialog";
require("../components/dialog/index.js");

export default {
  name: "home",
  data() {
    return {
      visible: false
    };
  },
  methods: {},
  components: {
    Dialog
  }
};
</script>
<style lang="scss" scoped>
</style>
