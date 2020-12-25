<template>
  <div id='room-settings'>
    <room-setting-form></room-setting-form>
  </div>
</template>

<script>
import RoomSettingForm from '~/components/RoomSettingForm.vue'
export default {
  components: {
    RoomSettingForm
  }
}
</script>

<style>
.bar {
  height: 150px;
}
</style>
