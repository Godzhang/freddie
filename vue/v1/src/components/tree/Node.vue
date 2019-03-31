<template>
  <ul class="tree-ur">
    <li class="tree-li">
      <span class="tree-expand" @click="handelExpand()">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>

      <iCheckbox v-if="showCheckbox"
                 :value="data.checked"
                 @input="handleCheck(...arguments)">
      </iCheckbox>

      <span>{{ data.title }}</span>

      <template v-if="data.expand">
        <TreeNode v-for="(item, index) in data.children"
                  :key="index"
                  :data="item"
                  :showCheckbox="showCheckbox">
        </TreeNode>
      </template>
    </li>
  </ul>
</template>
<script>
import { findComponentUpward } from 'utils/assist'

import iCheckbox from '../checkbox/Checkbox'

export default {
  name: 'TreeNode',
  props: {
    data: { type: Object, default: () => {} },
    showCheckbox: { type: Boolean, default: false }
  },
  data () {
    return {
      tree: findComponentUpward(this, 'Tree')
    }
  },
  watch: {
    'data.children': {
      handler (data) {
        if (data) {
          const checkedAll = !data.some(item => !item.checked)
          this.$set(this.data, 'checked', checkedAll)
        }
      },
      deep: true
    }
  },
  methods: {
    handelExpand () {
      this.$set(this.data, 'expand', !this.data.expand)

      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    },
    handleCheck (checked) {
      this.updateTreeDown(this.data, checked)

      if (this.tree) {
        this.tree.emitEvent('on-check-change', this.data)
      }
    },
    updateTreeDown (data, checked) {
      this.$set(data, 'checked', checked)

      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTreeDown(item, checked)
        })
      }
    }
  },
  components: {
    iCheckbox
  }
}
</script>
<style lang="scss">
.tree-ui, .tree-li {
  list-style: none;
  padding-left: 10px;
}
.tree-expand {
  cursor: pointer;
}
</style>
