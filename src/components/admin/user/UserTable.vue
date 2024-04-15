<script setup>
import { provide, ref, toRaw } from 'vue'
import { AddUser, DeleteUser, EditUser } from '@/components'
import { useDeleteData } from '@/composable'
defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  }
})
const loading = ref(false)
const checkedRows = ref([])
const alert = ref({
  msg: '',
  type: '',
  show: false
})
provide('alert', alert)
const deleteUsers = async () => {
  loading.value = true
  try {
    await useDeleteData('users', toRaw(checkedRows.value))
    alert.value.msg = 'Xóa thành công'
    alert.value.type = 'success'
    alert.value.show = 'show'
    loading.value = false
  } catch (error) {
    alert.value.msg = error.message
    alert.value.type = 'danger'
    alert.value.show = 'show'
    loading.value = false
  }
}
</script>

<template>
  <div class="d-flex gap-2">
    <AddUser />
    <DeleteUser
      @delete="deleteUsers"
      :loading="loading"
      :data="checkedRows"
      :index="checkedRows.length"
    />
  </div>
  <div v-if="data.length <= 0" class="text-center">Không tìm thấy dữ liệu nào</div>
  <div v-else class="table-responsive">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Id</th>
          <th scope="col">Tên người dùng</th>
          <th scope="col">Email</th>
          <th scope="col">Quyền</th>
          <th scope="col">Tạo vào ngày</th>
          <th scope="col">Cập nhật vào ngày</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in data" :key="index">
          <td scope="row">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                aria-label="Checkbox for delete object"
                :checked="checkedRows.includes(user.id)"
                :value="user.id"
                v-model="checkedRows"
              />
            </div>
          </td>
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.createdAt.toDate().toLocaleString('vi') }}</td>
          <td>
            {{
              `${user.updatedAt ? user.updatedAt.toDate().toLocaleString('vi') : 'Chưa chỉnh sửa lần nào'}`
            }}
          </td>
          <td><EditUser :data="user" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
