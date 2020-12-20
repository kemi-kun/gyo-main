<template>
  <div id='timer-countdown'>
    <span>{{timer}}</span>
  </div>
</template>

<script>
export default {
  // emits: ['update:modelValue'],
  props: {
    timer: {
      type: Number,
      required: true
    }
  }
  // computed: {
  //   timerCount: {
  //     get () {
  //       return this.modelValue
  //     },
  //     set (value) {
  //       this.$emit('update:modelValue', value)
  //     }
  //   }
  // }
}
</script>

<style>

</style>
