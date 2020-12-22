<template>
  <div id='word-countdown'>
    <challenge-word :cword='tempCword'></challenge-word>
    <p>{{timerCountWord}}</p>
    <b-button id='answer-button' size='lg' href='enter-answer-form'>Answer</b-button>
  </div>
</template>

<script>
import ChallengeWord from '~/components/ChallengeWord.vue'
export default {
  components: {
    ChallengeWord
  },
  props: {
    cword: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      tempCword: this.cword,
      timerCountWord: 10
    }
  },
  methods: {
    countDownTimerWord () {
      if (this.timerCountWord > 0) {
        setTimeout(() => {
          this.timerCountWord -= 1
          this.countDownTimerWord()
        }, 1000)
      }
    },
    sendResult () {
      if (this.timerCountWord === 0) {
        this.$emit('send-result', 'true')
      }
    }
  },
  created () {
    this.countDownTimerWord()
  }
}
</script>

<style>

</style>
