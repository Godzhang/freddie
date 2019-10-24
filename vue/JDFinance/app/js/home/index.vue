<template>
  <div>
    <Heador />
    <Slider />
    <Novice />
  </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./hslider.vue"
import Novice from "./novice.vue"

export default {
    components: {
        Heador,
        Slider,
        Novice,
    },
    data() {
        return {}
  },
}
</script>

<style lang="scss">
</style>
