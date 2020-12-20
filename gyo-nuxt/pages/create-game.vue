<template>
  <div id='create-game'>
    <nav-bar></nav-bar>
    <b-container>
      <create-game-form></create-game-form>
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import CreateGameForm from '~/components/CreateGameForm.vue'
export default {
  components: {
    CreateGameForm,
    NavBar
  }
}
</script>

<style>
</style>
