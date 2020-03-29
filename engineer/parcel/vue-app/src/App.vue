<template>
  <div class="container">
    <div>{{ bundler }}</div>
    <i-button>ibutton</i-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bundler: "hello Parcel"
    };
  }
};
</script>

<style scoped>
.container {
  color: green;
}
</style>
