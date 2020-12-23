<template>
  <div id='join-game'>
    <nav-bar></nav-bar>
    <b-container>
      <select-join></select-join>
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import SelectJoin from '~/components/SelectJoin.vue'
export default {
  components: {
    SelectJoin,
    NavBar
  }
}
</script>

<style>
</style>
