<template>
  <div ref="home">
    <!-- <i-checkbox-group v-model="group">
      <i-checkbox label="zhangqi">zhangqi</i-checkbox>
      <i-checkbox label="zhaojinge">zhaojinge</i-checkbox>
      <i-checkbox label="sdofsdf">sdofsdf</i-checkbox>
      <i-checkbox label="sdfsd">sdfsd</i-checkbox>
    </i-checkbox-group>-->
    <div style="display: flex;justify-content:center;">
      <ColorPicker v-model="color"></ColorPicker>
    </div>
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
import ColorPicker from "../components/colorpicker/ColorPicker";
import A from "./A";
import B from "./B";
import C from "./C";

export default {
  name: "Home",
  data() {
    return {
      check: false,
      group: [],
      formValidate: {
        name: "",
        mail: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ]
      },
      color: "#f00"
    };
  },
  mounted() {
    // this.init();
    this.addComponent();
  },
  watch: {
    check(val) {
      console.log(val);
    },
    group(val) {
      console.log(val);
    }
  },
  methods: {
    init() {
      console.log(this);
    },
    addComponent() {}
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
    ColorPicker,
    A,
    B,
    C
  }
};
</script>
<style lang="scss" scoped>
</style>
