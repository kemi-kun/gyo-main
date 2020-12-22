<template>
  <div id='set-user-name'>
    <div  class='setting-username-title'>
      <h1>𝕊𝕖𝕥 𝕦𝕤𝕖𝕣𝕟𝕒𝕞𝕖</h1>
    </div>
    <div  class='setting-username-form' id='username-form'>
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
.setting-username-title {
  display: flex;
  justify-content: center;
  --var-txt-color: #000000;
  color: var(--var-txt-color);
}
.setting-username-form {
  display: flex;
  justify-content: center;
}
</style>
