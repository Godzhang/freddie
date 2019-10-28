<template>
  <div>
    <h1 :class="$style.h1">
      home
      <div :class="$style.title">title</div>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" module>
.h1 {
  font-size: 80px !important;
  color: #f00;
  .title {
    color: yellow;
  }
}
</style>
