<template>
  <div id='genre-form'>
    <div class='genre-form-title'>
      <h1>𝕊𝕖𝕝𝕖𝕔𝕥 𝕥𝕙𝕖 𝕘𝕖𝕟𝕣𝕖</h1>
    </div>
    <div class='genre-form'>
      <a href='room-settings'>ℂ𝕙𝕒𝕟𝕘𝕖 𝕤𝕖𝕥𝕥𝕚𝕟𝕘</a>
    </div>
    <div class='genre-form'>
      <b-nav-form>
        <b-form-input class="mr-sm-2" placeholder="Username"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit" href='round/_id/start-round'>Enter</b-button>
      </b-nav-form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.genre-form-title {
  display: flex;
  justify-content: center;
  --var-txt-color: #000000;
  color: var(--var-txt-color);
}
.genre-form {
  display: flex;
  justify-content: center;
}
</style>
