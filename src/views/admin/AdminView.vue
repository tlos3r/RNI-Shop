<script setup>
import { ref, watchEffect } from 'vue'
import { query, where, getDocs, collection } from 'firebase/firestore'
import { db } from '@/firebase'
import AlertComponent from '@/components/AlertComponent.vue'
import { useRouter } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
const user = ref({
  email: '',
  password: ''
})
const show = ref(false)
const type = ref('')
const msg = ref('')
const router = useRouter()
const { get, set } = useCookies(['auth'])

const loginAdmin = async () => {
  const q = query(collection(db, 'users'), where('email', '==', user.value.email))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.empty) {
    show.value = true
    type.value = 'warning'
    msg.value = 'Email hoặc mật khẩu không đúng !'
  } else {
    querySnapshot.forEach((doc) => {
      if (doc.data().password === user.value.password && doc.data().role === 'ADMIN') {
        set('user', doc.data())
        router.push({ path: '/admin/dashboard' })
      } else {
        show.value = true
        type.value = 'warning'
        msg.value = 'Email hoặc mật khẩu không đúng !'
      }
    })
  }
}
watchEffect(() => {
  if (get('user')) {
    if (get('user').role !== 'ADMIN') {
      router.push({ path: '/' })
    } else router.push({ path: '/admin/dashboard' })
  }
})
</script>

<template>
  <div class="container mt-5">
    <form
      @submit.prevent="loginAdmin"
      class="row mx-auto justify-content-center align-items-center g-2 bg-body p-5 border rounded-5 w-50"
    >
      <img src="@/assets/images/Logo_RNI.webp" class="img-fluid w-50" />
      <h1 class="text-center fw-semibold">Đăng nhập admin</h1>

      <AlertComponent :msg="msg" :type="type" :show="show" />
      <div class="col-12">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name=""
            id="email"
            aria-describedby="Email"
            placeholder="abc@mail.com"
            v-model="user.email"
          />
        </div>
      </div>
      <div class="col-12">
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            name=""
            id="password"
            placeholder=""
            v-model="user.password"
          />
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary w-100">Đăng nhập</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
