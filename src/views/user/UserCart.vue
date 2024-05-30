<script setup>
import { DefaultLayout } from '@/layout'
import { useCartStore } from '@/stores/cart'
import { useStorage } from '@vueuse/core'
import { watch, watchEffect } from 'vue'
import { AddressForm } from '@/views'
import { useRouter } from 'vue-router'
const cartStorage = useStorage('cart', sessionStorage)
const cartStore = useCartStore()
// const total = cartStore.c
cartStore.calculateTotal()
watch(cartStorage, () => {
  cartStore.calculateTotal()
})
const router = useRouter()
const userInfo = useStorage('user', sessionStorage)
watchEffect(() => {
  if (!userInfo.value.username) {
    router.push({ path: '/auth/login' })
  }
})
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <h2 class="mb-3 text-primary">Giỏ hàng</h2>
      <button
        v-if="cartStorage.length > 0"
        @click="cartStore.clearCart()"
        type="button"
        class="btn btn-danger fw-bold text-white"
      >
        Xoá toàn bộ giỏ hàng
      </button>
      <h4 v-if="cartStorage.length <= 0" class="text-center">Bạn chưa cho gì vào giỏ hàng</h4>
      <div v-else class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartStorage" :key="item.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.buyCount }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex flex-column justify-content-end align-items-end gap-3">
        <div class="p-3 border border-2 border-secondary-subtle rounded-2 bg-body-tertiary">
          <p class="fs-3">
            Tổng tiền : <B>{{ cartStore.cartTotalAmount }}</B> VNĐ
          </p>
          <AddressForm />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped></style>
