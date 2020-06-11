<template>
  <div class="button-test">
    <div class="button-type button-box">
      <Button class="item" @click="onClick">Default</Button>
      <Button class="item" type="primary">primary</Button>
      <Button class="item" type="success">success</Button>
      <Button class="item" type="info">info</Button>
      <Button class="item" type="warning">warning</Button>
      <Button class="item" type="danger">danger</Button>
    </div>
    <div class="button-size button-box">
      <Button class="item" size="large">large</Button>
      <Button class="item">medium</Button>
      <Button class="item" size="small">small</Button>
      <Button class="item" size="mini">mini</Button>
    </div>
    <div class="button-disabled button-box">
      <Button :disabled="true" class="item" @click="onClick">Default</Button>
      <Button :disabled="true" class="item" type="primary">primary</Button>
      <Button :disabled="true" class="item" type="success">success</Button>
      <Button :disabled="true" class="item" type="info">info</Button>
      <Button :disabled="true" class="item" type="warning">warning</Button>
      <Button :disabled="true" class="item" type="danger">danger</Button>
    </div>
    <div class="button-round button-box">
      <Button class="item" :round="true">Default</Button>
      <Button class="item" :round="true" type="primary">primary</Button>
      <Button class="item" :round="true" type="success">success</Button>
      <Button class="item" :round="true" type="info">info</Button>
      <Button class="item" :round="true" type="warning">warning</Button>
      <Button class="item" round type="danger">danger</Button>
    </div>
    <div class="button-text button-box">
      <Button class="item" type="text">Default</Button>
      <Button class="item" type="text" disabled>Default</Button>
    </div>
    <div class="button-circle button-box">
      <Button class="item" circle>cc</Button>
      <Button class="item" type="primary" circle>cc</Button>
    </div>
  </div>
</template>
<script>
import Button from "../components/button/button";

export default {
  components: { Button },
  data() {
    return {};
  },
  methods: {
    onClick(e) {
      console.log(e);
    }
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
