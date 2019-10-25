<template>
  <Panel title :class="$style.panel">
    <section :class="$style.content"></section>
  </Panel>
</template>
<script>
import Panel from "../core/panel.vue";

export default {
  data() {
    return {};
  },
  components: {
    Panel
  }
};
</script>
<style lang="scss" module>
@import "../../css/element.scss";

.panel {
  @include panel;
}
</style>