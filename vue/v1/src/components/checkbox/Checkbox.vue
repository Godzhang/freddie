<template>
  <label>
    <span>
      <input v-if="group"
             type="checkbox"
             :disabled="disabled"
             :value="label"
             v-model="model"
             @change="change($event)">
      <input v-else
             type="checkbox"
             :disabled="disabled"
             :checked="currentValue"
             @change="change($event)">
    </span>
    <slot></slot>
  </label>
</template>
<script>
import { findComponentUpward } from 'utils/assist'

export default {
  name: 'iCheckbox',
  props: {
    label: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: false },
    value: { type: [String, Number, Boolean], default: false },
    trueValue: { type: [String, Number, Boolean], default: true },
    falseValue: { type: [String, Number, Boolean], default: false }
  },
  data () {
    return {
      model: [],
      group: false,
      parent: null,
      currentValue: this.value
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')

    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw 'Value should be trueValue or falseValue'
      }
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>
<style lang="scss">

</style>
