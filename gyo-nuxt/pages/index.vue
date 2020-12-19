<template>
  <div id='index'>
    <nav-bar></nav-bar>
    <b-container>
      <h1>Welcome to Gyoza</h1>
      <div class='wrap-button'>
        <b-button v-if='!show' id='start-button' size='lg' v-on:click='show = true'>Start</b-button>
        <select-mode v-if='show'></select-mode>
      </div>
      <how-to-play></how-to-play>
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HowToPlay from '~/components/HowToPlay.vue'
import SelectMode from '~/components/SelectMode.vue'
export default {
  components: {
    NavBar,
    HowToPlay,
    SelectMode
  },
  data () {
    return { show: false }
  }
}
</script>

<style>
.wrap-button {
  display: flex;
  justify-content: center;
}
</style>
