<template>
  <div>
    <el-table :data="tableData" :row-style="{height: '10px'}" :cell-style="{padding: '0px 0'}">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
<script>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {}
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
