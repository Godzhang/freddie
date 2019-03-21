<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward } from 'utils/assist'

export default {
  name: 'iRadioGroup',
  props: {
    value: { type: [Boolean, String, Number], required: true }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  mounted () {
    this.updateModel(true)
  },
  watch: {
    value () {
      this.updateModel(true)
    }
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'iRadio')

      if (this.childrens) {
        let { value } = this
        this.childrens.forEach(child => {
          child.model = value

          if (update) {
            child.currentValue = child.label === value
            child.group = true
          }
        })
      }
    },
    change (data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('iFormItem', 'on-form-change', data)
    }
  }
}
</script>
<style lang="scss">

</style>
