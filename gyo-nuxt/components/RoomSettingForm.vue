<template>
  <div id='room-setting-form'>
    <div class='setting-form-title'>
      <h1>𝕊𝕖𝕥𝕥𝕚𝕟𝕘𝕤</h1>
    </div>
    <div id='form-fields'>
      <b-form id='form'>
        <div class='form-title'>
          <label class="mr-sm-2" for="inline-form-set-timmer">𝕋𝕚𝕞𝕖𝕣:</label>
        </div>
        <div class='placeholder'>
          <b-form-input id="inline-form-set-timmer" class="mb-2 mr-sm-2 mb-sm-0" placeholder="10"></b-form-input>
        </div>
        <div class='form-title'>
          <label class="mr-sm-2" for="inline-form-set-num_words">ℕ𝕦𝕞𝕓𝕖𝕣 𝕠𝕗 𝕨𝕠𝕣𝕕𝕤:</label>
        </div>
        <div class='placeholder'>
          <b-form-input id="inline-form-set-num_words" class="mb-2 mr-sm-2 mb-sm-0" placeholder="15"></b-form-input>
        </div>
        <div class='blank-line'>
          <h1>    </h1>
        </div>
        <div class='form-title'>
          <b-button variant="primary" type='submit'>Save</b-button>
        </div>
        <div class='blank-line'>
          <h1>    </h1>
        </div>
      </b-form>
      <div class='form-title'>
        <b-button variant="secondary" href='select-genre'>Back</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#form {
  display: flex;
  flex-direction: column;
}
.setting-form-title {
  display: flex;
  justify-content: center;
  --var-txt-color: #000000;
  color: var(--var-txt-color);
}
.form-title {
  display: flex;
  justify-content: center;
}
.placeholder {
  display: flex;
  align-self: center;
  width: 150px;
}
.blank-line {
  height: 5px;
}
</style>
