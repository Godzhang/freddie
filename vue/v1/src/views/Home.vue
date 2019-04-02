<template>
  <div>
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
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
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
