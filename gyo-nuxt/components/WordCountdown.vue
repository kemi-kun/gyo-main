<template>
  <div id='word-countdown'>
    <challenge-word :cword='tempCword' v-if='!show'></challenge-word>
    <p v-if='!show'>{{timerCountWord}}</p>
    <b-button id='answer-button' size='lg' v-if='!show' v-on:click='show = true'>Answer</b-button>
    <enter-answer-form cword='Hate' v-if='show'></enter-answer-form>
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
      timerCountWord: 10,
      timerMessage: 0,
      show: false
    }
  },
  emits: ['time-up'],
  methods: {
    countDownTimerWord () {
      if (this.timerCountWord > 0) {
        setTimeout(() => {
          this.timerCountWord -= 1
          this.countDownTimerWord()
        }, 1000)
      } else if (this.timerCountWord === 0) {
        this.notify()
      }
    },
    notify () {
      console.log('sent ' + this.timerMessage)
      this.$emit('time-up', this.timerMessage)
    }
  },
  created () {
    this.countDownTimerWord()
  }
}
</script>

<style>

</style>
