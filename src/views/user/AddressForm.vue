<script setup>
import { useCartStore } from '@/stores/cart'
import { useStorage } from '@vueuse/core'
import { ref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useAddData } from '@/composable'
import { Timestamp } from 'firebase/firestore'
import { toast } from 'vue3-toastify'
const cartStore = useCartStore()
cartStore.calculateTotal()
watch(cartStore, () => {
  cartStore.calculateTotal()
})
const router = useRouter()
const userInfo = useStorage('user', sessionStorage)
watchEffect(() => {
  if (!userInfo.value.username) {
    router.push({ path: '/auth/login' })
  }
})
const customerInfo = ref({
  name: '',
  phone: 0,
  address: ''
})
const loading = ref(false)
const handleSubmitInfo = async () => {
  loading.value = true
  const { docRef } = await useAddData('bills', {
    name: customerInfo.value.name,
    phone: customerInfo.value.phone,
    address: customerInfo.value.address,
    products: cartStore.cart,
    total: cartStore.cartTotalAmount,
    createdAt: Timestamp.now().toDate()
  })
  if (docRef) {
    loading.value = false
    toast.success(
      'Hệ thông đã lưu thông tin của bạn hãy kiểm tra điện thoại để nghe thông tin liên quan đến đơn hàng'
    )
    customerInfo.value.address = ''
    customerInfo.value.name = ''
    customerInfo.value.phone = 0
    cartStore.clearCart()
  } else {
    loading.value = false
    toast.error('Có lỗi gì đó đã xảy ra !')
  }
}
</script>

<template>
  <!-- Modal trigger button -->
  <button
    type="button"
    class="btn btn-info fw-bold text-white w-100"
    data-bs-toggle="modal"
    data-bs-target="#checkout"
  >
    Thanh toán
  </button>

  <div
    class="modal fade"
    id="checkout"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalCheckOut"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalCheckOut">Điền thông tin nhận hàng của bạn</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="handleSubmitInfo">
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="form-label">Tên của bạn</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                aria-describedby="helpId"
                placeholder="Nguyễn Duy Anh"
                required
                v-model="customerInfo.name"
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Địa chỉ </label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="address"
                aria-describedby="helpId"
                placeholder="số nhà, ngõ, xã, huyện/quận, thành phố"
                required
                v-model="customerInfo.address"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Số điện thoại</label>
              <input
                type="number"
                class="form-control"
                name="phone"
                id="phone"
                aria-describedby="helpId"
                placeholder="nhập số điện thoại của bạn"
                required
                v-model="customerInfo.phone"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="submit" class="btn btn-primary">
              <div class="spinner-grow" v-if="loading" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <span v-else>Xác nhận</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
