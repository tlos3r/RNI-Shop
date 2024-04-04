<script setup>
import { ProductTable, AddProduct } from '@/components'
import { AdminLayout } from '@/layout'
</script>

<template>
  <AdminLayout>
    <div class="container w-100">
      <h2 class="mb-3 text-center text-primary">Toàn bộ sản phẩm</h2>
      <AddProduct />
      <ProductTable />
    </div>
  </AdminLayout>
</template>

<style scoped></style>
