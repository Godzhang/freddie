<template>
  <div>
    <h3>具有校验数据功能的表单</h3>
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
    <button @click="handleReset()">重置</button>
    <!-- <A></A>
    <B></B> -->
    <C></C>
  </div>
</template>
<script>
import iForm from '../components/form/Form'
import iFormItem from '../components/form/FormItem'
import iInput from '../components/input/Input'
import iCheckbox from '../components/checkbox/Checkbox'
import iCheckboxGroup from '../components/checkbox/CheckboxGroup'
import iRadio from '../components/radio/Radio'
import iRadioGroup from '../components/radio/RadioGroup'
import A from './A'
import B from './B'
import C from './C'

export default {
  name: 'Home',
  data () {
    return {
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
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {},
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
    A,
    B,
    C
  }
}
</script>
<style lang="scss" scoped>

</style>
