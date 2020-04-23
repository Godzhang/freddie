<template>
  <div>
    <FMRow>
      <FMCol :span="8">aaa</FMCol>
      <FMCol :span="16">bbb</FMCol>
    </FMRow>
  </div>
</template>
<script>
import FMRow from "@/components/row/row.js";
import FMCol from "@/components/col/col.js";

export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
  components: { FMRow, FMCol }
};
</script>
<style lang="scss" scoped>
</style>