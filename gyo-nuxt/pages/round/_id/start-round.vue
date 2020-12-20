<template>
  <div id='start-round'>
    <wait-round :timer=timerCount>></wait-round>
    <word-countdown cword='Hate' v-if='timerCount === 0'></word-countdown>
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
      timerCount: 3
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
    }
  },
  created () {
    this.countDownTimer()
  }

}
</script>

<style>

</style>
