<template>
  <div ref="home">
    <button @click="onAlert()">alert</button>
  </div>
</template>
<script>
import Vue from "vue";
import code from "./default-code";

import iForm from "../components/form/Form";
import iFormItem from "../components/form/FormItem";
import iInput from "../components/input/Input";
import iCheckbox from "../components/checkbox/Checkbox";
import iCheckboxGroup from "../components/checkbox/CheckboxGroup";
import iRadio from "../components/radio/Radio";
import iRadioGroup from "../components/radio/RadioGroup";
import iDisplay from "../components/display/Display";
import TableRender from "../components/table-render/Table";
import A from "./A";
import B from "./B";
import C from "./C";

export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    onAlert() {
      this.$Alert.info({ content: "jdoisfj" });
    }
  },
  components: {
    iForm,
    iFormItem,
    iInput,
    iCheckbox,
    iCheckboxGroup,
    iRadio,
    iRadioGroup,
    iDisplay,
    TableRender,
    A,
    B,
    C
  }
};
</script>
<style lang="scss" scoped>
</style>
