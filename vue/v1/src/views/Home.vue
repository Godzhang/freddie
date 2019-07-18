<template>
  <div ref="home">
    <i-form :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
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
    return {
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
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(this);
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
