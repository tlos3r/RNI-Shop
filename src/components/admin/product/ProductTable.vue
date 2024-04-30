<script setup>
import { ref, toRaw, provide } from 'vue'
import { AddProduct, DeleteProduct, EditProduct } from '@/components'
import { useDeleteData } from '@/composable'
defineProps({
  data: {
    type: Array,
    default() {
      return []
    }
  }
})
const alert = ref({
  msg: '',
  type: '',
  show: false
})
const loading = ref(false)
const checkedRows = ref([])
provide('alert', alert)
const deleteProduct = async () => {
  loading.value = true
  try {
    await useDeleteData('products', toRaw(checkedRows.value))
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
function shortenText(text, n) {
  if (text.length > n) {
    return text.substring(0, n).concat('...')
  }
  return text
}
</script>

<template>
  <div class="">
    <div class="d-flex gap-2">
      <AddProduct />
      <DeleteProduct
        @delete="deleteProduct"
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
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Hãng</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Ảnh</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in data" :key="index">
            <td scope="row">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  aria-label="Checkbox for delete object"
                  :checked="checkedRows.includes(product.id)"
                  :value="product.id"
                  v-model="checkedRows"
                />
              </div>
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.brand }}</td>
            <td>
              {{ shortenText(product.desc, 30) }}
            </td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <img
                :src="product.imageUrl"
                alt="day la anh san pham"
                class="rounded"
                width="100"
                height="100"
              />
            </td>
            <td><EditProduct :data="product" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
