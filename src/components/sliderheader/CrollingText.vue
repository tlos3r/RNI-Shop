<script setup>
const marqueefyList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy'))
// eslint-disable-next-line
const marqueefyInstances = marqueefyList.map((m) => {
  // eslint-disable-next-line
  return new marqueefy.Marqueefy(m)
})
</script>
<template>
  <div class="container-fluid my-5">
    <div class="marqueefy w-100 bg-light-subtle" data-mq-speed="50" tabindex="0">
      <div class="content fs-3">
        RNI Shop - uy tín tạo nên thương hiệu của chúng tôi . Giảm 20% cho khách hàng mua nhiều tại
        RNI Shop
      </div>
    </div>
  </div>
</template>
<style scoped></style>
