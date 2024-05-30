<script setup>
import { useUpdateData } from '@/composable'
import { Icon } from '@iconify/vue'
import { Timestamp } from 'firebase/firestore'
import { ref, provide, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({ data: Object })
const alert = ref({
  msg: '',
  type: '',
  show: false
})
provide('alert', alert)
const user = ref({
  username: '',
  email: '',
  password: '',
  role: ''
})
const router = useRouter()
const editUser = async () => {
  const { docRef } = await useUpdateData('users', props.data.id, {
    ...user.value,
    updatedAt: Timestamp.now().toDate()
  })
  if (docRef) {
    alert.value.msg = 'Sửa người dùng thành công'
    alert.value.type = 'success'
    alert.value.show = true
    router.go()
  } else {
    alert.value.msg = 'Có lỗi gì đó đã xảy ra'
    alert.value.type = 'danger'
    alert.value.show = true
  }
}
onMounted(() => {
  user.value.username = props.data.username
})
</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editUserId">
    <Icon icon="lucide:edit" width="1.5em" height="1.5em" style="color: white" />
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="editUserId"
    tabindex="-1"
    role="dialog"
    aria-labelledby="editTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editTitleId">Sửa người dùng</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="editUser">
          <div class="modal-body">
            <AlertComponent />
            <div class="mb-3">
              <!-- Tên người dùng -->
              <label for="username" class="form-label">Tên người dùng</label>
              <input
                type="text"
                name="username"
                id="username"
                class="form-control"
                placeholder=""
                v-model="user.username"
              />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder=""
                v-model="user.email"
              />
            </div>
            <!-- Mật khẩu -->
            <div class="mb-3">
              <label for="password" class="form-label">Mật khẩu</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder=""
                v-model="user.password"
              />
            </div>
            <!-- Chọn quyền  -->
            <div class="mb-3">
              <label for="role" class="form-label">Quyền</label>
              <select v-model="user.role" class="form-select form-select-sm" name="role" id="role">
                <option selected disabled>Chọn quyền</option>
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-info"
              @click="$router.go()"
              data-bs-dismiss="modal"
            >
              Load lai trang
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="submit" class="btn btn-primary">
              <div class="spinner-grow" v-if="loading" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <span v-else>Lưu người dùng</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
