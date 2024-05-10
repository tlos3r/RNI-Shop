<script setup>
import { onMounted, ref } from 'vue'
import { BillTable } from '@/components'
import { AdminLayout } from '@/layout'
import { useFetchCollection } from '@/composable/fetchCollection'
const bill = ref()
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const { data } = await useFetchCollection('bills')
  console.log(data.value)
  bill.value = data.value
  loading.value = false
})
</script>

<template>
  <AdminLayout>
    <div class="container w-100 mt-5 position-relative">
      <h2 class="mb-3 text-center text-primary">Toàn bộ đơn order</h2>
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <BillTable v-else :data="bill" />
    </div>
  </AdminLayout>
</template>

<style scoped></style>
