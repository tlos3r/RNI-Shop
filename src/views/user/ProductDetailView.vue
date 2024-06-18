<script setup>
import { DefaultLayout } from '@/layout'
import { ref, onBeforeMount, toRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDetailData } from '@/composable'
// import { useStorage } from '@vueuse/core'
import { useCartStore } from '@/stores/cart'
import { useStorage } from '@vueuse/core'

const route = useRoute()
const id = route.params.id
const product = ref()
// const cartStorage = useStorage('cart', sessionStorage)
const cartStore = useCartStore()
// const cartIndex = cartStorage.value.findIndex((item) => item.id === id)
const userInfo = useStorage('user', sessionStorage)
const router = useRouter()
const handleAddProduct = (productTemp) => {
  cartStore.addToCart(toRaw(productTemp))
  // console.log(product)
}
onBeforeMount(async () => {
  const { data } = await useDetailData('products', id)
  console.log({ ...data, id })
  product.value = { ...data, id }
})
</script>

<template>
  <DefaultLayout>
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
          <p class="fw-bold text-black fs-4 text-primary" v-if="!userInfo.username">
            Đăng nhập để có thể mua hàng
          </p>
          <button v-else class="btn btn-primary btn-lg mt-2" @click="handleAddProduct(product)">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped></style>
