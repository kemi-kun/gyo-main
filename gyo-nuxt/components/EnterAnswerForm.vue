<template>
  <div id='enter-answer-form'>
    <div id='word-timer-wraper'>
      <span>Word: {{ cword }}</span>
    </div>
    <div id='form-fields'>
      <b-form>
        <label class="mr-sm-2" for="song-name">Song name</label>
        <b-form-input id="song-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="enter song name"></b-form-input>
        <label class="mr-sm-2" for="inline-form-set-num_words">Artist name</label>
        <b-form-input id="inline-form-set-num_words" class="mb-2 mr-sm-2 mb-sm-0" placeholder="artist name"></b-form-input>
        <b-button v-on:click="$emit('back',  backStaus)" variant="primary">Submit answer</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backStaus: true
    }
  },
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
