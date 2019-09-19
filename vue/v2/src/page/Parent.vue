<template>
  <div>
    <Child2></Child2>
    <div>{{$store.state.count}}</div>
    <div>{{$store.getters.doubleCount}}</div>
    <button @click="$store.commit('increment')">mutations</button>
    <button @click="$store.dispatch('addCount')">actions</button>
    <hr />
    <div>child - 1</div>
    <div>child1-count: {{countA}}</div>
    <Child1></Child1>
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
    // console.log(this.$store.state.count);
    // console.log(this.$store.getters.doubleCount);
  },
  computed: {
    countA() {
      return this.$store.state.a.count;
    }
  },
  components: {
    Child1,
    Child2
  }
};
</script>
