<template>
  <div id='table-leaderboard'>
    <h1>Leader Board</h1>
    <b-table striped hover :items="items"></b-table>
    <b-button id='exit' variant="danger" type='submit' href="/">Exit</b-button>
    <b-button id='next-round' variant="primary" type='submit'>Next round</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { Rank: 1, Name: 'Mo', Score: 4, Date: '12/12/2020' },
        { Rank: 2, Name: 'Mai', Score: 3, Date: '12/12/2020' },
        { Rank: 3, Name: 'Mos', Score: 2, Date: '12/12/2020' },
        { Rank: 4, Name: 'Bank', Score: 1, Date: '12/12/2020' },
        { Rank: 5, Name: 'Ding', Score: 0, Date: '12/12/2020' }
      ]
    }
  }
}
</script>

<style>
</style>
