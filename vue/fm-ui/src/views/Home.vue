<template>
  <div class="home">
    <component :is="componentName">123</component>
  </div>
</template>

<script>
import Layout from "@/examples/layout.vue";
import FForm from "@/examples/form.vue";

export default {
  name: "Home",
  data() {
    return {
      componentName: "FForm"
    };
  },
  components: { Layout, FForm }
};
</script>
