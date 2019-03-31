<template>
  <div>
    <Tree :data="data" :showCheckbox="true"></Tree>
  </div>
</template>
<script>
import Tree from '../components/tree/Tree'

export default {
  data () {
    return {
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    Tree
  }
}
</script>
