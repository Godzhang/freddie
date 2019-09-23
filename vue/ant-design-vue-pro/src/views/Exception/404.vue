<template>
  <div>
    <Iconfont type="icon-404" style="font-size: 100px;"></Iconfont>
    <!-- <img :src="love" alt /> -->
    <Love />
  </div>
</template>

<script>
import Love from "@/assets/love.svg";

export default {
  data() {
    return {};
  },
  components: {
    Love
  }
};
</script>
