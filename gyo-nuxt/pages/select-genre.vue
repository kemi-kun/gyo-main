<template>
  <div id='select-genre'>
    <div class='bar'>
      <nav-bar></nav-bar>
    </div>
    <b-container>
      <genre-form></genre-form>
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import GenreForm from '~/components/GenreForm.vue'
export default {
  components: {
    NavBar,
    GenreForm
  }
}
</script>

<style>
.bar {
  height: 200px;
}
</style>
