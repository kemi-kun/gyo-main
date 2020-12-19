<template>
  <div id='index'>
    <nav-bar></nav-bar>
    <b-container>
      <h1>Welcome to Gyoza</h1>
      <div class='wrap-button'>
        <b-button id='start-button' size='lg' href='/'>Start</b-button>
      </div>
      <how-to-play></how-to-play>
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HowToPlay from '~/components/HowToPlay.vue'
export default {
  components: {
    NavBar,
    HowToPlay
  }
}
</script>

<style>
.wrap-button {
  display: flex;
  justify-content: center;
}
</style>
