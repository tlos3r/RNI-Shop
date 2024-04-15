<script setup>
import { ref } from 'vue'
const props = defineProps({
  currentPage: Number,
  totalProduct: Number,
  productPerPage: Number
})
const emit = defineEmits(['setCurrentPage'])
const pageNumbers = []
// const totalPages = props.totalProduct / props.productPerPage;
const pageNumberLimit = ref(5)
const maxPageNumberLimit = ref(5)
const minPageNumberLimit = ref(0)

// paginate
const paginate = (pageNumber) => {
  emit('setCurrentPage', pageNumber)
}

const paginateNext = () => {
  emit('setCurrentPage', props.currentPage + 1)
  // show next set of page number
  if (props.currentPage + 1 > maxPageNumberLimit.value) {
    maxPageNumberLimit.value += pageNumberLimit.value
    minPageNumberLimit.value += pageNumberLimit.value
  }
}
const paginatePrev = () => {
  emit('setCurrentPage', props.currentPage - 1)
  // show prev set of page number
  if ((props.currentPage - 1) % pageNumberLimit.value === 0) {
    maxPageNumberLimit.value -= pageNumberLimit.value
    minPageNumberLimit.value -= pageNumberLimit.value
  }
}
for (let i = 1; i <= Math.ceil(props.totalProduct / props.productPerPage); i++) {
  pageNumbers.push(i)
}
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ dissabled: currentPage === pageNumbers[0] }">
        <a @click="paginatePrev" class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: currentPage === number }"
        v-for="number in pageNumbers"
        :key="number"
      >
        <a @click="paginate(number)" class="page-link" href="#">{{ number }}</a>
      </li>
      <li
        class="page-item"
        @click="paginateNext"
        :class="{ disabled: currentPage === pageNumbers[pageNumbers.length - 1] }"
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
