<template>
  <div id="app">
    <!-- <div>{{ count }}</div> -->
    <!-- <div>{{ double }}</div> -->
    <div>{{ count }}</div>
    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <button @click="add">点击</button>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  toRefs,
  toRef,
  computed,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from "@vue/composition-api";

export default {
  name: "App",
  // vue3.0的入口函数，beforeCreate之前进行触发
  setup() {
    // -----------------------
    // -----------------------
    // -----------------------
    // -----------------------
    // console.log("setup");
    // onBeforeMount(() => {
    //   console.log("onBeforeMount");
    // });
    // onMounted(() => {
    //   console.log("onMounted");
    // });
    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate");
    // });
    // onUpdated(() => {
    //   console.log("onUpdated");
    // });
    // const { x, y } = useMousePosition();
    // const count = ref(0);
    // const add = () => {
    //   count.value++;
    // };
    // return { count, add, x, y };
    // -----------------------
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
    // const count = ref(0);
    // const add = () => {
    //   count.value++;
    // };
    // return { count, add };
    // ---------副作用--------------
    // const count = ref(0);
    // const add = () => {
    //   count.value++;
    //   if (count.value === 5) {
    //     stopEffect();
    //     stop();
    //   }
    // };
    // const stopEffect = watchEffect(async (cancel) => {
    //   await new Promise((resolve) => {
    //     console.log("watch effect", count.value);
    //     resolve();
    //   });
    //   // 清除副作用，会在异步之前触发
    //   cancel(() => {
    //     console.log("onInvalidate");
    //   });
    // });
    // const stop = watch(count, (curr, prev) => {
    //   console.log("watch: ", curr, prev);
    // });
    // return { count, add };
  },
};
function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}
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
