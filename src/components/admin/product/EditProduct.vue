<script setup>
import { ref, onMounted, provide } from 'vue'
import { useUpdateData } from '@/composable/updateData'
import { Icon } from '@iconify/vue'
import { AlertComponent } from '@/components'
import { ref as refFirebase, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '@/firebase'
import { Timestamp } from 'firebase/firestore'

const alert = ref({
  msg: '',
  type: '',
  show: false
})
provide('alert', alert)
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const product = ref({
  name: '',
  brand: '',
  imageUrl: '',
  desc: '',
  price: 0,
  boughtCount: 0,
  quantity: 0
})
const laundryDetergentBrands = [
  'Tide',
  'Gain',
  'Persil',
  'Arm & Hammer',
  'Downy',
  'Purex',
  'Cheer',
  'OxiClean',
  'Ajax',
  'Foca'
]
const loading = ref(false)
const progress = ref(0)

const editProduct = async () => {
  loading.value = true

  const { docRef } = await useUpdateData('products', props.data.id, {
    name: product.value.name,
    brand: product.value.brand,
    imageUrl: product.value.imageUrl,
    desc: product.value.desc,
    price: product.value.price,
    quantity: product.value.quantity,
    updatedAt: Timestamp.now().toDate()
  })
  try {
    if (docRef) {
      loading.value = false
      alert.value.msg = `Sửa sản phẩm ${product.value.name} thành công !`
      alert.value.type = 'success'
      alert.value.show = true
    }
  } catch (error) {
    loading.value = false
    alert.value.msg = `${error.message}`
    alert.value.type = 'danger'
  }
}

const handleImageChange = (e) => {
  // get file
  const file = e.target.files[0]

  const storageRef = refFirebase(storage, `images/${Date.now()}${file.name}`)
  const uploadTask = uploadBytesResumable(storageRef, file)
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progressNumber = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      progress.value = progressNumber
    },
    (error) => {
      ;(alert.value.msg = error.message), (alert.value.type = 'danger'), (alert.value.show = true)
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        product.value.imageUrl = downloadURL
        ;(alert.value.msg = ''), (alert.value.type = ''), (alert.value.show = false)
      })
    }
  )
}

onMounted(() => {
  product.value.brand = props.data.brand
  product.value.name = props.data.name
  product.value.imageUrl = props.data.imageUrl
  product.value.desc = props.data.desc
  product.value.price = props.data.price
  product.value.quantity = props.data.quantity
})
</script>

<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-success"
    data-bs-toggle="modal"
    :data-bs-target="`#${props.data.id}`"
  >
    <Icon icon="lucide:edit" width="1.5em" height="1.5em" style="color: white" />
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="props.data.id"
    tabindex="-1"
    aria-labelledby="editProducttLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Sửa sản phẩm {{ props.data.name }}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="editProduct">
          <div class="modal-body">
            <AlertComponent :msg="alert.msg" :type="alert.type" :show="alert.show" />
            <div class="mb-3">
              <label for="name" class="form-label">Tên sản phẩm</label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="nước giặt omo"
                aria-describedby="nameId"
                v-model="product.name"
              />
            </div>
            <div class="mb-3">
              <label for="brand" class="form-label">Hãng</label>
              <select
                class="form-select form-select-sm mb-3"
                aria-label="Large select example"
                v-model="product.brand"
              >
                <option selected disabled>Hãng thuộc về sản phẩm này</option>
                <option
                  v-for="(brand, index) in laundryDetergentBrands"
                  :key="index"
                  :value="brand"
                >
                  {{ brand }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="desc" class="form-label">Mô tả</label>
              <textarea
                class="form-control"
                name="desc"
                id="desc"
                rows="3"
                v-model="product.desc"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="quantity" class="form-label">Số lượng</label>
              <input
                type="number"
                class="form-control"
                name="quantity"
                id="quantity"
                aria-describedby="quantityID"
                v-model="product.quantity"
              />
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Giá</label>
              <input
                type="number"
                class="form-control"
                name="price"
                id="price"
                aria-describedby="helpId"
                v-model="product.price"
              />
            </div>

            <div class="mb-3">
              <label for="imageUrl" class="form-label">Chọn ảnh</label>
              <input
                type="file"
                class="form-control"
                accept="image/*"
                name="imageUrl"
                id="imageUrl"
                placeholder=""
                aria-describedby="fileHelpId"
                @change="(e) => handleImageChange(e)"
              />
              <div id="fileHelpId" class="form-text">Lưu ý ảnh không quá 20Mb</div>
              <div
                v-show="progress > 0"
                class="progress"
                role="progressbar"
                aria-label="Animated striped example"
                :aria-valuenow="`${progress}`"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  :style="`width: ${progress}%`"
                >
                  {{ progress }}%
                </div>
              </div>
              <div class="mb-3">
                <input
                  v-if="product.imageUrl"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                  v-model="product.imageUrl"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-info"
              data-bs-dismiss="modal"
              @click="$router.go()"
            >
              Refresh lại trang
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="submit" class="btn btn-primary">
              <div class="spinner-grow spinner-grow-sm" v-if="loading" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <span v-else>Lưu sản phẩm</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
