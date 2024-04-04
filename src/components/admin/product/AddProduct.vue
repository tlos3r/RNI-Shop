<script setup>
import { ref } from 'vue'
import { db } from '@/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useStorage } from '@vueuse/core'

const product = useStorage('product', {
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
const addProduct = async () => {
  await setDoc(doc(db, 'products'), product.value)
}
</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addproduct">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addproduct"
    tabindex="-1"
    aria-labelledby="addproductLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm sản phẩm</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="addProduct">
          <div class="modal-body">
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
              <select class="form-select form-select-sm mb-3" aria-label="Large select example">
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
              <textarea class="form-control" name="desc" id="desc" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label for="imageUrl" class="form-label">Chọn ảnh</label>
              <input
                type="file"
                class="form-control"
                name="imageUrl"
                id="imageUrl"
                placeholder=""
                aria-describedby="fileHelpId"
              />
              <div id="fileHelpId" class="form-text">Lưu ý ảnh không quá 20Mb</div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  style="width: 75%"
                >
                  75%
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-primary">
              <div class="spinner-grow" v-if="loading" role="status">
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
