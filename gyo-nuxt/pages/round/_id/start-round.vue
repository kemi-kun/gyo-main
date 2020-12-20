<template>
  <div id='start-round'>
    <wait-round></wait-round>
    <word-countdown cword='Hate'></word-countdown>
    <enter-answer-form cword='Hate'></enter-answer-form>
  </div>
</template>

<script>
import WaitRound from '~/components/WaitRound.vue'
import WordCountdown from '~/components/WordCountdown.vue'
import EnterAnswerForm from '~/components/EnterAnswerForm.vue'
export default {
  components: {
    WaitRound,
    WordCountdown,
    EnterAnswerForm
  }
}
</script>

<style>

</style>
