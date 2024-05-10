<script setup>
import { useAddData } from '@/composable'
import { Icon } from '@iconify/vue'
import { ref, provide, watchEffect } from 'vue'
import { Timestamp } from 'firebase/firestore'
import AlertComponent from '@/components/AlertComponent.vue'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'

const comfirmPasswordInput = ref(null)
const passwordInput = ref(null)
const registerInfo = ref({
  username: '',
  email: '',
  password: ''
})
const confirmPassword = ref('')
const alert = ref({
  msg: '',
  type: '',
  show: false
})
provide('alert', alert)
const register = async () => {
  if (registerInfo.value.password !== confirmPassword.value) {
    alert.value.show = true
    alert.value.type = 'danger'
    alert.value.msg = 'Mật khẩu không trùng khớp với nhau '
    return
  }
  const { docRef } = await useAddData('users', {
    ...registerInfo.value,
    createdAt: Timestamp.now().toDate()
  })
  if (docRef) {
    alert.value.show = true
    alert.value.type = 'success'
    alert.value.msg = `Đăng ký tài khoản thành công`
  }
}
const router = useRouter()
const userInfo = useStorage('user', sessionStorage)
watchEffect(() => {
  if (userInfo.value.username) {
    router.push({ path: '/' })
  }
})
</script>

<template>
  <form
    @submit.prevent="register"
    class="bg-body mt-5 container p-5 rounded-5 border border-primary-subtle"
  >
    <div class="d-flex justify-content-center">
      <img src="@/assets/images/Logo_RNI.webp" class="w-25" />
    </div>
    <h1 class="text-center fw-bold">Đăng ký tài khoản</h1>
    <AlertComponent />
    <div class="mb-3">
      <label for="username" class="form-label">Tên người dùng</label>
      <input
        type="text"
        name="username"
        id="username"
        class="form-control"
        v-model="registerInfo.username"
        aria-describedby="helpUsername"
      />
      <small id="helpUsername" class="text-muted"
        >Bạn hãy nhập tên mà bạn hay được gọi ở ngoài</small
      >
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        name="email"
        id="email"
        aria-describedby="emailHelpId"
        v-model="registerInfo.email"
        placeholder="abc@mail.com"
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
          v-model="registerInfo.password"
          ref="passwordInput"
        />
        <Icon
          icon="fluent:eye-16-regular"
          @click="passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'"
          class="position-absolute top-50 fs-5 translate-middle end-0 z-3"
        />
      </div>
    </div>
    <!-- fluent:eye-16-regular -->
    <div class="mb-3">
      <label for="reeatPassword" class="form-label">Nhập lại mật khẩu</label>
      <div class="input-group position-relative">
        <input
          type="password"
          class="form-control z-0"
          name="password"
          id="repeatPassword"
          placeholder=""
          v-model="confirmPassword"
          ref="comfirmPasswordInput"
        />
        <Icon
          icon="fluent:eye-16-regular"
          @click="
            comfirmPasswordInput.type =
              comfirmPasswordInput.type === 'password' ? 'text' : 'password'
          "
          class="position-absolute top-50 fs-5 translate-middle end-0"
        />
      </div>
    </div>
    <button class="btn btn-primary w-100">Đăng ký</button>
    <hr class="my-3" />
    <p class="text-center fs-5">
      Đã có tài khoản ? <RouterLink class="link-primary" to="/auth/login">Đăng nhập</RouterLink>
    </p>
  </form>
</template>
