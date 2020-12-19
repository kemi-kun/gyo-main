<template>
  <div id='select-genre'>
    <nav-bar></nav-bar>
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

</style>
