<script>
export default {}
</script>
<template>
  <div class="scrolling-text">
    <h4 class="title">WELCOME TO MY FINAL PROJECT ❤️</h4>
    <h4 class="text">WELCOME TO MY FINAL PROJECT ❤️</h4>
    <h4 class="text">WELCOME TO MY FINAL PROJECT ❤️</h4>
    <h4 class="text">WELCOME TO MY FINAL PROJECT ❤️</h4>
    <h4 class="text">WELCOME TO MY FINAL PROJECT ❤️</h4>
    <h4 class="text">WELCOME TO MY FINAL PROJEC ❤️T</h4>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transform: translate();
}
.scrolling-text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(90deg, rgba(255, 22, 55, 1), rgba(34, 82, 209, 1) 100%);
  padding: 10px;
}
h4 {
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  animation: scrolling-text 10s linear infinite;
}
.text {
  color: white;
  font-size: 18px;
  margin-left: 20px;
}
@keyframes scrolling-text {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
