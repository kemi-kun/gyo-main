<template>
  <div id='index'>
    <b-container>
      <div class='title'>
        <h1>𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝔾𝕪𝕠𝕫𝕒</h1>
      </div>
      <div class='wrap-button'>
        <b-button v-if='!show' id='start-button' size='lg' v-on:click='show = true'>Start</b-button>
        <select-mode v-if='show'></select-mode>
      </div>
      <div class='blank-line'>
        <h1>    </h1>
      </div>
      <div class='how-to-play'>
        <how-to-play></how-to-play>
      </div>
    </b-container>
  </div>
</template>

<script>
import HowToPlay from '~/components/HowToPlay.vue'
import SelectMode from '~/components/SelectMode.vue'
export default {
  components: {
    HowToPlay,
    SelectMode
  },
  data () {
    return { show: false }
  }
}
</script>

<style>
.bar {
  height: 200px;
}
.title {
  display: flex;
  justify-content: center;
  --var-txt-color: #000000;
  color: var(--var-txt-color);
}
.wrap-button {
  display: flex;
  justify-content: center;
}
.blank-line {
  height: 75px;
}
.how-to-play {
  display: flex;
  justify-content: center;
  --var-txt-color: #000000;
  color: var(--var-txt-color);
}
</style>
