<template>
  <div id='start-round'>
    <wait-round :timer=timerCount v-if='timerCount > 0'></wait-round>
    <word-countdown @time-up="handleTimeup($event)" cword='Hate' v-if='timerCount === 0 && fromChild > 0' ></word-countdown>
    <word-answer cword='Hate' v-if="fromChild === 0"></word-answer>
  </div>
</template>

<script>
import WaitRound from '~/components/WaitRound.vue'
import WordCountdown from '~/components/WordCountdown.vue'
import WordAnswer from '~/components/WordAnswer.vue'
export default {
  components: {
    WaitRound,
    WordCountdown,
    WordAnswer
  },
  data () {
    return {
      timerCount: 3,
      showRound: true,
      fromChild: 10
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
    handleTimeup (event) {
      this.fromChild = event
    }
  },
  created () {
    this.countDownTimer()
  }

}
</script>

<style>

</style>
