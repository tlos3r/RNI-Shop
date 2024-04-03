<script setup>
defineProps({
  msg: String,
  type: String,
  show: Boolean
})
</script>

<template>
  <div v-if="show" :class="`alert alert-${type} alert-dismissible`" role="alert">
    <div>{{ msg }}</div>
  </div>
</template>

<style scoped></style>
