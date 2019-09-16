<template>
  <div>
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>
<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$store.state.count);
    console.log(this.$store.getters.doubleCount);
  },
  components: {
    Child1,
    Child2
  }
};
</script>
