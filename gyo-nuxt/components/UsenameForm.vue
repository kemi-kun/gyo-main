<template>
  <div id='set-user-name'>
    <h1>Set username</h1>
    <div id='username-form'>
      <b-nav-form>
        <b-form-input class="mr-sm-2" placeholder="Username"></b-form-input>
        <b-button
          v-if='!showCreate'
          variant="outline-success"
          class="my-2 my-sm-0"
          type="submit"
          href='create-game'
          v-on:click='showCreate = true'>
          Enter
      </b-button>
        <b-button v-if='showCreate' variant="outline-success" class="my-2 my-sm-0" type="submit" href='select-genre'>Enter</b-button>
      </b-nav-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showCreate: false
    }
  }
}
</script>

<style>

</style>
