<script setup>
import { UserTable } from '@/components'
import { useFetchCollection } from '@/composable'
import { AdminLayout } from '@/layout'
import { onMounted, ref } from 'vue'
const users = ref()

const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const { data } = await useFetchCollection('users')
  console.log(data.value)
  users.value = data.value
  loading.value = false
})
</script>

<template>
  <AdminLayout>
    <div class="container w-100 mt-5 position-relative">
      <h2 class="mb-3 text-center text-primary">Toàn bộ người dùng</h2>
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <UserTable v-else :data="users" />
    </div>
  </AdminLayout>
</template>

<style scoped></style>
