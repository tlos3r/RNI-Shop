<script setup>
import { Icon } from '@iconify/vue'
import { ref, provide, watchEffect } from 'vue'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { AlertComponent } from '@/components'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'

const passwordInput = ref(null)
const router = useRouter()
const loginInfo = ref({
  email: '',
  password: ''
})
const alert = ref({
  msg: '',
  type: '',
  show: false
})
const userInfo = useStorage('user', {})
provide('alert', alert)
const login = async () => {
  const q = query(collection(db, 'users'), where('email', '==', loginInfo.value.email))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.empty || querySnapshot.size > 1) {
    alert.value.show = true
    alert.value.type = 'danger'
    alert.value.msg = 'Email hoặc mật khẩu này không đúng !'
  } else {
    if (querySnapshot.docs[0].data().password === loginInfo.value.password) {
      alert.value.show = true
      alert.value.type = 'success'
      alert.value.msg = 'Đăng nhận thành công ! Tự động chuyển hướng trong 2s'
      userInfo.value = querySnapshot.docs[0].data()
      setTimeout(() => {
        router.push({ path: '/' })
      }, 2000)
    } else {
      alert.value.show = true
      alert.value.type = 'danger'
      alert.value.msg = 'Email hoặc mật khẩu này không đúng !'
    }
  }
}
watchEffect(() => {
  if (userInfo.value.username) {
    router.push({ path: '/' })
  }
})
</script>

<template>
  <form
    @submit.prevent="login"
    class="bg-body mt-5 container p-5 rounded-5 border border-primary-subtle"
  >
    <div class="d-flex justify-content-center">
      <img src="@/assets/images/Logo_RNI.webp" class="w-25" />
    </div>
    <h1 class="text-center fw-bold">Đăng nhập</h1>
    <AlertComponent />
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        v-model="loginInfo.email"
        aria-describedby="helpUsername"
      />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Mật khẩu</label>
      <div class="input-group position-relative">
        <input
          type="password"
          class="form-control z-1"
          name="password"
          id="password"
          placeholder=""
          v-model="loginInfo.password"
          ref="passwordInput"
        />
        <Icon
          icon="fluent:eye-16-regular"
          @click="passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'"
          class="position-absolute top-50 fs-5 translate-middle end-0 z-3"
        />
      </div>
    </div>
    <button class="btn btn-primary w-100">Đăng nhập</button>
    <hr class="my-3" />
    <p class="text-center fs-5">
      Bạn chưa có tài khoản ?
      <RouterLink class="link-primary" to="/auth/register">Đăng ký</RouterLink>
    </p>
  </form>
</template>

<style scoped></style>
