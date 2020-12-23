<template>
  <div id='wait-room'>
    <nav-bar></nav-bar>
    <b-container>
      <wait-room-detail></wait-room-detail>
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import WaitRoomDetail from '~/components/WaitRoomDetail.vue'
export default {
  components: {
    WaitRoomDetail,
    NavBar
  }
}
</script>

<style>
</style>
