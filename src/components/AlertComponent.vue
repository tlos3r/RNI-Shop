<script setup>
import { inject } from 'vue'

const alert = inject('alert')
</script>

<template>
  <div v-if="alert.show" :class="`alert alert-${alert.type} alert-dismissible`" role="alert">
    <div>{{ alert.msg }}</div>
  </div>
</template>

<style scoped></style>
