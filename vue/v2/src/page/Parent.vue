<template>
  <div>
    <Child2></Child2>
    <div>{{$store.state.count}}</div>
    <div>{{$store.getters.doubleCount}}</div>
    <button @click="onMutations()">mutations</button>
    <button @click="$store.dispatch('addCount')">actions</button>
    <hr />
    <div>child - 1</div>
    <!-- <div>child1-count: {{countA}}</div> -->
    <Child1></Child1>
    <hr />
    <!-- <div>module - d count: {{ countD }}</div> -->
  </div>
</template>
<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  data() {
    return {
      cancelFn: null
    };
  },
  created() {
    // console.log(this.$store.state.count);
    // console.log(this.$store.getters.doubleCount);
  },
  mounted() {
    // setTimeout(() => {
    //   this.$store.dispatch("incrementDAction", 10);
    // }, 1000);
  },
  computed: {
    // countA() {
    //   return this.$store.state.a.count;
    // },
    // countD() {
    //   return this.$store.state.d.count;
    // }
  },
  methods: {
    onMutations() {
      this.$store.commit("increment", 123);
    }
  },
  components: {
    Child1,
    Child2
  }
};
</script>
