<template>
  <div id='select-genre'>
    <b-container>
      <genre-form></genre-form>
    </b-container>
  </div>
</template>

<script>
import GenreForm from '~/components/GenreForm.vue'
export default {
  components: {
    GenreForm
  }
}
</script>

<style>
.bar {
  height: 200px;
}
</style>
