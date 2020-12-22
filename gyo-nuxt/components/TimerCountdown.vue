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
}
</script>

<style>

</style>
