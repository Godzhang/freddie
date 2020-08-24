<template>
  <div id="wrap">
    <div class="box">
      <RollNotification :notifications="notifications" />
    </div>
  </div>
</template>
<script>
import RollNotification from "../components/roll-notification/RollNotification";
export default {
  data() {
    return {
      notifications: [
        { text: "重要通知", interval: 5000 },
        {
          text:
            "曼联2-2遭南安普顿绝平曼联2-2遭南安普顿绝平曼联2-2遭南安普顿绝平",
          interval: 5000
        },
        {
          text: "曼联2-2遭南安普顿绝平",
          interval: 10000
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onClick() {}
  },
  components: { RollNotification }
};
</script>
<style lang="scss" scoped>
.box {
  width: 400px;
}
</style>
