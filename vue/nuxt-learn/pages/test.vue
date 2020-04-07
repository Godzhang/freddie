<template>
  <div class="test">
    <div>{{ name }}</div>
    <!--<div>{{ $store.state.counter }}</div>-->
  </div>
</template>
<script>
// import { mapState } from "vuex";

export default {
  asyncData(ctx) {
    console.log("asyncData");
    // console.log("ctx.app ", ctx.app);
    // console.log("ctx.isClient ", process.client);
    // console.log("ctx.isServer ", process.server);
    // console.log("ctx.isStatic ", process.static);
    // console.log("ctx.isDev ", ctx.isDev);
    // console.log("ctx.isHMR ", ctx.isHMR);
    // console.log("ctx.route ", ctx.route);
    // console.log("ctx.store ", ctx.store);
    // console.log("ctx.env ", ctx.env);
    // console.log("ctx.params ", ctx.params);
    // console.log("ctx.query ", ctx.query);
    // console.log("ctx.req ", ctx.req);
    // console.log("ctx.res ", ctx.res);
    // console.log("ctx.redirect ", ctx.redirect);
    // console.log("ctx.error ", ctx.error);
    // console.log("ctx.nuxtState ", ctx.nuxtState);
    // console.log("ctx.beforeNuxtRender ", ctx.beforeNuxtRender);
    return { name: "zhangqi" };
  },
  async fetch({ store, params }) {
    console.log("fetch");
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "my custom description"
        }
      ]
    };
  },
  // middleware: "test-middleware",
  data() {
    return {
      title: "test"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
  }
};
</script>
