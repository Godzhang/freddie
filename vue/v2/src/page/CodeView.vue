<template>
  <div>
    <div class="view">
      <QueenChild></QueenChild>
    </div>
    <div class="code">
      <pre v-highlightjs><code class="javascript">{{ q }}</code></pre>
    </div>
    <div class="code">
      <pre v-highlightjs><code class="javascript">{{ QueenChildCode }}</code></pre>
    </div>
  </div>
</template>
<script>
import QueenChild from "./QueenChild";
import q from "raw-loader!./QueenChild";
import QueenChildCode from "!raw-loader!./QueenChild";

export default {
  data() {
    return {
      q,
      QueenChildCode
    };
  },
  components: {
    QueenChild
  }
};
</script>
<style lang="scss" scoped>
.code {
  padding: 5px;
  margin-top: 20px;
  border: 1px solid #ddd;
}
</style>
