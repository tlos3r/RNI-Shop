<script setup>
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
const userInfo = useStorage('user', sessionStorage)
const signOut = () => {
  userInfo.value = null
  toast.success('Đăng xuất thành công !')
}
const cart = useStorage('cart', sessionStorage)
const router = useRouter()
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/images/Logo_RNI.webp" width="100" height="100" alt="" />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" to="/">Trang chủ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" to="/products">Sản phẩm</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" to="/privacy">Chính sách</RouterLink>
          </li>
        </ul>

        <div v-if="userInfo && userInfo.username" class="dropdown px-md-3">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Xin chào, {{ userInfo.username }} !
          </button>
          <ul class="dropdown-menu">
            <li>
              <a @click="router.push({ name: 'cart' })" class="dropdown-item" href="#">
                Giỏ hàng
                <span v-if="cart.length" class="badge text-bg-secondary">{{ cart.length }}</span>
              </a>
            </li>
            <li @click.prevent="signOut"><a class="dropdown-item" href="#">Đăng xuất</a></li>
          </ul>
        </div>
        <div v-else class="d-flex gap-3">
          <RouterLink to="/auth/login" class="btn btn-primary">Đăng nhập</RouterLink>
          <RouterLink to="/auth/register" class="btn btn-primary">Đăng kí</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
