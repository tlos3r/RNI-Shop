<script setup>
import { DefaultLayout } from '@/layout'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useDetailData } from '@/composable'
const route = useRoute()
const id = route.params.id
const product = ref()
const total = ref(1)
onBeforeMount(async () => {
  const { data } = await useDetailData('products', id)
  console.log(data)
  product.value = data
})
</script>

<template>
  <DefaultLayout>
    <h1 class="pt-5 text-center fw-bold">Toàn bộ sản phẩm hiện có</h1>

    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-5">
          <img :src="product.imageUrl" alt="" class="img-fluid" />
        </div>
        <div class="col-12 col-md-7">
          <span class="mb-5">{{ product.brand }}</span>
          <h1>{{ product.name }}</h1>
          <p>{{ product.desc }}</p>
          <h3 class="fw-bold">{{ `${product.price} VND` }}</h3>
          <div class="d-flex gap-2">
            <button class="btn btn-secondary" @click="total--" :disabled="total === 1">-</button>
            <input v-model="total" type="text" class="form-control w-25 fw-bold" readonly />
            <button class="btn btn-secondary" @click="total++">+</button>
          </div>

          <button class="btn btn-primary btn-lg mt-2">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped></style>
