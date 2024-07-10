<script setup>
import { useFetchCollection } from '@/composable'
import { DefaultLayout } from '@/layout'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { onMounted, ref, watch, toRaw } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
const store = useProductStore()
const cartStore = useCartStore()
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const { data } = await useFetchCollection('products')
  store.storeProduct(data.value)
  loading.value = false
})
function shortenText(text, n) {
  if (text.length > n) {
    return text.substring(0, n).concat('...')
  }
  return text
}
const sortType = ref('')
const userInfo = useStorage('user', sessionStorage)
const router = useRouter()
const search = ref('')

const handleAddProduct = (product) => {
  if (!userInfo.value.username) {
    router.push({ path: '/auth/login' })
  } else cartStore.addToCart(product)
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
      <div class="d-flex justify-content-between">
        <div class="input-group input-group-sm mb-3 w-50">
          <span class="input-group-text" id="inputGroup-sizing-sm"
            ><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
              />
            </svg>
          </span>

          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="search"
            @keyup="store.searchProduct(search)"
          />
        </div>

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
        <div class="col-12 d-flex justify-content-center" v-if="loading">
          <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-dasharray="15"
              stroke-dashoffset="15"
              stroke-linecap="round"
              stroke-width="2"
              d="M12 3C16.9706 3 21 7.02944 21 12"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
              <animateTransform
                attributeName="transform"
                dur="1.5s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </path>
          </svg>
        </div>
        <div v-if="store.filterProducts.length <= 0">
          <p class="text-center text-danger fw-bold fs-5">Không có sản phẩm nào cả</p>
        </div>
        <div
          v-else
          v-for="product in store.filterProducts"
          :key="product.id"
          class="col-12 col-md-3"
        >
          <div class="d-flex justify-content-center align-items-center flex-column gap-2 m-4">
            <RouterLink :to="`/products/${product.id}`">
              <img :src="product.imageUrl" class="img-thumbnail" alt="" />
            </RouterLink>
            <span class="opacity-75 fw-semibold">{{ product.brand }}</span>
            <RouterLink
              class="link-dark link-underline-opacity-0 fw-bold"
              :to="`/products/${product.id}`"
              >{{ shortenText(product.name, 25) }}</RouterLink
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
