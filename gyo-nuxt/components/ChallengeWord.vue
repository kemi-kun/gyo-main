<template>
  <div id='challenge-word'>
    <h4>Word</h4>
    <h1 id='word'>
      {{ cword }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    cword: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
