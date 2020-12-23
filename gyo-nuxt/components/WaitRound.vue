<template>
  <div id='wait-round'>
    <h1>Round 1</h1>
    <timer-countdown :timer=timer></timer-countdown>
  </div>
</template>

<script>
import TimerCountdown from '~/components/TimerCountdown.vue'
export default {
  components: {
    TimerCountdown
  },
  props: {
    timer: {
      type: Number,
      required: true
    }
  },
  // emits: ['update:modelValue'],
  // computed: {
  //   timerCount: {
  //     get () {
  //       return this.modelValue
  //     },
  //     set (value) {
  //       this.$emit('update:modelValue', value)
  //     }
  //   }
  // },

  // props: {
  //   timer: {
  //     type: Number,
  //     required: true
  //   }
  // },
  data () {
    return {
      tempTimer: this.timer
    }
  }
}
</script>

<style>

</style>
