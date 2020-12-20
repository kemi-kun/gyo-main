<template>
  <div id='word-countdown'>
    <challenge-word :cword='tempCword'></challenge-word>
    <timer-countdown :timer=timer></timer-countdown>
    <b-button id='answer-button' size='lg' href='enter-answer-form'>Answer</b-button>
  </div>
</template>

<script>
import TimerCountdown from '~/components/TimerCountdown.vue'
import ChallengeWord from '~/components/ChallengeWord.vue'
export default {
  components: {
    TimerCountdown,
    ChallengeWord
  },
  props: {
    cword: {
      type: String,
      required: true
    },
    timer: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      tempCword: this.cword
    }
  }
}
</script>

<style>

</style>
