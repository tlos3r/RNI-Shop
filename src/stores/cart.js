import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { toast } from 'vue3-toastify'
import { ref } from 'vue'
export const useCartStore = defineStore('cart', () => {
  const cart = useLocalStorage('cart', [])
  const cartTotalAmount = ref(0)
  function addToCart(product) {
    // const productIndex = cart.value.findIndex((item) => item.id === product.id)
    const productIndex = cart.value.findIndex((item) => item.id === product.id)
    if (productIndex >= 0) {
      cart.value[productIndex].buyCount += 1
      toast.info(`Tăng lên 1 sản phẩm cho ${product.name}`)
    } else {
      cart.value.push({ ...product, buyCount: 1 })
      toast.success(`${product.name} đã được thêm`)
    }
  }

  function decreaseCartBuyCount(product) {
    const productIndex = cart.value.findIndex((item) => item.id === product.id)
    if (cart.value[productIndex].buyCount > 1) {
      cart.value[productIndex].buyCount -= 1
      toast.info(`Giảm xuống 1 sản phẩm cho ${product.name}`)
    } else {
      cart.value.splice(productIndex, 1)
      toast.success(`Xoá thành công sản phẩm ${product.name} ra khỏi giỏ hàng`)
    }
  }

  function removeFromCart(product) {
    const newCart = cart.value.filter((item) => item.id !== product.id)
    cart.value = newCart
    toast.success(`${product.name} đã được xoá`)
  }

  function calculateTotal() {
    const array = []
    cart.value.forEach((item) => {
      const total = item.price * item.buyCount
      array.push(total)
    })
    const totalAmount = array.reduce((a, b) => {
      return a + b
    }, 0)

    cartTotalAmount.value = totalAmount
  }
  function clearCart() {
    cart.value = []
    toast.success(`Xoá toàn bộ giỏ hàng thành công`)
  }

  return {
    cart,
    cartTotalAmount,
    addToCart,
    decreaseCartBuyCount,
    removeFromCart,
    clearCart,
    calculateTotal
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
