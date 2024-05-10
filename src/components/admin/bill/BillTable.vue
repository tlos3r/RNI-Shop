<script setup>
defineProps({
  data: {
    type: Array,
    default() {
      return []
    }
  }
})
</script>

<template>
  <div class="">
    <div v-if="data.length <= 0" class="text-center">Không tìm thấy dữ liệu nào</div>
    <div v-else class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên khách hàng</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Tên hàng đã đặt</th>
            <th scope="col">Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bill, index) in data" :key="index">
            <td scope="row">{{ index + 1 }}</td>
            <td scope="row">{{ bill.name }}</td>
            <td>{{ bill.name }}</td>
            <td>{{ bill.phone }}</td>
            <td>
              <ul class="list-group list-group-flush">
                <li
                  v-for="(product, index) in bill.products"
                  :key="index"
                  class="mb-1 list-group-item"
                >
                  {{ product.name }} - {{ `Số lượng : ${product.buyCount}` }} -
                  {{ `${product.price} VND` }}
                </li>
              </ul>
            </td>
            <td class="fw-bold">{{ `${bill.total} VND ` }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
