<template>
  <input class="i-input"
         type="text"
         :value="currentValue"
         @input="handleInput($event)"
         @blur="handleBlur()">
</template>
<script>
export default {
  name: 'iInput',
  props: {
    value: { type: String, default: '' }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput (event) {
      let value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handleBlur () {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
    }
  }
}
</script>
<style lang="scss">
.i-input {
  height: 24px;
  line-height: 24px;
  padding: 2px 5px;
  border: 1px solid #dcdfe6;
  outline: none;
}
</style>
