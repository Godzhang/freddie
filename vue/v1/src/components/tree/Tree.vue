<template>
  <div>
    <TreeNode v-for="(item, index) in cloneData"
              :key="index"
              :data="item"
              :show-checkbox="showCheckbox">
    </TreeNode>
  </div>
</template>
<script>
import TreeNode from './Node'
import { deepCopy } from 'utils/assist'

export default {
  name: 'Tree',
  props: {
    data: { type: Array, default: () => [] },
    showCheckbox: { type: Boolean, default: false }
  },
  data () {
    return {
      cloneData: []
    }
  },
  created () {
    this.rebuildData()
  },
  watch: {
    data () {
      this.rebuildData
    }
  },
  methods: {
    rebuildData () {
      this.cloneData = deepCopy(this.data)
    },
    emitEvent (eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    }
  },
  components: {
    TreeNode
  }
}
</script>
<style lang="scss">

</style>
