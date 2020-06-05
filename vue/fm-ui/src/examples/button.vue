<template>
  <div class="button-test">
    <div class="button-type button-box">
      <Button class="item">Default Button</Button>
      <Button class="item" type="primary">primary Button</Button>
      <Button class="item" type="success">success Button</Button>
      <Button class="item" type="info">info Button</Button>
      <Button class="item" type="warning">warning Button</Button>
      <Button class="item" type="danger">danger Button</Button>
    </div>
    <div class="button-size button-box">
      <Button class="item" size="large">large Button</Button>
      <Button class="item">medium Button</Button>
      <Button class="item" size="small">small Button</Button>
      <Button class="item" size="mini">mini Button</Button>
    </div>
    <div class="button-disabled button-box">
      <Button :disabled="true" class="item">Default Button</Button>
      <Button :disabled="true" class="item" type="primary"
        >primary Button</Button
      >
      <Button :disabled="true" class="item" type="success"
        >success Button</Button
      >
      <Button :disabled="true" class="item" type="info">info Button</Button>
      <Button :disabled="true" class="item" type="warning"
        >warning Button</Button
      >
      <Button :disabled="true" class="item" type="danger">danger Button</Button>
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
.button-box {
  margin-bottom: 20px;
  .item + .item {
    margin-left: 10px;
  }
}
</style>
