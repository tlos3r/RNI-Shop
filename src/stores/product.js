import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])

  function storeProduct(data) {
    products.value = data
  }
  return { products, storeProduct }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
