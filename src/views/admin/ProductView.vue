<script setup>
import { onMounted, ref } from 'vue'
import { ProductTable } from '@/components'
import { AdminLayout } from '@/layout'
import { useFetchCollection } from '@/composable/fetchCollection'
import { useProductStore } from '@/stores/product'
const products = ref()
const store = useProductStore()
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const { data } = await useFetchCollection('products')
  console.log(data.value)
  store.storeProduct(data.value)
  products.value = data.value
  loading.value = false
})
</script>

<template>
  <AdminLayout>
    <div class="container w-100 mt-5 position-relative">
      <h2 class="mb-3 text-center text-primary">Toàn bộ sản phẩm</h2>

      <!-- loading state via #fallback slot -->
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <ProductTable v-else :data="store.productsStore" />
    </div>
  </AdminLayout>
</template>

<style scoped></style>
