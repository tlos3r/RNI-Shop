<script setup>
import { SideBar } from '@/components'
</script>

<template>
  <div class="d-flex flex-nowrap vh-100 gap-1">
    <SideBar />
    <slot></slot>
  </div>
</template>

<style scoped></style>
