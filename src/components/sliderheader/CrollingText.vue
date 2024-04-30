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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam doloremque velit asperiores.
        Necessitatibus asperiores dolorum, pariatur distinctio suscipit fugit et nihil consequuntur
        mollitia, quo deleniti omnis odit cum illum modi!
      </div>
    </div>
  </div>
</template>
<style scoped></style>
