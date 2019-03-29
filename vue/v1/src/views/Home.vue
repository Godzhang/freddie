<template>
  <div>
    <!-- <button @click="$router.push('/tree')">tree</button> -->

    <!-- <button @click="$router.push('/tableslot')">tableslot</button> -->
    <!-- <TableRender ref="table" :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="name">
        <input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="age">
        <input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="birthday">
        <input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ getBirthday(row.birthday) }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="address">
        <input type="text" v-model="editAddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <button @click="handleSave(index)">保存</button>
          <button @click="editIndex = -1">取消</button>
        </div>
        <div v-else>
          <button @click="handleEdit(row, index)">操作</button>
        </div>
      </template>
    </TableRender> -->

    <!-- <button @click="handleOpen1()">打开提示 1</button>
    <button @click="handleOpen2()">打开提示 2</button> -->

    <!-- <h3>动态渲染 .vue 文件的组件 —— display</h3>
    <div style="padding: 20px;border: 1px dashed #ccc;">
      <iDisplay :code="code"></iDisplay>
    </div> -->

    <!-- <h3>具有校验数据功能的表单</h3>
    <iForm ref="form" :model="formValidate" :rules="ruleValidate">
      <iFormItem label="用户名" prop="name">
        <iInput v-model="formValidate.name"></iInput>
      </iFormItem>
      <iFormItem label="邮箱" prop="email">
        <iInput v-model="formValidate.email"></iInput>
      </iFormItem>
      <iFormItem label="记住密码" prop="memory">
        <iCheckbox v-model="formValidate.memory">是否记住密码</iCheckbox>
      </iFormItem>
      <iFormItem label="选择选项" prop="list">
        <iCheckboxGroup v-model="formValidate.list">
          <iCheckbox label="a">a</iCheckbox>
          <iCheckbox label="b">b</iCheckbox>
        </iCheckboxGroup>
      </iFormItem>
      <iFormItem label="唯一项" prop="only">
        <iRadio v-model="formValidate.only" label="a" @on-change="onRadioChange(...arguments)">aaa</iRadio>
        <iRadio v-model="formValidate.only" label="b" @on-change="onRadioChange(...arguments)">bbb</iRadio>
        <iRadio v-model="formValidate.only" label="c" @on-change="onRadioChange(...arguments)">ccc</iRadio>
      </iFormItem>
      <iFormItem label="主唱" prop="queen">
        <iRadioGroup v-model="formValidate.queen" @on-change="onRadioGroupChange(...arguments)">
          <iRadio label="freddie">freddie</iRadio>
          <iRadio label="may">may</iRadio>
          <iRadio label="deacon">deacon</iRadio>
          <iRadio label="taylor">taylor</iRadio>
        </iRadioGroup>
      </iFormItem>
    </iForm>
    <button @click="test()">测试</button>
    <button @click="handleSubmit()">提交</button>
    <button @click="handleReset()">重置</button> -->
    <!-- <A></A>
    <B></B> -->
    <!-- <C></C> -->
  </div>
</template>
<script>
import code from './default-code'

import iForm from '../components/form/Form'
import iFormItem from '../components/form/FormItem'
import iInput from '../components/input/Input'
import iCheckbox from '../components/checkbox/Checkbox'
import iCheckboxGroup from '../components/checkbox/CheckboxGroup'
import iRadio from '../components/radio/Radio'
import iRadioGroup from '../components/radio/RadioGroup'
import iDisplay from '../components/display/Display'
import TableRender from '../components/table-render/Table'
import A from './A'
import B from './B'
import C from './C'

export default {
  name: 'Home',
  data () {
    return {
      columns: [
        {
          title: '姓名',
          slot: 'name'
        },
        {
          title: '年龄',
          slot: 'age'
        },
        {
          title: '出生日期',
          slot: 'birthday'
        },
        {
          title: '地址',
          slot: 'address'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      data: [],
      code,
      formValidate: {
        name: '',
        email: '',
        memory: false,
        list: [],
        only: 'a',
        queen: 'freddie'
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        list: [
          { type: 'array', required: true, message: '选项不能为空', trigger: 'change' }
        ]
      },
      editName: '',  // 第一列输入框
      editAge: '',  // 第二列输入框
      editBirthday: '',  // 第三列输入框
      editAddress: '',  // 第四列输入框
      editIndex: -1
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.data = [{
        name: '王小明',
        age: 18,
        birthday: '919526400000',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '张小刚',
        age: 25,
        birthday: '696096000000',
        address: '北京市海淀区西二旗'
      },
      {
        name: '李小红',
        age: 30,
        birthday: '563472000000',
        address: '上海市浦东新区世纪大道'
      },
      {
        name: '周小伟',
        age: 26,
        birthday: '687024000000',
        address: '深圳市南山区深南大道'
      }]
    },
    test () {
      this.formValidate.queen = 'taylor'
      // this.formValidate.memory = this.formValidate.memory === 'a' ? 'b' : 'a'
    },
    handleSubmit () {
      console.log(this.formValidate)
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('提交成功')
        } else {
          console.log('表单验证失败')
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields()
    },
    onRadioChange (value) {
      console.log(value)
    },
    onRadioGroupChange (value) {
      console.log(value)
    },
    handleOpen1 () {
      this.$Alert.info({
        content: '我是提示信息 1'
      })
    },
    handleOpen2 () {
      this.$Alert.info({
        content: '我是提心信息 2',
        duration: 3
      })
    },
    handleEdit (row, index) {
      this.editName = row.name;
      this.editAge = row.age;
      this.editAddress = row.address;
      this.editBirthday = row.birthday;
      this.editIndex = index;
    },
    handleSave (index) {
      this.data[index].name = this.editName;
      this.data[index].age = this.editAge;
      this.data[index].birthday = this.editBirthday;
      this.data[index].address = this.editAddress;
      this.editIndex = -1;
    },
    getBirthday (birthday) {
      const date = new Date(parseInt(birthday));
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}-${month}-${day}`;
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
}
</script>
<style lang="scss" scoped>

</style>
