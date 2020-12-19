<template>
  <div id='room-setting'>
    <nav-bar></nav-bar>
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

</style>
