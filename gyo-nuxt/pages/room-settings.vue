<template>
  <div id='room-settings'>
    <div class='bar'>
      <nav-bar></nav-bar>
    </div>
    <room-setting-form></room-setting-form>
  </div>
</template>

<script>
import RoomSettingForm from '~/components/RoomSettingForm.vue'
import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    RoomSettingForm,
    NavBar
  }
}
</script>

<style>
.bar {
  height: 150px;
}
</style>
