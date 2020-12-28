<template>
  <div id='set-username'>
    <b-container>
      <usename-form></usename-form>
    </b-container>
  </div>
</template>

<script>
import UsenameForm from '~/components/UsenameForm.vue'
export default {
  components: { UsenameForm }
}
</script>

<style>
.bar {
  height: 200px;
}
</style>
