<template>
  <div id='wait-room-detail>'>
    <h1>Game : {{pin}}</h1>
    <h2>Players</h2>
    <p v-for='player in players' :key="player.name">
      {{player.name}}
    </p>
    <b-button variant="outline-success" class="my-2 my-sm-0" type="submit" href='select-genre'>Start</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      players: [
        { name: 'Mo' },
        { name: 'Mai' },
        { name: 'Mos' },
        { name: 'Bank' },
        { name: 'Ding' }
      ],
      pin: '9870',
      password: '3456'
    }
  }
}
</script>

<style>
</style>
