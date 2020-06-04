<template>
  <div class="button-test">
    <div class="button-type">
      <Button>Default Button</Button>
      <Button type="primary">Default Button</Button>
      <Button type="success">Default Button</Button>
      <Button type="info">Default Button</Button>
      <Button type="warning">Default Button</Button>
      <Button type="danger">Default Button</Button>
    </div>
  </div>
</template>
<script>
import Button from "../components/button/button";

export default {
  components: { Button },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.button-test {
  padding: 30px;
}
</style>