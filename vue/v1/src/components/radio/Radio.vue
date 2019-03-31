<template>
  <label>
    <span>
      <input v-if="group"
             type="radio"
             :name="name"
             :value="label"
             :disabled="disabled"
             v-model="model"
             @change="change($event)">
      <input v-else
             type="radio"
             :name="name"
             :value="label"
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
  name: 'iRadio',
  props: {
    value: { type: [Boolean, String, Number] },
    label: { type: [Boolean, String, Number], default: '' },
    name: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },
  data () {
    return {
      model: '',
      group: false,
      parent: null,
      currentValue: null
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'iRadioGroup')

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
    value () {
      this.updateModel()
    }
  },
  methods: {
    change (event) {
      if (this.disabled) return false

      let checked = event.target.checked
      this.currentValue = checked

      let value = event.target.value
      this.$emit('input', value)

      if (this.group) {
        this.parent.change(value)
      } else {
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    },
    updateModel () {
      this.currentValue = this.value === this.label
    }
  }
}
</script>
<style lang="scss">

</style>
