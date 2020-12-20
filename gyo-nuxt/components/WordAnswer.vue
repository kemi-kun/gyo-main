<template>
  <div id="word-answer">
    <challenge-word :cword="tempCword"></challenge-word>
    <b-list-group id="answer-songs">
      <b-list-group-item v-for="song in songs" :id="song.id" :key="song.id">
        <p>{{ song.name }}</p>
        <p>By {{ song.artist }}</p>
      </b-list-group-item>
    </b-list-group>
    <b-button id='next-button' size='lg' href='#'>Next word</b-button>
  </div>
</template>

<script>
import ChallengeWord from '~/components/ChallengeWord.vue'
export default {
  components: { ChallengeWord },
  props: {
    cword: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      songs: [
        { id: 1, name: 'Song 1', artist: 'Artist' },
        { id: 2, name: 'Song 2', artist: 'Artist 2' }
      ],
      tempCword: this.cword
    }
  }
}
</script>

<style>
</style>
