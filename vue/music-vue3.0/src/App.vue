<template>
  <div id="app">
    <div>{{ count }}</div>
    <!-- <div>{{ double }}</div> -->
  </div>
</template>

<script>
import {
  reactive,
  ref,
  toRefs,
  toRef,
  computed
} from "@vue/composition-api/dist/vue-composition-api.esm";

export default {
  name: "App",
  // vue3.0的入口函数，beforeCreate之前进行触发
  setup() {
    // const state = reactive({
    //   count: 0
    // });
    // setTimeout(() => {
    //   state.count++;
    // }, 1000);
    // return state;
    // ------------------------
    // const count = ref(0);
    // setTimeout(() => count.value++, 1000);
    // return { count };
    // -----------------------
    // const count = ref(0);
    // const state = reactive({ count });
    // setTimeout(() => {
    //   state.count++;
    // }, 1000);
    // return {
    //   count,
    // };
    // -----------------------
    // const state = reactive({
    //   count: 0,
    // });
    // const { count } = toRefs(state); // 把普通的数据，转成ref()方法所对应的响应式数据
    // setTimeout(() => {
    //   state.count++;
    // }, 1000);
    // return { count };
    // -----------------------
    // const state = reactive({
    //   count: 0,
    // });
    // const count = toRef(state, "count");
    // setTimeout(() => {
    //   state.count++;
    // }, 1000);
    // return { count };
    // -----------------------
    // const count = ref(0);
    // const double = computed(() => count.value * 2);
    // setTimeout(() => count.value++, 1000);
    // return { count, double };
    // -----------------------
    // const state = reactive({
    //   count: 1,
    //   double: computed(() => state.count * 2),
    // });
    // setTimeout(() => state.count++, 1000);
    // return state;
    // -----------------------
    // -----------------------
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
