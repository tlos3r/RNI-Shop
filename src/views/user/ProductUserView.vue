<script setup>
import { useFetchCollection } from '@/composable'
import { DefaultLayout } from '@/layout'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { onMounted, ref, watch, toRaw } from 'vue'
const store = useProductStore()
const cartStore = useCartStore()
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const { data } = await useFetchCollection('products')
  store.storeProduct(data.value)
  products.value = store.products
  loading.value = false
})
const products = ref()
function shortenText(text, n) {
  if (text.length > n) {
    return text.substring(0, n).concat('...')
  }
  return text
}
const sortType = ref('')

const handleAddProduct = (product) => {
  cartStore.addToCart(product)
}
watch(
  sortType,
  () => {
    store.sortProduct(toRaw(store.productsStore), sortType.value)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <DefaultLayout>
    <h1 class="pt-5 text-center fw-bold">Toàn bộ sản phẩm hiện có</h1>
    <div class="container py-5">
      <div class="d-flex justify-content-end">
        <div class="mb-3">
          <select class="form-select form-select-lg" name="sorting" id="sorting" v-model="sortType">
            <option selected disabled value="">Chọn kiểu sắp xếp</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="highest-price">Giá giảm dần</option>
            <option value="lowest-price">Giá tăng dần</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div v-for="product in store.productsStore" :key="product.id" class="col-12 col-md-3">
          <div class="d-flex justify-content-center align-items-center flex-column gap-2 m-4">
            <RouterLink :to="`/products/${product.id}`">
              <img :src="product.imageUrl" class="img-thumbnail" alt="" />
            </RouterLink>
            <span class="opacity-75 fw-semibold">{{ product.brand }}</span>
            <RouterLink
              class="link-dark link-underline-opacity-0 fw-bold"
              :to="`/products/${product.id}`"
              >{{ shortenText(product.name, 20) }}</RouterLink
            >
            <p>{{ `${product.price} VNĐ` }}</p>
            <button class="w-100 btn btn-primary" @click="handleAddProduct(toRaw(product))">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped></style>
