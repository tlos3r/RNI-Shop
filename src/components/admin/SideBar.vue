<script setup>
import { Icon } from '@iconify/vue'
import { useStorage } from '@vueuse/core'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const userInfo = useStorage('user', sessionStorage)
const logOut = () => {
  userInfo.value = null
  router.push({ path: '/admin' })
}
</script>

<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 260px">
    <RouterLink
      to="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <img class="w-50 me-2" src="@/assets/images/Logo_RNI.webp" alt="" />
    </RouterLink>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <!-- <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Home
        </a>
      </li> -->

      <li>
        <RouterLink
          to="/admin/bills"
          class="nav-link link-body-emphasis"
          :class="{ active: router.currentRoute.value.path === '/admin/bills' }"
        >
          <Icon icon="solar:bill-list-outline" width="1.2em" height="1.2em" class="mx-1" />
          Đặt hàng
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/admin/products"
          class="nav-link link-body-emphasis"
          :class="{ active: router.currentRoute.value.path === '/admin/products' }"
        >
          <Icon icon="ant-design:product-outlined" width="1.2em" height="1.2em" class="mx-1" />
          Sản phẩm
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/admin/users"
          class="nav-link link-body-emphasis"
          :class="{ active: router.currentRoute.value.path === '/admin/users' }"
        >
          <Icon icon="mingcute:user-4-line" width="1.2em" height="1.2em" class="mx-1" />
          Người dùng
        </RouterLink>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Icon icon="fa-regular:user" width="32" height="32" class="me-2" />
        <strong>{{ `${userInfo.username} (${userInfo.role})` }}</strong>
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" @click="logOut">Đăng xuất</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
