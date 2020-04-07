<template>
  <div>
    <div>search component</div>
    <ul>
      <li v-for="item in $store.state.city.list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  layout: 'search',
  async fetch({ store }) {
    const {
      data: { list }
    } = await axios.get('http://localhost:3000/city/list')
    store.commit('city/add', list)
  },
  data() {
    return {
      list: []
    }
  }
}
</script>
