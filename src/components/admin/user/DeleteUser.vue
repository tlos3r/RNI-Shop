<script setup>
import { AlertComponent } from '@/components'
import { Icon } from '@iconify/vue'

defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean
  }
})
const emit = defineEmits(['delete'])
</script>

<template>
  <!-- Modal trigger button -->
  <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#deleteUserModal"
  >
    <Icon icon="material-symbols:delete-outline" />
    Xóa
  </button>

  <div
    class="modal fade"
    id="deleteUserModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalTitleId"
    aria-hidden="true"
    :disabled="index <= 0"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitleId">Xóa {{ index }} người dùng</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <AlertComponent />
          <span>Bạn có chắc chắn chứ , sẽ không thể hoàn tác tại việc đã làm</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-danger" @click="emit('delete')">
            <div class="spinner-grow" v-if="loading" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <span v-else>Xác nhận</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
