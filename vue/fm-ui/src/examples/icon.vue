<template>
  <div class="icon-test">
    <Icon name="delete" />
    <Icon name="delete" color="#08c" />
  </div>
</template>
<script>
import Icon from "../components/icon/main/icon";

export default {
  components: { Icon },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.icon-test {
  padding: 30px;
}
</style>
