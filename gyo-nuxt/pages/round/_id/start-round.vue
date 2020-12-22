<template>
  <div id='start-round'>
    <wait-round :timer=timerCount v-if='timerCount > 0'></wait-round>
    <word-countdown cword='Hate' v-else v-on:send-result="showResultData"></word-countdown>
    <enter-answer-form cword='Hate'></enter-answer-form>
    <word-answer cword='Hate'></word-answer>
  </div>
</template>

<script>
import WaitRound from '~/components/WaitRound.vue'
import WordCountdown from '~/components/WordCountdown.vue'
import EnterAnswerForm from '~/components/EnterAnswerForm.vue'
import WordAnswer from '~/components/WordAnswer.vue'
export default {
  components: {
    WaitRound,
    WordCountdown,
    EnterAnswerForm,
    WordAnswer
  },
  data () {
    return {
      timerCount: 3,
      showRound: true
    }
  },
  methods: {
    countDownTimer () {
      if (this.timerCount > 0) {
        setTimeout(() => {
          this.timerCount -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    showResultData () {
      console.log('Data received from child: ')
    }
  },
  created () {
    this.countDownTimer()
  }

}
</script>

<style>

</style>
