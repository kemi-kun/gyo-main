<template>
  <div id='room-setting-form'>
    <h1>Settings</h1>
    <div id='form-fields'>
      <b-form>
        <label class="mr-sm-2" for="inline-form-set-timmer">Timer</label>
        <b-form-input id="inline-form-set-timmer" class="mb-2 mr-sm-2 mb-sm-0" placeholder="10"></b-form-input>
        <label class="mr-sm-2" for="inline-form-set-num_words"># words</label>
        <b-form-input id="inline-form-set-num_words" class="mb-2 mr-sm-2 mb-sm-0" placeholder="15"></b-form-input>
        <b-button variant="primary" type='submit'>Save</b-button>
      </b-form>
      <b-button variant="secondary" href='select-genre'>Back</b-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
